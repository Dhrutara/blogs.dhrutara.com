using System;

namespace Dhrutara.Blogs.Api.Models
{
    public class BlogMetaData
    {
        public string Slug { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Keywords { get; set; }
        public string Author { get; set; }
        public DateTime PublishedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }

        
    }
}