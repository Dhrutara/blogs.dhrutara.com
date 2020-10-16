import { Grid } from '@material-ui/core';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import BlogGist from '../components/blog-gist';
import Layout from '../components/layout';
import BlogMetadata from '../lib/BlogMetadata';
import Service from '../lib/Service';
import ServiceResponse from '../lib/ServiceResponse';
import utilStyles from '../styles/Utils.module.css';


export default function Recommendations({ blogGists }: { blogGists: ServiceResponse<BlogMetadata[]> }) {
    const { data, error } = useSWR<ServiceResponse<BlogMetadata[]>>("fether", Service.getRecommendedBlogs);
    
    if (data && data.data) {
        blogGists = data;
    }
    
    return (
        <Layout headerImageSrc="/images/emabarassed_398_398.jpg" headerText="Unfortunately I couldn't get what you have asked for. May I recommend some blogs you might be interested in?">
            <Head>
                <title>DhruTara</title>
            </Head>
            <div>
                {blogGists ?
                    (<Grid container spacing={3}>
                        {blogGists.data.map((gist, index) => (
                            <Grid item key={index} style={{ "width": "100%" }}>
                                <BlogGist data={gist} />
                            </Grid>
                        ))}
                    </Grid>
                    ) : (<div className={`${utilStyles.headingLg} ${utilStyles.errorMessage}`}><h4>I am really sorry for not able to serve you this time :). Please give give it a shot later.</h4></div>)
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