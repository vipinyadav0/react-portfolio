import styles from "./About.module.css";

import { about } from "../../content/about";
import { nanoid } from 'nanoid'


function About() {
    function AboutMe() {
        return <div className={styles.about_content}>

            <p>I have a completed my Bachelor of Technology in CSE in year 2021.
                But my most of my recent skills have been self taught. I currently have 3 main technical stacks which I work with.
                This includes <span className={styles.technology}>ReactJS</span> with <span className={styles.technology}>Javascript</span>, <span className={styles.technology}>Django</span> on top of
                <span className={styles.technology}> Python</span> for web and <span className={styles.technology}>RestAPI</span> on top of <span className={styles.technology}>Django</span>. And also <span className={styles.technology}>MySQL, PostgreSQL</span> for databases.
            </p>
            <p>Looking forward to sharpening my skills in a challenging environment. I guarantee enthusiasm in work and fulfilling my projects with inexpressible effort.

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
                <h1 id="services" className="title">
                    Professional Experience
                </h1>

                {about.map((item, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.info}>
                                {item.icon ? <img className={styles.icon} src={item.icon} alt="" /> : ""}
                                <h2 className={styles.title}>{item.title}</h2>
                                {item.company ? <h3 className={styles.title}>{item.company}</h3> : <h3 className={styles.title}>{item.major}</h3>}
                                <p className={styles.description}>{item.duration}</p>
                            </div>
                            <div className={styles.info}>
                                {item.college_icon ? <img className={styles.icon} src={item.college_icon} alt="" /> : ""}
                                {item.work ? item.work.map((text, index) => {
                                    return (
                                        <ul>
                                            <li key={nanoid()}>{(text)}</li>
                                        </ul>
                                    )
                                }) : ""}

                            </div>
                        </div>
                    );
                })
                }

            </section>
        </div>
    );
};
export default About