import { Grid } from '@material-ui/core';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import BlogMetadata from '../lib/BlogMetadata';
import Service from '../lib/Service';
import BlogGist from '../components/blog-gist';
import utilStyles from '../styles/Utils.module.css';

export default function Error404() {
    const [blogGists, setBlogGists] = useState<BlogMetadata[]>(null);
    useEffect(() => {
        const fetchBlogGists = async () => {
            try {
                const response = await Service.getRecommendedBlogs("warp-it");
                if (response && response.data) {
                    setBlogGists(response.data);
                }
            } catch {
                //Just do nothing
            }
        };
        fetchBlogGists();
    }, [blogGists]);

    return (
        <Layout headerImageSrc="/images/emabarassed_398_398.jpg" headerText="DhruTara">
            <Head>
                <title>DhruTara</title>
            </Head>
            <div>
                {blogGists ?
                    (<Grid container spacing={3}>
                        {blogGists.map((gist, index) => (
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