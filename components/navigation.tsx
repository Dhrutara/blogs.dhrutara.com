import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {

    const router = useRouter();

    return (
        <div className={styles.root}>
            <div style={{"marginLeft":"-2rem"}}>
                <figure className={styles.logo}>
                    <img src={"/logo.svg"} alt="DhruTara logo" className={styles.logoImage} />
                    <figcaption className={styles.logoCaption}>DhruTara</figcaption>
                </figure>
            </div>
            <div style={{"width":"100%", "marginRight":"-2.7rem", "direction":"rtl"}}>
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
            </div>

        </div>
    );
}