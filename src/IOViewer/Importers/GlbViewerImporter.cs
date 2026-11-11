using System.Buffers.Binary;
using System.Text;
using System.Text.Json;
using IOViewer.Model;

namespace IOViewer.Importers;

/// <summary>
/// Imports standard glTF 2.0 Binary (.glb) files into a ViewerDocument.
/// </summary>
public static class GlbViewerImporter
{
    private const uint GlbMagic = 0x46546C67; // "glTF"
    private const uint ChunkJson = 0x4E4F534A; // "JSON"
    private const uint ChunkBin = 0x004E4942; // "BIN\0"

    public static ViewerDocument Load(string filePath)
    {
        ArgumentNullException.ThrowIfNull(filePath);
        using var fs = File.OpenRead(filePath);
        return Load(fs, Path.GetFileNameWithoutExtension(filePath));
    }

    public static ViewerDocument Load(Stream stream, string documentTitle = "Imported GLB Model")
    {
        ArgumentNullException.ThrowIfNull(stream);

        using var reader = new BinaryReader(stream, Encoding.UTF8, leaveOpen: true);

        // Header: 12 bytes
        uint magic = reader.ReadUInt32();
        if (magic != GlbMagic)
        {
            throw new InvalidDataException("Invalid GLB header: magic signature mismatch.");
        }

        uint version = reader.ReadUInt32();
        if (version != 2)
        {
            throw new NotSupportedException($"Unsupported glTF version: {version}. Only glTF 2.0 is supported.");
        }

        uint totalLength = reader.ReadUInt32();

        // Chunk 0: JSON
        uint jsonChunkLength = reader.ReadUInt32();
        uint jsonChunkType = reader.ReadUInt32();
        if (jsonChunkType != ChunkJson)
        {
            throw new InvalidDataException("Expected JSON chunk as first chunk in GLB file.");
        }

        byte[] jsonBytes = reader.ReadBytes((int)jsonChunkLength);
        string jsonText = Encoding.UTF8.GetString(jsonBytes);

        // Chunk 1: BIN (optional)
        byte[]? binBuffer = null;
        if (stream.Position < totalLength)
        {
            uint binChunkLength = reader.ReadUInt32();
            uint binChunkType = reader.ReadUInt32();
            if (binChunkType == ChunkBin)
            {
                binBuffer = reader.ReadBytes((int)binChunkLength);
            }
        }

        var doc = new ViewerDocument(documentTitle);

        using var jsonDoc = JsonDocument.Parse(jsonText);
        var root = jsonDoc.RootElement;

        // Parse accessors & bufferViews
        if (!root.TryGetProperty("accessors", out var accessorsEl) ||
            !root.TryGetProperty("bufferViews", out var bufferViewsEl) ||
            binBuffer is null)
        {
            return doc;
        }

        var bufferViews = bufferViewsEl.EnumerateArray().ToArray();
        var accessors = accessorsEl.EnumerateArray().ToArray();

        // Parse Materials
        var materials = new List<ViewerMaterial>();
        if (root.TryGetProperty("materials", out var materialsEl))
        {
            int matIdx = 0;
            foreach (var matEl in materialsEl.EnumerateArray())
            {
                var mat = new ViewerMaterial
                {
                    Id = matIdx++,
                    Name = matEl.TryGetProperty("name", out var mn) ? mn.GetString() ?? "Material" : $"Material {matIdx}"
                };

                if (matEl.TryGetProperty("pbrMetallicRoughness", out var pbr))
                {
                    if (pbr.TryGetProperty("baseColorFactor", out var bcf) && bcf.GetArrayLength() >= 4)
                    {
                        var arr = bcf.EnumerateArray().ToArray();
                        byte r = (byte)Math.Clamp((int)(arr[0].GetDouble() * 255), 0, 255);
                        byte g = (byte)Math.Clamp((int)(arr[1].GetDouble() * 255), 0, 255);
                        byte b = (byte)Math.Clamp((int)(arr[2].GetDouble() * 255), 0, 255);
                        byte a = (byte)Math.Clamp((int)(arr[3].GetDouble() * 255), 0, 255);
                        mat.Color = new RgbaColor(r, g, b, a);
                        mat.Opacity = arr[3].GetDouble();
                    }
                }
                materials.Add(mat);
                doc.Materials.Add(mat);
            }
        }

        // Parse meshes lazily: one ViewerGeometry per (mesh, primitive), one ViewerMesh per node occurrence.
        var meshElements = root.TryGetProperty("meshes", out var meshesEl) ? meshesEl.EnumerateArray().ToArray() : [];
        var geometryIds = new Dictionary<(int Mesh, int Primitive), int?>();
        int meshCounter = 0;

        void Instantiate(int meshIndex, Transform3d world)
        {
            if (meshIndex < 0 || meshIndex >= meshElements.Length)
            {
                throw new InvalidDataException($"glTF node references missing mesh {meshIndex}.");
            }

            var meshEl = meshElements[meshIndex];
            string meshName = meshEl.TryGetProperty("name", out var mn) ? mn.GetString() ?? $"Mesh {meshCounter + 1}" : $"Mesh {meshCounter + 1}";
            if (!meshEl.TryGetProperty("primitives", out var primsEl)) return;

            int primIndex = -1;
            foreach (var prim in primsEl.EnumerateArray())
            {
                primIndex++;
                if (!prim.TryGetProperty("attributes", out var attrs) ||
                    !attrs.TryGetProperty("POSITION", out var posAccIdx))
                {
                    continue;
                }

                if (!geometryIds.TryGetValue((meshIndex, primIndex), out int? geometryId))
                {
                    var positions = ReadVec3Accessor(posAccIdx.GetInt32(), accessors, bufferViews, binBuffer);
                    if (positions.Count == 0)
                    {
                        geometryId = null;
                    }
                    else
                    {
                        List<int> indices;
                        if (prim.TryGetProperty("indices", out var indAccIdx))
                        {
                            indices = ReadIndicesAccessor(indAccIdx.GetInt32(), accessors, bufferViews, binBuffer);
                        }
                        else
                        {
                            indices = new List<int>(positions.Count);
                            for (int i = 0; i < positions.Count; i++) indices.Add(i);
                        }

                        List<Vector3d>? normals = null;
                        if (attrs.TryGetProperty("NORMAL", out var normAccIdx))
                        {
                            normals = ReadVec3Accessor(normAccIdx.GetInt32(), accessors, bufferViews, binBuffer);
                        }

                        geometryId = doc.Geometries.Count;
                        doc.Geometries.Add(new ViewerGeometry
                        {
                            Id = geometryId.Value,
                            Vertices = positions,
                            Indices = indices,
                            Normals = normals
                        });
                    }

                    geometryIds[(meshIndex, primIndex)] = geometryId;
                }

                if (geometryId is null) continue;

                int? matId = null;
                RgbaColor? col = null;
                if (prim.TryGetProperty("material", out var mProp))
                {
                    int mid = mProp.GetInt32();
                    if (mid >= 0 && mid < materials.Count)
                    {
                        matId = mid;
                        col = materials[mid].Color;
                    }
                }

                doc.Meshes.Add(new ViewerMesh
                {
                    Id = ++meshCounter,
                    Name = meshName,
                    GeometryId = geometryId,
                    Transform = world.Then(YupToZup),
                    MaterialId = matId,
                    Color = col ?? new RgbaColor(200, 200, 200)
                });
            }
        }

        if (root.TryGetProperty("scenes", out var scenesEl) && root.TryGetProperty("nodes", out var nodesEl))
        {
            var nodes = nodesEl.EnumerateArray().ToArray();
            var scenes = scenesEl.EnumerateArray().ToArray();
            int sceneIndex = root.TryGetProperty("scene", out var sceneProp) ? sceneProp.GetInt32() : 0;
            if (sceneIndex >= 0 && sceneIndex < scenes.Length &&
                scenes[sceneIndex].TryGetProperty("nodes", out var rootNodes))
            {
                // glTF node hierarchy is a strict tree: reaching a node twice (shared child, repeated root, cycle) is invalid.
                var visited = new HashSet<int>();
                var stack = new Stack<(int Node, Transform3d ParentWorld)>();
                foreach (var rootNode in rootNodes.EnumerateArray().Reverse()) stack.Push((rootNode.GetInt32(), Transform3d.Identity));

                while (stack.Count > 0)
                {
                    var (nodeIndex, parentWorld) = stack.Pop();
                    if (nodeIndex < 0 || nodeIndex >= nodes.Length)
                    {
                        throw new InvalidDataException($"glTF references missing node {nodeIndex}.");
                    }

                    if (!visited.Add(nodeIndex))
                    {
                        throw new InvalidDataException($"glTF node {nodeIndex} is referenced more than once; the node hierarchy must be a tree.");
                    }

                    var node = nodes[nodeIndex];
                    var world = ReadNodeTransform(node).Then(parentWorld);
                    if (node.TryGetProperty("mesh", out var meshProp))
                    {
                        Instantiate(meshProp.GetInt32(), world);
                    }

                    if (node.TryGetProperty("children", out var children))
                    {
                        foreach (var child in children.EnumerateArray().Reverse()) stack.Push((child.GetInt32(), world));
                    }
                }
            }
        }
        else
        {
            // No scene graph: import every mesh once without a node transform.
            for (int i = 0; i < meshElements.Length; i++) Instantiate(i, Transform3d.Identity);
        }

        doc.ComputeBoundingBox();
        return doc;
    }

    // glTF is Y-up; the viewer model is Z-up: (x, y, z) becomes (x, -z, y).
    private static readonly Transform3d YupToZup = new(new Vector3d(1, 0, 0), new Vector3d(0, 0, 1), new Vector3d(0, -1, 0), Vector3d.Zero);

    private static Transform3d ReadNodeTransform(JsonElement node)
    {
        if (node.TryGetProperty("matrix", out var m))
        {
            var v = m.EnumerateArray().Select(e => e.GetDouble()).ToArray();
            if (v.Length != 16) throw new InvalidDataException("glTF node matrix must have 16 elements.");
            // Column-major: columns 0..2 are the axes, column 3 the translation.
            return new Transform3d(new(v[0], v[1], v[2]), new(v[4], v[5], v[6]), new(v[8], v[9], v[10]), new(v[12], v[13], v[14]));
        }

        var t = ReadVector(node, "translation", 3, [0, 0, 0]);
        var r = ReadVector(node, "rotation", 4, [0, 0, 0, 1]);
        var s = ReadVector(node, "scale", 3, [1, 1, 1]);

        double len = Math.Sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2] + r[3] * r[3]);
        if (len < 1e-12) throw new InvalidDataException("glTF node rotation quaternion has zero length.");
        double x = r[0] / len, y = r[1] / len, z = r[2] / len, w = r[3] / len;

        return new Transform3d(
            new Vector3d(1 - 2 * (y * y + z * z), 2 * (x * y + z * w), 2 * (x * z - y * w)) * s[0],
            new Vector3d(2 * (x * y - z * w), 1 - 2 * (x * x + z * z), 2 * (y * z + x * w)) * s[1],
            new Vector3d(2 * (x * z + y * w), 2 * (y * z - x * w), 1 - 2 * (x * x + y * y)) * s[2],
            new Vector3d(t[0], t[1], t[2]));
    }

    private static double[] ReadVector(JsonElement node, string name, int length, double[] fallback)
    {
        if (!node.TryGetProperty(name, out var el)) return fallback;
        var v = el.EnumerateArray().Select(e => e.GetDouble()).ToArray();
        if (v.Length != length) throw new InvalidDataException($"glTF node {name} must have {length} elements.");
        return v;
    }

    private static List<Vector3d> ReadVec3Accessor(int accIndex, JsonElement[] accessors, JsonElement[] bufferViews, byte[] bin)
    {
        var list = new List<Vector3d>();
        if (accIndex < 0 || accIndex >= accessors.Length) return list;

        var acc = accessors[accIndex];
        int count = acc.GetProperty("count").GetInt32();
        int bvIndex = acc.GetProperty("bufferView").GetInt32();
        int accOffset = acc.TryGetProperty("byteOffset", out var ao) ? ao.GetInt32() : 0;

        var bv = bufferViews[bvIndex];
        int bvOffset = bv.TryGetProperty("byteOffset", out var bo) ? bo.GetInt32() : 0;
        int stride = bv.TryGetProperty("byteStride", out var bs) ? bs.GetInt32() : 12;
        if (stride < 12) stride = 12;

        int start = bvOffset + accOffset;
        for (int i = 0; i < count; i++)
        {
            int offset = start + i * stride;
            if (offset + 12 > bin.Length) break;
            float x = BinaryPrimitives.ReadSingleLittleEndian(bin.AsSpan(offset, 4));
            float y = BinaryPrimitives.ReadSingleLittleEndian(bin.AsSpan(offset + 4, 4));
            float z = BinaryPrimitives.ReadSingleLittleEndian(bin.AsSpan(offset + 8, 4));
            list.Add(new Vector3d(x, y, z));
        }

        return list;
    }

    private static List<int> ReadIndicesAccessor(int accIndex, JsonElement[] accessors, JsonElement[] bufferViews, byte[] bin)
    {
        var list = new List<int>();
        if (accIndex < 0 || accIndex >= accessors.Length) return list;

        var acc = accessors[accIndex];
        int count = acc.GetProperty("count").GetInt32();
        int compType = acc.GetProperty("componentType").GetInt32();
        int bvIndex = acc.GetProperty("bufferView").GetInt32();
        int accOffset = acc.TryGetProperty("byteOffset", out var ao) ? ao.GetInt32() : 0;

        var bv = bufferViews[bvIndex];
        int bvOffset = bv.TryGetProperty("byteOffset", out var bo) ? bo.GetInt32() : 0;
        int start = bvOffset + accOffset;

        if (compType == 5123) // UNSIGNED_SHORT
        {
            for (int i = 0; i < count; i++)
            {
                int offset = start + i * 2;
                if (offset + 2 > bin.Length) break;
                list.Add(BinaryPrimitives.ReadUInt16LittleEndian(bin.AsSpan(offset, 2)));
            }
        }
        else if (compType == 5125) // UNSIGNED_INT
        {
            for (int i = 0; i < count; i++)
            {
                int offset = start + i * 4;
                if (offset + 4 > bin.Length) break;
                list.Add((int)BinaryPrimitives.ReadUInt32LittleEndian(bin.AsSpan(offset, 4)));
            }
        }
        else if (compType == 5121) // UNSIGNED_BYTE
        {
            for (int i = 0; i < count; i++)
            {
                int offset = start + i;
                if (offset >= bin.Length) break;
                list.Add(bin[offset]);
            }
        }

        return list;
    }
}
