using assessment.Models;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json;
using System.Threading.Tasks;

namespace assessment.Services
{
    /// <summary>
    /// Beer service interfaces with api endpoints
    /// </summary>
    public class BeerApiService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private string baseUri = "https://api.punkapi.com/v2/beers";

        /// <summary>
        /// Constructor for Beer service class
        /// </summary>
        /// <param name="httpClientFactory"></param>
        public BeerApiService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        /// <summary>
        /// Returns a list of all beers
        /// </summary>
        /// <returns>A list of beers</returns>
        [EnableCors("AllowSpecificOrigin")]
        public async Task<JsonDocument> GetBeers()
        {
            HttpClient httpClient = _httpClientFactory.CreateClient();
            HttpResponseMessage response = await httpClient.GetAsync(baseUri);
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            return JsonDocument.Parse(responseBody);
        }
        /// <summary>
        /// Returns a beer matching id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>A list of beers</returns>
        public async Task<JsonDocument> GetBeer(int id)
        {
            HttpClient httpClient = _httpClientFactory.CreateClient();

            UriBuilder uriBuilder = new UriBuilder(baseUri);
            uriBuilder.Path = $"{uriBuilder.Path}/{id}";
            HttpResponseMessage response = await httpClient.GetAsync(uriBuilder.Uri.ToString());
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            return JsonDocument.Parse(responseBody);
        }
        /// <summary>
        /// Returns a beer matching id
        /// </summary>
        /// <returns>A list of beers</returns>
        public async Task<JsonDocument> GetBeerRandom()
        {
            HttpClient httpClient = _httpClientFactory.CreateClient();

            UriBuilder uriBuilder = new UriBuilder(baseUri);
            uriBuilder.Path = $"{uriBuilder.Path}/random";

            HttpResponseMessage response = await httpClient.GetAsync(uriBuilder.Uri.ToString());
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            return JsonDocument.Parse(responseBody);
        }

        /// <summary>
        /// Returns a beer matching query
        /// </summary>
        /// <param name="query"></param>
        /// <returns>A list of beers</returns>
        public async Task<JsonDocument> GetBeerQuery(string query)
        {
            HttpClient httpClient = _httpClientFactory.CreateClient();
            string queryParameter = "beer_name";
            string queryValue = "query";

            UriBuilder uriBuilder = new UriBuilder(baseUri);
            uriBuilder.Query = $"{queryParameter}={Uri.EscapeDataString(queryValue)}";

            HttpResponseMessage response = await httpClient.GetAsync(uriBuilder.Uri.ToString());
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            return JsonDocument.Parse(responseBody);
        }
    }
}