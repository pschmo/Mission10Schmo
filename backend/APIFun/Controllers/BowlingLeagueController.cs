using APIFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIFun.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private iBowlingRepository _bowlingRepository;

        public BowlingLeagueController(iBowlingRepository temp)
        {
            _bowlingRepository = temp;
        }

        public IEnumerable<Bowlers> Get()
        {
            var bowlerData = _bowlingRepository.Bowlers.Where(x => x.Teams.TeamName is "Marlins" or "Sharks").ToArray();

            return bowlerData;
        }
    }
}