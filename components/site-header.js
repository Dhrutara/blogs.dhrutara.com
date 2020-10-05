
import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <header className={styles.footer}>
            <Link href="/">
                <a>
                    <img src={"/logo.svg"} alt="DhruTara logo" className={styles.logo} />
                </a>
            </Link>
        </header>
    );
}
