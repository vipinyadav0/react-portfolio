import styles from "./About.module.css";

import { about } from "../../content/about";

function About() {
    function AboutMe() {
        return <div className={styles.about_content}>
            <p>My name is Vipin Yadav, and I am a Software Developer based in Bangalore, KA.
            </p>
            <p>Programming, developing and technical writing are 3 of my best traits. I really enjoy getting my
                hands dirty and playing around with code bases. I find it fascinating because the only limit is your
                <span>Imagination</span>. <br /><br /> I have a completed my Bachelor of Technology in CSE in year 2021.
                But my most of my recent skills have been self taught. I currently have 3 main technical stacks which I work with.
                This includes <span className={styles.technology}>ReactJS</span> with <span className={styles.technology}>Javascript</span>, <span className={styles.technology}>Django</span> on top of
                <span className={styles.technology}> Python</span> for web and <span className={styles.technology}>RestAPI</span> on top of <span className={styles.technology}>Django</span>. And also <span className={styles.technology}>MySQL, PostgreSQL</span> for databases.
            </p>

        </div>
    }

    return (
        <div className={styles.content}>
            <section className={styles.wrapper}>
                <AboutMe />
                {about.map((item, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.info}>
                                <h1 className={styles.title}>{item.title}</h1>
                                <p className={styles.description}>{item.duration}</p>
                            </div>
                            <div className={styles.info}>
                                <img className={styles.icon} src={item.icon} alt="" />
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};
export default About