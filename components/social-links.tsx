import styles from '../styles/SocialLinks.module.css';

export default function SocialLinks() {
    return (
        <div className={styles.root}>
            <div>
                <a href="https://www.linkedin.com/in/rameshkanjinghat" target="_blank">
                    <img src={'/icons/social/linkedIn_1.png'} />
                </a>
            </div>
            <div className={styles.socialLink}>
                <a href="https://stackexchange.com/users/13979188/ramesh-kanjinghat" target="_blank">
                    <img src={'/icons/social/stack-overflow_1.png'} />
                </a>
            </div>
        </div>
    )
}