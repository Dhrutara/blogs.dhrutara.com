import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/Utils.module.css'

export default function About() {

    return (
        <Layout headerImageSrc="/images/profile_792_820.jpg" headerText="Ramesh Kanjinghat">
            <Head>
                <meta property="og:url" content={`https://blogs.dhrutara.com/about`} />
                <title>About Ramesh Kanjinghat</title>
                <meta name="description" content="Trying to share knowledge on dotnet core, reacts js, Azure, C#, ASP.Net" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="About Ramesh Kanjinghat" />
                <meta property="og:description" content="Trying to share knowledge on dotnet core, reacts js, Azure, C#, ASP.Net" />
                <meta property="og:url" content={`https://blogs.dhrutara.com/about`} />
                <meta property="og:site_name" content="Blogs.Dhrutara" />
            </Head>

            <section className={utilStyles.headingLg}>
                I am a Software Engineer by profession. Around 14 years of experience in designing and developing Web applications, SaaS and cloud-based application.
                I live in Ohio, USA with my wife and 2 adorable kids.
            </section>
            <section className={utilStyles.headingMd}>
                I can write & speak in Malayalam, English, Hindi, Telugu and C#, JavaScript, SQL, html, typescript. I use Azure & Azure Devops when I have to take to clouds. I am agile when I sprint.
            </section>
            <p></p>
            <section className={utilStyles.headingSm}>
                A gist of where my expertise lies
                <ul>
                    <li>Dotnet (Framework & Core)</li>
                    <li>ASP.Net (web forms, MVC & core)</li>
                    <li>C#, javascript, sql, html, typescript & VB.Net</li>
                    <li>Azure & Azure Devops</li>
                    <li>React & Blazor</li>
                    <li>Git, Team Foundation Server, Vault & SubVersion</li>
                    <li>Software architecture & design</li>
                    <li>Leading, mentoring & training</li>
                    <li>Vendor management</li>
                </ul>
            </section>
        </Layout>
    )
}
