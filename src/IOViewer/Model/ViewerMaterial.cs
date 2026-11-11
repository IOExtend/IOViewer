namespace IOViewer.Model;

/// <summary>
/// Defines visual material appearance.
/// </summary>
public sealed class ViewerMaterial
{
    public int Id { get; set; }
    public string Name { get; set; } = "Default";
    public RgbaColor Color { get; set; } = new(200, 200, 200);
    public double Opacity { get; set; } = 1.0;
    public double Roughness { get; set; } = 0.5;
    public double Metalness { get; set; } = 0.1;
    public int? TextureIndex { get; set; }
}

/// <summary>
/// Diffuse texture data with real-world dimensions for UV box/triplanar mapping.
/// </summary>
public sealed class ViewerTexture
{
    public int Id { get; set; }
    public string MimeType { get; set; } = "image/png";
    public string Base64Data { get; set; } = string.Empty;
    public double ScaleX { get; set; } = 1.0;
    public double ScaleY { get; set; } = 1.0;
}
