import styles from "./Footer.module.css";
import { Link } from "react-router"

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <h1 className={styles.title}>Vipin Yadav</h1>
            <p>Electronic City, Bangalore, KA, 560100</p>
            <p>+91-8057656424 | vyvipinyadav998@gmail.com</p>
            <div className={styles.socials}>
                <img
                    src="/assets/socials/twitter.png"
                    alt="social-icon"
                    className={styles.icon}
                />
                <img
                    src="/assets/socials/linkedin.png"
                    alt="social-icon"
                    className={styles.icon}
                />
                <img
                    src="/assets/socials/github.png"
                    alt="social-icon"
                    className={styles.icon}
                />
            </div><br />
            <div>Made with 💚 in Bangalore</div>

        </footer>
    );
};