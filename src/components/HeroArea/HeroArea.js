import styles from "../HeroArea/HeroArea.module.css";
import Typical from 'react-typical';


export const HeroArea = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.hero_content}>
                <img className={styles.profile} src="/assets/vip.jpeg" alt="profile" />
                <div>
                    <h1 className={styles.title}>Hi There <span className={styles.wave}>👋🏼</span> <br /> I'm <span className={styles.name}>VIPIN YADAV</span></h1>
                    <p className={styles.description}>
                        <Typical
                            loop={Infinity}
                            // wrapper="p"
                            steps={['Web Developer!', 2000, 'Software Developer!', 2000]}
                        />
                    </p>
                </div>
            </div>
            <h3 className={styles.text}>Building websites & apps on top of <span className={styles.tech_text}>ReactJS</span> and <span className={styles.tech_text}>Django</span> is what I do best.</h3>
            <div className={styles.buttonBox}>
                <button
                    className={`${styles.button} ${styles.project}`}
                    onClick={() => {
                        document
                            .getElementById("projects")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    My projects
                </button>
                <button
                    className={`${styles.button} ${styles.hire}`}
                    onClick={() => {
                        document
                            .getElementById("contact")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Hire me
                </button>
            </div>
            <hr />
        </section>
    );
};
