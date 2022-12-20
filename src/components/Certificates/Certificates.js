import { certificates } from "../../content/certificates";

import styles from "./Certificates.module.css";

export const Certificates = () => {
    return (
        <section className={styles.wrapper}>
            {certificates.map((certificate, index) => {
                return (
                    <div className={styles.card} key={index}>
                        <h2 className={styles.title}>{certificate.title}</h2>
                        <img className={styles.icon} src={certificate.icon} alt="icon" />
                    </div>
                );
            })}
        </section>
    );
};