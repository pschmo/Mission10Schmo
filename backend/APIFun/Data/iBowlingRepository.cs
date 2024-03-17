namespace APIFun.Data
{
    public interface iBowlingRepository
    {
        IEnumerable<Bowlers> Bowlers { get; }
        IEnumerable<Teams> Teams { get; }
    }
}
