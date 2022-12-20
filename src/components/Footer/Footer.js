import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <h1 className={styles.title}>Vipin Yadav</h1>
            <p>
                Electronic City, Bangalore, KA, 560100</p>
            <a href="tel:+918057656424">+91-8057656424</a> <br /> <br />
            <a href="mailto:vyvipinyadav998@gmail.com">vyvipinyadav998@gmail.com </a>

            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/vipyadav0/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/socials/linkedin.png"
                        alt="social-icon"
                        className={styles.icon}
                    /></a>
                <a href="https://github.com/vipinyadav0/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/socials/github.png"
                        alt="social-icon"
                        className={styles.icon}
                    />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/socials/twitter.png"
                        alt="social-icon"
                        className={styles.icon}
                    /></a>
            </div><br />
            <div>Made with 💚 in Bangalore</div>

        </footer>
    );
};
