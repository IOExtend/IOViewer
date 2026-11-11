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

        // Parse Meshes
        if (root.TryGetProperty("meshes", out var meshesEl))
        {
            int meshCounter = 0;
            foreach (var meshEl in meshesEl.EnumerateArray())
            {
                string meshName = meshEl.TryGetProperty("name", out var mn) ? mn.GetString() ?? $"Mesh {meshCounter + 1}" : $"Mesh {meshCounter + 1}";

                if (meshEl.TryGetProperty("primitives", out var primsEl))
                {
                    foreach (var prim in primsEl.EnumerateArray())
                    {
                        if (!prim.TryGetProperty("attributes", out var attrs) ||
                            !attrs.TryGetProperty("POSITION", out var posAccIdx))
                        {
                            continue;
                        }

                        var positions = ReadVec3Accessor(posAccIdx.GetInt32(), accessors, bufferViews, binBuffer);
                        if (positions.Count == 0) continue;

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

                        var vMesh = new ViewerMesh
                        {
                            Id = ++meshCounter,
                            Name = meshName,
                            Vertices = positions,
                            Indices = indices,
                            Normals = normals,
                            MaterialId = matId,
                            Color = col ?? new RgbaColor(200, 200, 200)
                        };

                        doc.Meshes.Add(vMesh);
                    }
                }
            }
        }

        doc.ComputeBoundingBox();
        return doc;
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
