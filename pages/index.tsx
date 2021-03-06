import { Grid } from '@material-ui/core';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import BlogGist from '../components/blog-gist';
import Layout, { siteTitle } from '../components/layout';
import BlogMetadata from '../lib/BlogMetadata';
import Service from '../lib/Service';
import ServiceResponse from '../lib/ServiceResponse';


export default function Home({ blogGists }: { blogGists?: ServiceResponse<BlogMetadata[]> }) {
  return (
    <div>
      <Layout headerImageSrc="/images/hey_398_398.jpg" headerText="Would you like to check my latest blogs?">
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Trying to share knowledge on dotnet core, reacts js, Azure, C#, ASP.Net" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content="Trying to share knowledge on dotnet core, reacts js, Azure, C#, ASP.Net" />
          <meta property="og:url" content={`https://blogs.dhrutara.com/`} />
          <meta property="og:site_name" content="Blogs.Dhrutara" />
        </Head>
        <div>
          {blogGists && blogGists.data && Array.isArray(blogGists.data) ?
            (<Grid container spacing={3}>
              {blogGists.data.map((gist, index) => (
                <Grid item key={index} style={{ "width": "100%" }}>
                  <BlogGist data={gist} />
                </Grid>
              ))}
            </Grid>
            ) : (<></>)
          }
        </div>
      </Layout>
    </div>

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