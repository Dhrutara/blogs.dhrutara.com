import axios from 'axios';
import Blog from './Blog';
import BlogMetadata from './BlogMetadata';
import ServiceResponse from './ServiceResponse';

export default class {

    public static async getBlog(blogSlug: string | string[]): Promise<ServiceResponse<Blog>> {
        const url = `https://blogsdhrutara.blob.core.windows.net/blog-content/${blogSlug}`;
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

        response.data = [
            new BlogMetadata('warp-it', 'Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline', 'Ramsh Kanjinghat', 'How to use dotnet-warp to further trim Dot.net Core Self-contained, Single File deployments.', 'Warp , DotNet Warp, Azure Devops, CI/CD pipeline, yaml, yml', '09/20/2020', '09/20/2020'),
            new BlogMetadata('warp-it', 'Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline', 'Ramsh Kanjinghat', 'How to use dotnet-warp to further trim Dot.net Core Self-contained, Single File deployments.', 'Warp , DotNet Warp, Azure Devops, CI/CD pipeline, yaml, yml', '09/20/2020', '09/20/2020'),
            new BlogMetadata('warp-it', 'Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline', 'Ramsh Kanjinghat', 'How to use dotnet-warp to further trim Dot.net Core Self-contained, Single File deployments.', 'Warp , DotNet Warp, Azure Devops, CI/CD pipeline, yaml, yml', '09/20/2020', '09/20/2020')
            //new BlogMetadata('react-app-to-asp-net-react-app', 'How to convert a React Web app to .Net core react web app', 'Ramsh Kanjinghat', 'I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.', 'React web app, ASP.Net Core React App, React to .Net Core React APP', '09/10/2020', '09/10/2020'),
            //new BlogMetadata('react-app-to-asp-net-react-app', 'How to convert a React Web app to .Net core react web app', 'Ramsh Kanjinghat', 'I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.', 'React web app, ASP.Net Core React App, React to .Net Core React APP', '09/10/2020', '09/10/2020')
        ];

        return response;
    }

    public static async getRecommendedBlogs(requestedSlug: string): Promise<ServiceResponse<BlogMetadata[]>> {
        let response = new ServiceResponse<BlogMetadata[]>();

        response.data = [
            //new BlogMetadata('warp-it', 'Warp (Dotnet Warp) with Azure Devops CI/CD Pipeline', 'Ramsh Kanjinghat', 'How to use dotnet-warp to further trim Dot.net Core Self-contained, Single File deployments.', 'Warp , DotNet Warp, Azure Devops, CI/CD pipeline, yaml, yml', '09/20/2020', '09/20/2020'),
            new BlogMetadata('react-app-to-asp-net-react-app', 'How to convert a React Web app to .Net core react web app', 'Ramsh Kanjinghat', 'I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.', 'React web app, ASP.Net Core React App, React to .Net Core React APP', '09/10/2020', '09/10/2020'),
            new BlogMetadata('react-app-to-asp-net-react-app', 'How to convert a React Web app to .Net core react web app', 'Ramsh Kanjinghat', 'I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.', 'React web app, ASP.Net Core React App, React to .Net Core React APP', '09/10/2020', '09/10/2020'),
            new BlogMetadata('react-app-to-asp-net-react-app', 'How to convert a React Web app to .Net core react web app', 'Ramsh Kanjinghat', 'I try to explain how I have moved a serverless a React Web app to ASP.Net core backed react web app.', 'React web app, ASP.Net Core React App, React to .Net Core React APP', '09/10/2020', '09/10/2020')
        ];

        return response;
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