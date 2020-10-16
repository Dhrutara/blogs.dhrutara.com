import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';
import ActiveLink from './active-link';
import Link from 'next/link';

export default function Navigation() {

    const router = useRouter();

    return (
        <Grid container spacing={0} className={styles.root}>
            <Grid item xs={8} sm={6} md={4} lg={4} xl={4}>
                <a href="/">
                    <figure className={styles.logo}>
                        <img src={"/logo.svg"} alt="DhruTara logo" className={styles.logoImage} />
                        <figcaption className={styles.logoCaption}>DhruTara</figcaption>
                    </figure>
                </a>
            </Grid>
            <Grid item xs={4} sm={6} md={8} lg={8} xl={8} className={styles.menu}>
                <ul className={styles.menu}>
                    {router.pathname !== '/' &&
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                    }
                    {router.pathname === "/" &&
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    }
                </ul>
            </Grid>
        </Grid >
    );
}