using Dhrutara.Blogs.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dhrutara.Blogs.Api
{
    public interface IService
    {
        Task<ServiceResponse<List<BlogMetaData>>> GetLatestBlogGistsAsync();
        Task<ServiceResponse<List<BlogMetaData>>> GetRecommendedGistsAsync(string keywords);
    }
}
