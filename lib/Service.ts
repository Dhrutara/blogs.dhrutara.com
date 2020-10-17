import axios from 'axios';
import Blog from './Blog';
import BlogMetadata from './BlogMetadata';
import ServiceResponse from './ServiceResponse';

export default class {

    public static async getBlog(blogSlug: string | string[]): Promise<ServiceResponse<Blog>> {
        const url = `https://blogsdhrutara.blob.core.windows.net/blog-content/${encodeURI(blogSlug.toString())}`;
        try {
            const result = await axios.get(url, {});
            let metadata = this.getBlogMetadataFromHeaders(result.headers) || this.getMetaDataFromContent(result.data);
            const blog = new Blog(`${result.data}`, metadata);
            return new ServiceResponse<Blog>(blog, null);
        } catch (err) {
            return new ServiceResponse<Blog>(null, err);
        }
    }

    public static async getLatestBlogs(): Promise<ServiceResponse<BlogMetadata[]>> {
        let response = new ServiceResponse<BlogMetadata[]>();
        try {
            const result = await axios.get('/api/latestblogs');
            response.data = result.data;
        } catch (err) {
            response.error = err;
        }

        return response;
    }

    public static async getRecommendedBlogs(requestedSlug: string): Promise<ServiceResponse<BlogMetadata[]>> {
        try {
            const result = await axios.get(`/api/recommendedblogs/${encodeURI(requestedSlug)}`);
            return new ServiceResponse<BlogMetadata[]>(result.data, null);
        } catch (err) {
            return new ServiceResponse<BlogMetadata[]>(null, err);
        }
    }


    private static getBlogMetadataFromHeaders(headers: any): BlogMetadata {
        if (headers && typeof headers.get === 'function') {
            const slug = headers.get('x-ms-meta-Slug') || '';
            const title = headers.get('x-ms-meta-Title') || '';
            const author = headers.get('x-ms-meta-Author') || '';
            const description = headers.get('x-ms-meta-Description') || '';
            const keywords = headers.get('x-ms-meta-Keywords') || '';
            const publishedDate = headers.get('x-ms-meta-PublishedDate') || '';
            const lastModifiedDate = headers.get('x-ms-meta-LastModifiedDate') || '';

            return new BlogMetadata(slug, title, author, description, keywords, publishedDate, lastModifiedDate);
        }
        return null;

    }

    private static getMetaDataFromContent(content: string): BlogMetadata {
        if (content) {
            let metadata = new BlogMetadata();
            const regex = /\[_metadata_(.*?)\]/gm;
            let m;
            while ((m = regex.exec(content)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                if (m && m.length > 1) {
                    let myMatch = m[1];
                    let parts = myMatch.split(':');
                    if (parts.length > 1) {
                        metadata[parts[0]] = parts[1];
                    }
                }
            }
            return metadata;
        }

        return null;
    }
} 