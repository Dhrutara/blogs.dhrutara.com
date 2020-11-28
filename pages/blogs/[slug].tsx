import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import BlogMetaHtmlHead from '../../components/blog-meta-html-head';
import CodeBlockRenderer from '../../components/code-block-renderer';
import ImageRenderer from '../../components/image-renderer';
import Layout from '../../components/layout';
import LinkRenderer from '../../components/link-renderer';
import Blog from '../../lib/Blog';
import Service from '../../lib/Service';
import ServiceResponse from '../../lib/ServiceResponse';
import BlogsList from '../../utilities/blogs-list';

export default function Blogs({ blogResponse }: { blogResponse: ServiceResponse<Blog> }) {

    return (
        <Layout headerImageSrc="/images/read_398_398.jpg" headerText={blogResponse.data.metadata.title}>
            <BlogMetaHtmlHead
                author={blogResponse.data.metadata.author}
                description={blogResponse.data.metadata.description}
                keywords={blogResponse.data.metadata.keywords}
                lastModifiedDate={blogResponse.data.metadata.lastModifiedDate}
                publishedDate={blogResponse.data.metadata.publishedDate}
                slug={blogResponse.data.metadata.slug}
                title={blogResponse.data.metadata.title} />
            <div>
                <ReactMarkdown source={blogResponse.data.content} escapeHtml={false}  renderers={{"paragraph":'div',  "code": CodeBlockRenderer, "image": ImageRenderer, "link": LinkRenderer }} />
            </div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = BlogsList.BlogsList.map(slug => `/blogs/${slug}`)
    return { paths, fallback: false }

}

export const getStaticProps: GetStaticProps = async (req) => {
    const blog = await Service.getBlog(req.params.slug);
    const blogResponse = JSON.parse(JSON.stringify(blog));
    return {
        props: {
            blogResponse
        }
    }
}
