import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/Utils.module.css';
import Footer from './site-footer';
import Header from './site-header';

const name = 'Ramesh Kanjinghat';
export const siteTitle = 'DhruTara';

export default function Layout({ children, home, about }) {
    return <div className={styles.container}>
        <Head>
            <link rel='icon' href="/favicon.ico" />
            <meta name="description" content="Trying to share knowledge on dotnet core, reacts js, Azure, C#, ASP.Net" />
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
            <meta name="og:title" content={siteTitle} />
            <link rel='manifest' href='/manifest.json' />

            <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel='apple-touch-icon' href='/apple-icon.png'></link>
            <meta name='theme-color' content='#317EFB' />

        </Head>
        <Header />
        <header className={styles.header}>
            {about ? (
                <>
                    <img
                        src="/images/profile_792_820.jpg"
                        className={`${styles.headerImageAbout} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile_400_400.jpg"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
        </header>

        <br></br>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )}
        <br></br>
        <Footer />
    </div>
}