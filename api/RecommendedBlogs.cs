using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Collections.Generic;
using Dhrutara.Blogs.Api.Models;
using System.Text;

namespace Dhrutara.Blogs.Api
{
    public static class RecommendedBlogs
    {
        [FunctionName("RecommendedBlogs")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "recommendedblogs/{requestedSlug?}")] HttpRequest req,
            ILogger log,
            string requestedSlug = null)
        {
            Service service = new Service();
            StringBuilder logDetails = new StringBuilder();

            string userRequestedSlug = string.IsNullOrWhiteSpace(requestedSlug) ? string.Empty : requestedSlug.Trim();

            logDetails.Append($"Requested Slug Not found. Slug: {userRequestedSlug}{Environment.NewLine}");

            string[] keyWords = string.IsNullOrWhiteSpace(requestedSlug) ? new string[] { } : requestedSlug.Split('-');
            ServiceResponse<IEnumerable<BlogMetaData>> response;
            if (keyWords.Any())
            {
                response = await service.GetRecommendedGistsAsync(keyWords);
                if (response?.Error == null && response?.Data?.Any() == true)
                {
                    logDetails.Append($"Recommended blogs: {blogMetadataToString(response.Data)}{Environment.NewLine}");
                    log.LogInformation(logDetails.ToString());
                    return new OkObjectResult(response.Data);
                }
            }

            logDetails.Append($"No recommended blogs.{Environment.NewLine}");
            response = await service.GetLatestBlogGistsAsync();
            if (response?.Error == null && response?.Data?.Any() == true)
            {
                logDetails.Append($"Responding with latest blogs.");
                log.LogInformation(logDetails.ToString());
                return new OkObjectResult(response.Data);
            }

            logDetails.Append("Failed to return blogs.");
            return new StatusCodeResult(500);
        }

        private static string blogMetadataToString(IEnumerable<BlogMetaData> blogMetas)
        {
            return blogMetas.Select<BlogMetaData, string>(b => $"_#_Slug:{b.Slug}, Title:{b.Title}, Keywords:[{b.Keywords}]_#_")
            .Aggregate((l, r) => l + "_@_" + r);
        }
    }
}
