import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layout';
import { getBlog } from '../../lib/BlogsService';
import CodeBlock from '../../components/code-block';

export async function getStaticProps() {
    const blog = await getBlog('react-app-to-asp-net-react-app');
    return {
        props: {
            blog
        }
    }
}

export default function PortReactAppToDotnetCoreReact({ blog }) {
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