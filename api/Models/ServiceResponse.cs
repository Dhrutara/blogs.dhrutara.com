using System;

namespace Dhrutara.Blogs.Api.Models
{
    public class ServiceResponse<T>
    {
        public T Data { get; set; }
        public Exception Error { get; set; }
    }
}