using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Dhrutara.Blogs.Api.Models;
using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using Newtonsoft.Json;

namespace Dhrutara.Blogs.Api
{
    public class Service
    {
        public async Task<ServiceResponse<List<BlogMetaData>>> GetLatestBlogGistsAsync()
        {
            ServiceResponse<List<BlogMetaData>> response = new ServiceResponse<List<BlogMetaData>>();
            SearchParameters searchParameters = new SearchParameters(orderBy: new string[] { "LastModifiedDate" }, top: 3);
            SearchCredentials searchCredentials = new SearchCredentials(Environment.GetEnvironmentVariable("SearchApiKey"));

            try
            {
                using (SearchIndexClient client = new SearchIndexClient("blogsdhrutara-search", "blogsdhrutara-index", searchCredentials))
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

        public async Task<ServiceResponse<List<BlogMetaData>>> GetRecommendedGistsAsync(string[] keywords)
        {
            List<BlogMetaData> latestBlogGists = new List<BlogMetaData>(3);

            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "How to use dotnet-warp to further trim Dot.net Core Self-contained, Single File deployments.", Keywords = "Warp , DotNet Warp, Azure Devops, CI/CD pipeline, yaml, yml", LastModifiedDate = new DateTime(2020, 9, 10), PublishedDate = new DateTime(2020, 9, 10), Slug = "warp-it", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });
            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.", Keywords = "React web app, ASP.Net Core React App, React to .Net Core React APP", LastModifiedDate = new DateTime(2020, 10, 10), PublishedDate = new DateTime(2020, 10, 10), Slug = "react-app-to-asp-net-react-app", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });
            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.", Keywords = "React web app, ASP.Net Core React App, React to .Net Core React APP", LastModifiedDate = new DateTime(2020, 10, 10), PublishedDate = new DateTime(2020, 10, 10), Slug = "react-app-to-asp-net-react-app", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });

            return new ServiceResponse<List<BlogMetaData>> { Data = latestBlogGists };
        }
    }
}