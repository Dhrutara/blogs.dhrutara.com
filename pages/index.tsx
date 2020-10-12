import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import BlogGist from '../components/blog-gist';
import Layout, { siteTitle } from '../components/layout';
import BlogMetadata from '../lib/BlogMetadata';
import Service from '../lib/Service';
import ServiceResponse from '../lib/ServiceResponse';

export default function Home({ blogGists }: { blogGists: ServiceResponse<BlogMetadata[]> }) {
  return (
    <Layout home={true} about={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h3>Latest blogs</h3>
      <div>
        {blogGists && blogGists.data ?
          (<ul>
            {blogGists.data.map((gist, index) => (
              <BlogGist data={gist} key={index} />
            ))}
          </ul>
          ) : (<></>)
        }
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['/'];
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async () => {
  const gists = await Service.getLatestBlogs();
  const blogGists = JSON.parse(JSON.stringify(gists));
  return {
    props: {
      blogGists
    }
  }
}