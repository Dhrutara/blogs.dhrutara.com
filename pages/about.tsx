import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/Utils.module.css'

export default function About() {

    return (
        <Layout headerImageSrc="/images/profile_792_820.jpg" headerText="Ramesh Kanjinghat">
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingLg}>
                I am a Software Engineer by profession. Experienced in designing and developing Web applications, Saas and cloud.
                I live in Ohio, USA with my wife and 2 adorable kids.
            </section>
            <section className={utilStyles.headingMd}>
                I can write & speak in Malayalam, English, Hindi, Telugu and C#, Javascript, jsx, sql, html. I use Azure & Azure Devops when I have to take to clouds. I am agile when it comes to safeguarding information; distributed, centralized, clustered and tabularized.
            </section>
            <section className={utilStyles.headingSm}>
                Dotnet (Framework & Core), ASP.Net (web forms, MVC & core), Git, npm, Software architecture & design, vendor management and leading teams.
            </section>
        </Layout>
    )
}