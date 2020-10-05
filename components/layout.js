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
            <meta
                name="description"
                content="Trying to share knowledge on dotnet core, reacts js, Azure, C#, ASP.Net"
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header />
        <header className={styles.header}>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
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