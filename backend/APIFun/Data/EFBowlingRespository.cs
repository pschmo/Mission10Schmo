using Microsoft.EntityFrameworkCore;

namespace APIFun.Data
{
    public class EFBowlingRepository : iBowlingRepository
    {
        private BowlingLeagueContext _context;

        public EFBowlingRepository(BowlingLeagueContext temp)
        {
            _context = temp;
        }

        public IEnumerable<Bowlers> Bowlers => _context.Bowlers.Include(x => x.Teams);

        public IEnumerable<Teams> Teams => _context.Teams;
    }
}

    

