using assessment.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;
using System.Threading.Tasks;

namespace assessment.Controllers
{
    /// <summary>
    /// BeerController Contains api calls for beer objects
    /// </summary>
    /// <returns>A list of beers</returns>
    [ApiController]
    [Route("api/[controller]")]
    public class BeerController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly BeerApiService _beerApiService;

        /// <summary>
        /// Constructor for Beer Controller
        /// </summary>
        public BeerController(IHttpClientFactory httpClientFactory, BeerApiService beerApiService)
        {
            _httpClientFactory = httpClientFactory;
            _beerApiService = beerApiService;
        }
        /// <summary>
        /// Returns a list of all beer objects
        /// </summary>
        /// <returns>beer object list</returns>
        [HttpGet("/beer")]
        public async Task<IActionResult> GetBeers()
        {
            JsonDocument response = await _beerApiService.GetBeers();

            if (response.RootElement.ValueKind == JsonValueKind.Undefined)
            {
                return NoContent();
            }

            return Ok(response);
        }

        /// <summary>
        /// Searches for and returns a matching beer corresponding to id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("/beer/{id}")]
        public async Task<IActionResult> GetBeer(int id)
        {
            JsonDocument response = await _beerApiService.GetBeer(id);

            if (response.RootElement.ValueKind == JsonValueKind.Undefined)
            {
                return NotFound();
            }

            return Ok(response);
        }

        /// <summary>
        /// Returns a random beer
        /// </summary>
        /// <returns></returns>
        [HttpGet("/beer/random")]
        public async Task<IActionResult> GetBeerRandom()
        {
            JsonDocument response = await _beerApiService.GetBeerRandom();

            if (response.RootElement.ValueKind == JsonValueKind.Undefined)
            {
                return NotFound();
            }

            return Ok(response);
        }


        /// <summary>
        /// Searches for and returns a matching beer corresponding to query
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        [HttpGet("/search")]
        public async Task<IActionResult> GetBeerQuery(string query)
        {
            JsonDocument response = await _beerApiService.GetBeerQuery(query);

            if (response.RootElement.ValueKind == JsonValueKind.Undefined)
            {
                return NotFound();
            }

            return Ok(response);
        }
    }
}
