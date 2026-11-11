namespace IOViewer.Model;

public enum ViewerTimeLinerTaskType
{
    Construct = 0,
    Demolish = 1,
    Temporary = 2
}

/// <summary>
/// A 4D construction schedule task.
/// </summary>
public sealed class ViewerTimeLinerTask
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public ViewerTimeLinerTaskType TaskType { get; set; } = ViewerTimeLinerTaskType.Construct;

    public DateTimeOffset PlannedStart { get; set; }
    public DateTimeOffset PlannedEnd { get; set; }
    public DateTimeOffset? ActualStart { get; set; }
    public DateTimeOffset? ActualEnd { get; set; }

    public decimal? PlannedCost { get; set; }
    public decimal? ActualCost { get; set; }
    public double Progress { get; set; }

    public string? AttachedSetName { get; set; }
    public List<long> AttachedElementIds { get; } = [];
    public List<ViewerTimeLinerTask> Children { get; } = [];

    public ViewerTimeLinerTask() { }

    public ViewerTimeLinerTask(string id, string name, DateTimeOffset start, DateTimeOffset end, ViewerTimeLinerTaskType taskType = ViewerTimeLinerTaskType.Construct)
    {
        Id = id;
        Name = name;
        PlannedStart = start;
        PlannedEnd = end;
        TaskType = taskType;
    }
}

/// <summary>
/// A complete 4D TimeLiner schedule.
/// </summary>
public sealed class ViewerTimeLinerSchedule
{
    public string Name { get; set; } = "TimeLiner Schedule";
    public List<ViewerTimeLinerTask> Tasks { get; } = [];

    public ViewerTimeLinerSchedule() { }

    public ViewerTimeLinerSchedule(string name)
    {
        Name = name;
    }

    /// <summary>
    /// Gets earliest planned start date across all tasks.
    /// </summary>
    public DateTimeOffset GetOverallStart()
    {
        var min = DateTimeOffset.MaxValue;
        void Recurse(IEnumerable<ViewerTimeLinerTask> tasks)
        {
            foreach (var t in tasks)
            {
                if (t.PlannedStart < min) min = t.PlannedStart;
                if (t.Children.Count > 0) Recurse(t.Children);
            }
        }
        Recurse(Tasks);
        return min == DateTimeOffset.MaxValue ? DateTimeOffset.UtcNow : min;
    }

    /// <summary>
    /// Gets latest planned finish date across all tasks.
    /// </summary>
    public DateTimeOffset GetOverallEnd()
    {
        var max = DateTimeOffset.MinValue;
        void Recurse(IEnumerable<ViewerTimeLinerTask> tasks)
        {
            foreach (var t in tasks)
            {
                if (t.PlannedEnd > max) max = t.PlannedEnd;
                if (t.Children.Count > 0) Recurse(t.Children);
            }
        }
        Recurse(Tasks);
        return max == DateTimeOffset.MinValue ? DateTimeOffset.UtcNow.AddDays(30) : max;
    }
}
