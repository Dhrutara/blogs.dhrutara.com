import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import CodeBlockRenderer from '../../components/code-block-renderer';
import ImageRenderer from '../../components/image-renderer';
import Layout from '../../components/layout';
import Blog from '../../lib/Blog';
import Service from '../../lib/Service';
import ServiceResponse from '../../lib/ServiceResponse';
import BlogsList from '../../utilities/blogs-list';

export default function Blogs({ blogResponse }: { blogResponse: ServiceResponse<Blog> }) {

    return (
        <Layout headerImageSrc="/images/my_Avatar.jpg" headerText="DhruTara">
            <Head>
                <title>How to convert a React Web app to .Net core react web app</title>
            </Head>
            <div>
                <ReactMarkdown source={blogResponse.data.content} escapeHtml={false} renderers={{ "code": CodeBlockRenderer, "image": ImageRenderer }} />
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
    // Pass post data to the page via props
    const blogResponse = JSON.parse(JSON.stringify(blog));
    return {
        props: {
            blogResponse
        }
    }
}
