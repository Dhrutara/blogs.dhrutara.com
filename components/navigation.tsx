import Grid from '@material-ui/core/Grid';
import ActiveLink from './active-link';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {

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
                    <li>
                        <ActiveLink href="/">
                            Home
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/about">
                            About
                        </ActiveLink>
                    </li>
                </ul>
            </Grid>
        </Grid>
    );
}