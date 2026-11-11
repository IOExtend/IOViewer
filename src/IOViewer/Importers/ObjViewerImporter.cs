using System.Globalization;
using IOViewer.Model;

namespace IOViewer.Importers;

/// <summary>
/// Imports Wavefront OBJ models (.obj) into a ViewerDocument.
/// </summary>
public static class ObjViewerImporter
{
    public static ViewerDocument Load(string filePath)
    {
        ArgumentNullException.ThrowIfNull(filePath);
        using var fs = File.OpenRead(filePath);
        return Load(fs, Path.GetFileNameWithoutExtension(filePath));
    }

    public static ViewerDocument Load(Stream stream, string documentTitle = "Imported OBJ Model")
    {
        ArgumentNullException.ThrowIfNull(stream);

        using var reader = new StreamReader(stream, System.Text.Encoding.UTF8);

        var vertices = new List<Vector3d>();
        var normals = new List<Vector3d>();
        var meshIndices = new List<int>();
        var currentMeshName = "DefaultMesh";
        var doc = new ViewerDocument(documentTitle);
        int meshCounter = 0;

        string? line;
        while ((line = reader.ReadLine()) is not null)
        {
            var span = line.AsSpan().Trim();
            if (span.IsEmpty || span[0] == '#') continue;

            if (span.StartsWith("v ") || span.StartsWith("v\t"))
            {
                var parts = line.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length >= 4 &&
                    double.TryParse(parts[1], NumberStyles.Float, CultureInfo.InvariantCulture, out double x) &&
                    double.TryParse(parts[2], NumberStyles.Float, CultureInfo.InvariantCulture, out double y) &&
                    double.TryParse(parts[3], NumberStyles.Float, CultureInfo.InvariantCulture, out double z))
                {
                    vertices.Add(new Vector3d(x, y, z));
                }
            }
            else if (span.StartsWith("vn ") || span.StartsWith("vn\t"))
            {
                var parts = line.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length >= 4 &&
                    double.TryParse(parts[1], NumberStyles.Float, CultureInfo.InvariantCulture, out double x) &&
                    double.TryParse(parts[2], NumberStyles.Float, CultureInfo.InvariantCulture, out double y) &&
                    double.TryParse(parts[3], NumberStyles.Float, CultureInfo.InvariantCulture, out double z))
                {
                    normals.Add(new Vector3d(x, y, z));
                }
            }
            else if (span.StartsWith("f ") || span.StartsWith("f\t"))
            {
                var parts = line.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length >= 4)
                {
                    // Triangle or fan triangulation
                    int v0 = ParseFaceVertex(parts[1], vertices.Count);
                    int v1 = ParseFaceVertex(parts[2], vertices.Count);

                    for (int i = 3; i < parts.Length; i++)
                    {
                        int v2 = ParseFaceVertex(parts[i], vertices.Count);
                        if (v0 >= 0 && v1 >= 0 && v2 >= 0)
                        {
                            meshIndices.Add(v0);
                            meshIndices.Add(v1);
                            meshIndices.Add(v2);
                        }
                        v1 = v2;
                    }
                }
            }
            else if (span.StartsWith("o ") || span.StartsWith("g "))
            {
                if (meshIndices.Count > 0)
                {
                    doc.Meshes.Add(new ViewerMesh
                    {
                        Id = ++meshCounter,
                        Name = currentMeshName,
                        Vertices = [.. vertices],
                        Indices = [.. meshIndices],
                        Color = new RgbaColor(180, 180, 180)
                    });
                    meshIndices.Clear();
                }
                currentMeshName = line.Substring(2).Trim();
            }
        }

        if (meshIndices.Count > 0)
        {
            doc.Meshes.Add(new ViewerMesh
            {
                Id = ++meshCounter,
                Name = currentMeshName,
                Vertices = [.. vertices],
                Indices = [.. meshIndices],
                Color = new RgbaColor(180, 180, 180)
            });
        }

        doc.ComputeBoundingBox();
        return doc;
    }

    private static int ParseFaceVertex(string token, int totalVerts)
    {
        int slash = token.IndexOf('/');
        string numStr = slash >= 0 ? token.Substring(0, slash) : token;
        if (int.TryParse(numStr, NumberStyles.Integer, CultureInfo.InvariantCulture, out int idx))
        {
            if (idx > 0) return idx - 1; // 1-based
            if (idx < 0) return totalVerts + idx; // negative relative
        }
        return -1;
    }
}
