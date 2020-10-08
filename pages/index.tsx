import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/Utils.module.css'


export default function Home() {
  return (
    <Layout home={true} about={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h4>I am a Software Engineer by profession. Experienced in designing and developing Web applications, Saas and cloud. I live in Ohio, USA with my wife and 2 adorable kids.</h4>
      </section>
      <p>
        I can write & speak in Malayalam, English, Hindi, Telugu and C#, Javascript, jsx, sql, html. I use Azure & Azure Devops when I have to take to clouds. I am agile when it comes to safeguarding information; distributed, centralized, clustered and tabularized.
        </p>
    </Layout>
  )
}