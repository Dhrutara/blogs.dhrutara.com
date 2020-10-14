import Head from 'next/head';
import React from 'react';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/Utils.module.css';
import Navigation from './navigation';
import Footer from './footer';

export const siteTitle = 'DhruTara';

interface Props {
    children: any;
    headerImageSrc: string;
    headerText: string
}

export default class Layout extends React.Component<Props> {
    render() {
        return <div>
            <Head>
                <link rel='icon' href="/favicon.ico" />
                <meta name="description" content="Trying to share knowledge on dotnet core, reacts js, Azure, C#, ASP.Net" />
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
                <meta name="og:title" content={siteTitle} />
                <link rel='manifest' href='/manifest.json' />
                <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link rel='apple-touch-icon' href='icons/apple-icon.png'></link>
                <meta name='theme-color' content='#317EFB' />
                <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
            </Head>
            <Navigation />
            <header className={styles.header}>
                <>
                    <figure className="wp-block-image size-large is-resized">
                        <img className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                            data-loading="lazy"
                            data-orig-file={this.props.headerImageSrc}
                            data-orig-size="1248,533"
                            data-comments-opened="1"
                            data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                            data-image-title="builtin_vs_dotnetwarp"
                            data-image-description=""
                            data-medium-file={this.props.headerImageSrc + "?w=300"}
                            data-large-file={this.props.headerImageSrc + "?w=750"}
                            src={this.props.headerImageSrc + "?w=10241"}
                            alt={this.props.headerText}
                            srcSet={this.props.headerImageSrc + "?w=1024 1024w, " + this.props.headerImageSrc + "?w=705 705w, " + this.props.headerImageSrc + "?w=150 150w, " + this.props.headerImageSrc + "?w=300 300w, " + this.props.headerImageSrc + "?w=768 768w, " + this.props.headerImageSrc + "?1248w"}
                            sizes="(max-width: 707px) 100vw, 707px" />
                        <figcaption className={utilStyles.colorInherit}>{this.props.headerText}</figcaption>
                    </figure>
                </>
            </header>

            <div className={styles.container}>
                <main>{this.props.children}</main>
                <br></br>
                <Footer />
            </div>
        </div>
    }
}