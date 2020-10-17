import Head from 'next/head';
import BlogMetadata from '../lib/BlogMetadata';

export default function BlogMeta(props: BlogMetadata) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="author" content={props.author} />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="lastModifiedDate" content={props.lastModifiedDate} />
            <meta name="publishedDate" content={props.publishedDate} />
        </Head>
    );
}