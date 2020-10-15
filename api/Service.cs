using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Dhrutara.Blogs.Api.Models;

namespace Dhrutara.Blogs.Api
{
    public class Service
    {
        public async Task<ServiceResponse<IEnumerable<BlogMetaData>>> GetLatestBlogGistsAsync()
        {
            List<BlogMetaData> latestBlogGists = new List<BlogMetaData>(3);

            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "How to use dotnet-warp to further trim Dot.net Core Self-contained, Single File deployments.", Keywords = "Warp , DotNet Warp, Azure Devops, CI/CD pipeline, yaml, yml", LastModifiedDate = new DateTime(2020, 9, 10), PublishedDate = new DateTime(2020, 9, 10), Slug = "warp-it", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });
            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.", Keywords = "React web app, ASP.Net Core React App, React to .Net Core React APP", LastModifiedDate = new DateTime(2020, 10, 10), PublishedDate = new DateTime(2020, 10, 10), Slug = "react-app-to-asp-net-react-app", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });
            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.", Keywords = "React web app, ASP.Net Core React App, React to .Net Core React APP", LastModifiedDate = new DateTime(2020, 10, 10), PublishedDate = new DateTime(2020, 10, 10), Slug = "react-app-to-asp-net-react-app", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });

            return new ServiceResponse<IEnumerable<BlogMetaData>> { Data = latestBlogGists };
        }

        public async Task<ServiceResponse<IEnumerable<BlogMetaData>>> GetRecommendedGistsAsync(string[] keywords)
        {
            List<BlogMetaData> latestBlogGists = new List<BlogMetaData>(3);

            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "How to use dotnet-warp to further trim Dot.net Core Self-contained, Single File deployments.", Keywords = "Warp , DotNet Warp, Azure Devops, CI/CD pipeline, yaml, yml", LastModifiedDate = new DateTime(2020, 9, 10), PublishedDate = new DateTime(2020, 9, 10), Slug = "warp-it", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });
            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.", Keywords = "React web app, ASP.Net Core React App, React to .Net Core React APP", LastModifiedDate = new DateTime(2020, 10, 10), PublishedDate = new DateTime(2020, 10, 10), Slug = "react-app-to-asp-net-react-app", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });
            latestBlogGists.Add(new BlogMetaData { Author = "Ramsh Kanjinghat", Description = "I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.", Keywords = "React web app, ASP.Net Core React App, React to .Net Core React APP", LastModifiedDate = new DateTime(2020, 10, 10), PublishedDate = new DateTime(2020, 10, 10), Slug = "react-app-to-asp-net-react-app", Title = "Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline" });

            return new ServiceResponse<IEnumerable<BlogMetaData>> { Data = latestBlogGists };
        }
    }
}