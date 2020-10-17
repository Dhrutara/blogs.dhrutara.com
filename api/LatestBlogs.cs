using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;


using System.Collections.Generic;
using Dhrutara.Blogs.Api.Models;

namespace Dhrutara.Blogs.Api
{
    public static class LatestBlogs
    {
        [FunctionName("LatestBlogs")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "latestblogs")] HttpRequest req,
            ILogger log)
        {
            Service service = new Service();

            ServiceResponse<List<BlogMetaData>> response = await service.GetLatestBlogGistsAsync();
            if(response.Error == null && response.Data != null)
            {
                return new OkObjectResult(response.Data);
            }
            else
            {
                log.LogError(response.Error, response.Error.Message);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
