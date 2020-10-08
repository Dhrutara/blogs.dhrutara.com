import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import CodeBlockRenderer from '../../components/code-block-renderer';
import ImageRenderer from '../../components/image-renderer';
import Layout from '../../components/layout';
import { getBlog } from '../../lib/BlogsService';
import BlogsList from '../../utilities/blogs-list';

function Blog({ blog }) {

    return (
        <Layout>
            <Head>
                <title>How to convert a React Web app to .Net core react web app</title>
            </Head>
            <div>
                <ReactMarkdown source={blog.data} escapeHtml={false} renderers={{ "code": CodeBlockRenderer }} />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = BlogsList.BlogsList.map(slug => `/blog/${slug}`)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    //const blog = await getBlog(params.slug);
    const blog = await getBlog('warp-it');
    // Pass post data to the page via props
    return { props: { blog } }
}

export default Blog;