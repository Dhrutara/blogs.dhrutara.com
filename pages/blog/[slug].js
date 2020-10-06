import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/code-block';
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
                <ReactMarkdown source={blog.data} escapeHtml={false} renderers={{ "code": CodeBlock }} />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = BlogsList.BlogsList.map(slug => `/blog/${slug}`)
    return { paths, fallback: false }
  }

export async function getStaticProps({ params }) {
    console.clear();
    console.log("===================================================================");
    console.log(params.slug);
    console.log("===================================================================");

    const blog = await getBlog(params.slug);
    // Pass post data to the page via props
    return { props: { blog } }
}

export default Blog;