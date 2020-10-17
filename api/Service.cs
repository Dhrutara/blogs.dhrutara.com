using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Dhrutara.Blogs.Api.Models;
using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using Newtonsoft.Json;
using System.Linq;
using System.Buffers.Text;
using System.Web;

namespace Dhrutara.Blogs.Api
{
    public class Service : IService
    {
        private const string SEARCH_API_KEY_KEY = "SearchApiKey";
        private const string SEARCH_SERVICE_NAME = "blogsdhrutara-search";
        private const string SEARCH_INDEX_NAME = "blogsdhrutara-index";
        public async Task<ServiceResponse<List<BlogMetaData>>> GetLatestBlogGistsAsync()
        {
            ServiceResponse<List<BlogMetaData>> response = new ServiceResponse<List<BlogMetaData>>();
            SearchParameters searchParameters = new SearchParameters(orderBy: new string[] { "LastModifiedDate" }, top: 3);
            SearchCredentials searchCredentials = new SearchCredentials(Environment.GetEnvironmentVariable(SEARCH_API_KEY_KEY));

            try
            {
                using (SearchIndexClient client = new SearchIndexClient(SEARCH_SERVICE_NAME, SEARCH_INDEX_NAME, searchCredentials))
                {
                    List<BlogMetaData> metas = new List<BlogMetaData>();
                    DocumentSearchResult<Document> searchResult = await client.Documents.SearchAsync("*", searchParameters: searchParameters);
                    foreach (SearchResult<Document> item in searchResult.Results)
                    {
                        string serializedDoc = JsonConvert.SerializeObject(item.Document);
                        BlogMetaData metaData = JsonConvert.DeserializeObject<BlogMetaData>(serializedDoc);
                        metas.Add(metaData);
                    }

                    response.Data = metas;
                }
            }
            catch (Exception ex)
            {
                response.Error = ex;
            }

            return response;
        }

        public async Task<ServiceResponse<List<BlogMetaData>>> GetRecommendedGistsAsync(string searchRequest)
        {
            if (string.IsNullOrWhiteSpace(searchRequest))
            {
                return await this.GetLatestBlogGistsAsync();
            }

            string searchFullText = searchRequest
                .Replace(",", " ")
                .Split(' ')
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .Select(x => HttpUtility.UrlEncode(x))
                .Aggregate((l, r) => $"{l} +{r}");

            searchFullText =  "+" + searchFullText;

            List<BlogMetaData> metas = new List<BlogMetaData>();
            ServiceResponse<List<BlogMetaData>> response = new ServiceResponse<List<BlogMetaData>>();

            SearchParameters searchParameters = new SearchParameters(orderBy: new string[] { "LastModifiedDate" }, queryType: QueryType.Full, searchMode: SearchMode.Any);
            SearchCredentials searchCredentials = new SearchCredentials(Environment.GetEnvironmentVariable(SEARCH_API_KEY_KEY));

            try
            {
                using (SearchIndexClient client = new SearchIndexClient(SEARCH_SERVICE_NAME, SEARCH_INDEX_NAME, searchCredentials))
                {
                    DocumentSearchResult<Document> searchResult = await client.Documents.SearchAsync(searchFullText, searchParameters: searchParameters);
                    foreach (SearchResult<Document> item in searchResult.Results)
                    {
                        string serializedDoc = JsonConvert.SerializeObject(item.Document);
                        BlogMetaData metaData = JsonConvert.DeserializeObject<BlogMetaData>(serializedDoc);
                        metas.Add(metaData);
                    }
                }
            }
            catch (Exception ex)
            {
                var x = ex;
            }

            if (metas.Any())
            {
                response.Data = metas;
                return response;
            }

            return await this.GetLatestBlogGistsAsync();
        }
    }
}