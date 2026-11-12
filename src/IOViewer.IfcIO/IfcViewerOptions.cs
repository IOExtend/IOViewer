using IfcIO;

namespace IOViewer.IfcIO;

/// <summary>
/// Options for <see cref="IfcViewerAdapter"/>.
/// </summary>
public sealed class IfcViewerOptions
{
    /// <summary>
    /// Also converts spaces (<c>IfcSpace</c>, <see cref="IfcModel.AllSpaces"/>), drawn translucent unless their
    /// material says otherwise. False by default, because closed room volumes hide the elements inside them.
    /// </summary>
    public bool IncludeSpaces { get; set; }
}
