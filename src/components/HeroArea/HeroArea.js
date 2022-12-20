import styles from "../HeroArea/HeroArea.module.css";
import Typical from 'react-typical';


export const HeroArea = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.hero_content}>
                <img className={styles.profile} src="/assets/image.webp" alt="profile" rel="preload"
                    as="image"
                />
                <div>
                    <h1 className={styles.title}>Hi There <span className={styles.wave}>👋🏼</span> <br /> I'm <span className={styles.name}>VIPIN YADAV</span></h1>
                    <p className={styles.description}>
                        <Typical
                            loop={Infinity}

                            steps={['Web Developer!', 2000, 'Software “Developer!', 2000]}
                        />
                    </p>
                </div>
            </div>
            <h3 className={styles.text}>Building websites & apps on top of <span className={styles.tech_text}>ReactJS</span> and <span className={styles.tech_text}>Django</span> is what I do best.</h3>
            <div className={styles.buttonBox}>
                <a href="/assets/resume/Vipin_Yadav_Resume.pdf" download="vipin_yadav_resume">
                    <button
                        className={`${styles.button} ${styles.resume}`}>
                        Resume
                        <span className={styles.image}><img src="/assets/projects/download-25x25.webp" alt="" /></span>
                    </button>
                </a>
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
