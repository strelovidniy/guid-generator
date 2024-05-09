using Microsoft.AspNetCore.Mvc;

namespace GuidGenerator.Server.Controllers;

[Route("api/guid")]
[ApiController]
public class WeatherForecastController : ControllerBase
{
    [HttpGet("generate")]
    public IActionResult GenerateGuid() => Ok(Guid.NewGuid());
}