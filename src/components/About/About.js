import styles from "./About.module.css";

import { about } from "../../content/about";

function About() {
    function AboutMe() {
        return <div className={styles.about_content}>

            <p>I have a completed my Bachelor of Technology in CSE in year 2021.
                But my most of my recent skills have been self taught. I currently have 3 main technical stacks which I work with.
                This includes <span className={styles.technology}>ReactJS</span> with <span className={styles.technology}>Javascript</span>, <span className={styles.technology}>Django</span> on top of
                <span className={styles.technology}> Python</span> for web and <span className={styles.technology}>RestAPI</span> on top of <span className={styles.technology}>Django</span>. And also <span className={styles.technology}>MySQL, PostgreSQL</span> for databases.
            </p>
            <div className="highlights">
                <h2>Here are some highlights</h2>
                <ul>
                    <li><span className={styles.highlights}>Front-End </span> (ReactJS on top of Javascript)</li>
                    <li><span className={styles.highlights}>Back-End </span> (Django on top of Python)</li>
                    <li><span className={styles.highlights}>RestAPI </span> (Django Rest Framework)</li>

                </ul>
            </div>

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