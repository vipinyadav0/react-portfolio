import styles from "./Projects.module.css";

import { projects } from "../../content/projects";

export const Projects = () => {
    function test() {
        projects.map((pro) => {
            // console.log(pro);
            console.log(pro.technologies.map((el) => (el)).join(" "))

        })
    }
    test()


    return (
        <section className={styles.wrapper}>
            {projects.map((project, index) => {
                return (
                    <div className={styles.card} key={index}>
                        <div className={styles.info}>
                            <img className={styles.image} src={project.image} alt="cover" />
                        </div>

                        <div className={styles.info}>
                            <h2 className={styles.title}>{project.title}</h2>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                        <div className={styles.technologies}>
                            {project.technologies.map((el) => {
                                return (
                                    <div className={styles.technologies_text}>{(el)}</div>
                                )
                            })}
                        </div>
                        <div className={styles.link}>
                            <a href=""><span>Live</span></a>
                            <a href=""><span>GitHub</span></a>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
