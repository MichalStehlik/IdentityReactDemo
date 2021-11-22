using IdentityReactDemo.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IdentityReactDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DicesController : ControllerBase
    {
        private static readonly Random _rand = new();
        private readonly ILogger<DicesController> _logger;

        public DicesController(ILogger<DicesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public RollResult Get()
        {
            int num = _rand.Next(6);
            _logger.Log(LogLevel.Debug, "Doing roll", num);
            return new RollResult { Roll = num };
        }

        [Authorize]
        [HttpGet("decimal")]
        public RollResult GetDecimal()
        {
            int num = _rand.Next(10);
            _logger.Log(LogLevel.Debug, "Doing roll", num);
            return new RollResult { Roll = num };
        }

        [Authorize(Policy = "Administrator")]
        [HttpGet("hexadecimal")]
        public RollResult GetHexadecimal()
        {
            int num = _rand.Next(16);
            _logger.Log(LogLevel.Debug, "Doing roll", num);
            return new RollResult { Roll = num };
        }
    }
}
