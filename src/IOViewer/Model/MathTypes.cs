using System.Diagnostics.CodeAnalysis;
using System.Globalization;

namespace IOViewer.Model;

/// <summary>
/// 2D double-precision vector.
/// </summary>
public readonly record struct Vector2d(double X, double Y)
{
    public static readonly Vector2d Zero = new(0, 0);

    public override string ToString() => string.Create(CultureInfo.InvariantCulture, $"({X}, {Y})");
}

/// <summary>
/// 3D double-precision vector.
/// </summary>
public readonly record struct Vector3d(double X, double Y, double Z)
{
    public static readonly Vector3d Zero = new(0, 0, 0);
    public static readonly Vector3d UnitX = new(1, 0, 0);
    public static readonly Vector3d UnitY = new(0, 1, 0);
    public static readonly Vector3d UnitZ = new(0, 0, 1);

    public double LengthSquared => X * X + Y * Y + Z * Z;
    public double Length => Math.Sqrt(LengthSquared);

    public Vector3d Normalized()
    {
        double len = Length;
        return len > 1e-12 ? new Vector3d(X / len, Y / len, Z / len) : Zero;
    }

    public static Vector3d operator +(Vector3d a, Vector3d b) => new(a.X + b.X, a.Y + b.Y, a.Z + b.Z);
    public static Vector3d operator -(Vector3d a, Vector3d b) => new(a.X - b.X, a.Y - b.Y, a.Z - b.Z);
    public static Vector3d operator -(Vector3d v) => new(-v.X, -v.Y, -v.Z);
    public static Vector3d operator *(Vector3d v, double s) => new(v.X * s, v.Y * s, v.Z * s);
    public static Vector3d operator *(double s, Vector3d v) => new(v.X * s, v.Y * s, v.Z * s);
    public static Vector3d operator /(Vector3d v, double s) => new(v.X / s, v.Y / s, v.Z / s);

    public static double Dot(Vector3d a, Vector3d b) => a.X * b.X + a.Y * b.Y + a.Z * b.Z;
    public static Vector3d Cross(Vector3d a, Vector3d b) => new(
        a.Y * b.Z - a.Z * b.Y,
        a.Z * b.X - a.X * b.Z,
        a.X * b.Y - a.Y * b.X);

    public static double Distance(Vector3d a, Vector3d b) => (a - b).Length;

    public override string ToString() => string.Create(CultureInfo.InvariantCulture, $"({X}, {Y}, {Z})");
}

/// <summary>
/// 4D double-precision vector.
/// </summary>
public readonly record struct Vector4d(double X, double Y, double Z, double W)
{
    public static readonly Vector4d Zero = new(0, 0, 0, 0);

    public override string ToString() => string.Create(CultureInfo.InvariantCulture, $"({X}, {Y}, {Z}, {W})");
}

/// <summary>
/// Double-precision quaternion representing 3D rotation.
/// </summary>
public readonly record struct Quaterniond(double X, double Y, double Z, double W)
{
    public static readonly Quaterniond Identity = new(0, 0, 0, 1);

    public override string ToString() => string.Create(CultureInfo.InvariantCulture, $"({X}, {Y}, {Z}, {W})");
}

/// <summary>
/// 3D Axis-Aligned Bounding Box (AABB).
/// </summary>
public readonly record struct BoundingBox3d(Vector3d Min, Vector3d Max)
{
    public static readonly BoundingBox3d Empty = new(
        new Vector3d(double.PositiveInfinity, double.PositiveInfinity, double.PositiveInfinity),
        new Vector3d(double.NegativeInfinity, double.NegativeInfinity, double.NegativeInfinity));

    public bool IsEmpty => Min.X > Max.X || Min.Y > Max.Y || Min.Z > Max.Z;

    public Vector3d Center => (Min + Max) * 0.5;
    public Vector3d Size => Max - Min;

    public BoundingBox3d Encapsulate(Vector3d point)
    {
        if (IsEmpty) return new BoundingBox3d(point, point);
        return new BoundingBox3d(
            new Vector3d(Math.Min(Min.X, point.X), Math.Min(Min.Y, point.Y), Math.Min(Min.Z, point.Z)),
            new Vector3d(Math.Max(Max.X, point.X), Math.Max(Max.Y, point.Y), Math.Max(Max.Z, point.Z)));
    }

    public BoundingBox3d Encapsulate(BoundingBox3d other)
    {
        if (IsEmpty) return other;
        if (other.IsEmpty) return this;
        return new BoundingBox3d(
            new Vector3d(Math.Min(Min.X, other.Min.X), Math.Min(Min.Y, other.Min.Y), Math.Min(Min.Z, other.Min.Z)),
            new Vector3d(Math.Max(Max.X, other.Max.X), Math.Max(Max.Y, other.Max.Y), Math.Max(Max.Z, other.Max.Z)));
    }
}

/// <summary>
/// Affine 3D transform stored by columns: the result of <see cref="Apply"/> is
/// <c>XAxis * p.X + YAxis * p.Y + ZAxis * p.Z + Translation</c>.
/// </summary>
/// <remarks>The translation is in metres, in the document's Z-up coordinates.</remarks>
/// <param name="XAxis">Image of the unit X vector (first matrix column).</param>
/// <param name="YAxis">Image of the unit Y vector (second matrix column).</param>
/// <param name="ZAxis">Image of the unit Z vector (third matrix column).</param>
/// <param name="Translation">Translation applied after the linear part.</param>
public readonly record struct Transform3d(Vector3d XAxis, Vector3d YAxis, Vector3d ZAxis, Vector3d Translation)
{
    /// <summary>The transform that leaves every point unchanged.</summary>
    public static readonly Transform3d Identity = new(Vector3d.UnitX, Vector3d.UnitY, Vector3d.UnitZ, Vector3d.Zero);

    /// <summary>Creates a pure translation.</summary>
    /// <param name="t">Translation vector.</param>
    public static Transform3d Translate(Vector3d t) => new(Vector3d.UnitX, Vector3d.UnitY, Vector3d.UnitZ, t);

    /// <summary>Transforms a point.</summary>
    /// <param name="p">Point in local coordinates.</param>
    public Vector3d Apply(Vector3d p) => XAxis * p.X + YAxis * p.Y + ZAxis * p.Z + Translation;

    /// <summary>Composes two transforms: this one is applied first, then <paramref name="next"/>.</summary>
    /// <param name="next">Transform applied after this one.</param>
    public Transform3d Then(Transform3d next) => new(
        next.Apply(XAxis) - next.Translation,
        next.Apply(YAxis) - next.Translation,
        next.Apply(ZAxis) - next.Translation,
        next.Apply(Translation));
}

/// <summary>
/// 8-bit per channel RGBA color with double precision conversion.
/// </summary>
public readonly record struct RgbaColor(byte R, byte G, byte B, byte A = 255)
{
    public static readonly RgbaColor White = new(255, 255, 255);
    public static readonly RgbaColor Black = new(0, 0, 0);
    public static readonly RgbaColor Gray = new(180, 180, 180);

    public double Rf => R / 255.0;
    public double Gf => G / 255.0;
    public double Bf => B / 255.0;
    public double Af => A / 255.0;

    public string ToHex() => string.Create(CultureInfo.InvariantCulture, $"#{R:x2}{G:x2}{B:x2}");

    public override string ToString() => string.Create(CultureInfo.InvariantCulture, $"rgba({R}, {G}, {B}, {Af:F2})");
}
