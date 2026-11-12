using IOScene;

namespace IOViewer.Exporters;

/// <summary>
/// Geometry encodings of the viewer payload format 3: positions as unsigned 16-bit steps of <see cref="Step"/> metres
/// from a grid-aligned origin, normals as octahedral signed-normalized 16-bit pairs.
/// </summary>
internal static class GeometryQuantizer
{
    /// <summary>Grid step in metres (2^-10): exact in float32 and double, at most 0.49 mm of rounding.</summary>
    public const double Step = 1.0 / 1024;

    /// <summary>The grid point at or below <paramref name="v"/>.</summary>
    public static double Snap(double v) => Math.Floor(v / Step) * Step;

    /// <summary>
    /// Quantizes <paramref name="v"/> to <c>q = round((v - origin) / Step)</c> per coordinate, with
    /// <c>origin = Snap(min)</c>, so <c>origin + q·Step</c> is within <see cref="Step"/>/2 of each input coordinate.
    /// Returns false (and an empty <paramref name="q"/>) when an offset needs more than 65535 steps (about 64 m) or a
    /// coordinate is not finite.
    /// </summary>
    public static bool TryQuantize(ReadOnlySpan<Vector3d> v, out Vector3d origin, out ushort[] q)
    {
        double minX = double.PositiveInfinity, minY = double.PositiveInfinity, minZ = double.PositiveInfinity;
        foreach (var p in v)
        {
            minX = Math.Min(minX, p.X);
            minY = Math.Min(minY, p.Y);
            minZ = Math.Min(minZ, p.Z);
        }
        origin = v.IsEmpty ? Vector3d.Zero : new Vector3d(Snap(minX), Snap(minY), Snap(minZ));
        q = [];
        var steps = new ushort[v.Length * 3];
        for (int i = 0; i < v.Length; i++)
        {
            if (!TryStep(v[i].X - origin.X, out steps[i * 3])
                || !TryStep(v[i].Y - origin.Y, out steps[i * 3 + 1])
                || !TryStep(v[i].Z - origin.Z, out steps[i * 3 + 2]))
            {
                return false;
            }
        }
        q = steps;
        return true;
    }

    private static bool TryStep(double offset, out ushort step)
    {
        double r = Math.Round(offset / Step, MidpointRounding.AwayFromZero);
        bool fits = r >= 0 && r <= ushort.MaxValue; // false for NaN as well
        step = fits ? (ushort)r : (ushort)0;
        return fits;
    }

    /// <summary>
    /// Octahedral encoding, two values per normal: <c>n /= |x|+|y|+|z|</c>; when z &lt; 0,
    /// <c>(x, y) = ((1-|y|)·sgn x, (1-|x|)·sgn y)</c> with sgn(0) = +1; then <c>round(clamp(·, -1, 1)·32767)</c>,
    /// halves away from zero. A zero or non-finite normal has no direction and is written as (0, 0), i.e. +Z.
    /// </summary>
    public static short[] OctEncode(IReadOnlyList<Vector3d> n)
    {
        var result = new short[n.Count * 2];
        for (int i = 0; i < n.Count; i++)
        {
            var v = n[i];
            double sum = Math.Abs(v.X) + Math.Abs(v.Y) + Math.Abs(v.Z);
            if (!(sum > 0) || double.IsInfinity(sum)) continue;
            double x = v.X / sum, y = v.Y / sum;
            if (v.Z < 0) (x, y) = ((1 - Math.Abs(y)) * Sign(x), (1 - Math.Abs(x)) * Sign(y));
            result[i * 2] = Snorm(x);
            result[i * 2 + 1] = Snorm(y);
        }
        return result;
    }

    private static double Sign(double v) => v < 0 ? -1 : 1;

    private static short Snorm(double v) =>
        (short)Math.Round(Math.Clamp(v, -1, 1) * short.MaxValue, MidpointRounding.AwayFromZero);
}
