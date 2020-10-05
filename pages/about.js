import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
    return (
        <Layout about>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingSM}>
                I am a Software Engineer by profession. Experienced in designing and developing Web applications, Saas and cloud.
                I live in Ohio, USA with my wife and 2 adorable kids.
            </section>
            <section className={utilStyles.headingSm}>
                IIIII can write & speak in Malayalam, English, Hindi, Telugu and C#, Javascript, jsx, sql, html. I use Azure & Azure Devops when I have to take to clouds. I am agile when it comes to safeguarding information; distributed, centralized, clustered and tabularized.
            </section>
            <section className={utilStyles.headingSm, utilStyles.lightText}>
                Dotnet (Framework & Core), ASP.Net (web forms, MVC & core), Git, npm, Software architecture & design, vendor management and leading teams.
            </section>
        </Layout>
    )
}