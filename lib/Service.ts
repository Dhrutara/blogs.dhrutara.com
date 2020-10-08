import axios from 'axios';
import Blog from './Blog';
import BlogMetadata from './BlogMetadata';
import ServiceResponse from './ServiceResponse';

export default class {

    public static async getBlog(blogSlug): Promise<ServiceResponse> {
        const url = `https://dhrutaramd.blob.core.windows.net/content/${blogSlug}`;
        try {
            const result = await axios.get(url, {});
            let metadata = this.getBlogMetadataFromHeaders(result.headers) || this.getMetaDataFromContent(result.data);
            const blog = new Blog(`${result.data}`, metadata);
            return new ServiceResponse(blog, null);
        } catch (err) {
            return new ServiceResponse(null, err);
        }
    }

    private static getBlogMetadataFromHeaders(headers: any): BlogMetadata {
        if (headers && typeof headers.get === 'function') {
            const title = headers.get('x-ms-meta-Title') || '';
            const author = headers.get('x-ms-meta-Author') || '';
            const description = headers.get('x-ms-meta-Description') || '';
            const keywords = headers.get('x-ms-meta-Keywords') || '';
            const publishedDate = headers.get('x-ms-meta-PublishedDate') || '';
            const lastModifiedDate = headers.get('x-ms-meta-LastModifiedDate') || '';

            return new BlogMetadata(title, author, description, keywords, publishedDate, lastModifiedDate);
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