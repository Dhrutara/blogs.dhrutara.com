import { Grid } from '@material-ui/core';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import BlogGist from '../components/blog-gist';
import Layout, { siteTitle } from '../components/layout';
import BlogMetadata from '../lib/BlogMetadata';
import Service from '../lib/Service';
import ServiceResponse from '../lib/ServiceResponse';

export default function Home({ blogGists }: { blogGists: ServiceResponse<BlogMetadata[]> }) {
  return (
    <Layout headerImageSrc="/images/my_Avatar.jpg" headerText="DhruTara">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        {blogGists && blogGists.data ?
          (<Grid container spacing={3}>
            {blogGists.data.map((gist, index) => (
              <Grid item key={index} style={{"width":"100%"}}>
                <BlogGist data={gist} />
              </Grid>
            ))}
          </Grid>
          ) : (<></>)
        }
      </div>
    </Layout>
  );
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