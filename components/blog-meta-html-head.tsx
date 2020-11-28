import Head from 'next/head';
import BlogMetadata from '../lib/BlogMetadata';

export default function BlogMetaHtmlHead(props: BlogMetadata) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="author" content={props.author} />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="lastModifiedDate" content={props.lastModifiedDate} />
            <meta name="publishedDate" content={props.publishedDate} />
            <meta property="article:publisher" content="https://blogs.dhrutara.com/about" />
            <meta property="article:author" content="Ramesh Kanjinghat" />
            {
                props.keywords.split(',').map((value, index) => {
                    return <meta property="article:tag" key={index} content={value && value.trim()}/>
                })
            }
            
            <meta property="article:published_time" content={new Date(props.publishedDate).toISOString()} />
            <meta property="article:modified_time" content={new Date(props.lastModifiedDate).toISOString()} />

            
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={`https://blogs.dhrutara.com/blogs/${props.slug}`} />
            <meta property="og:site_name" content="Blogs.Dhrutara" />


        </Head>
    );
}