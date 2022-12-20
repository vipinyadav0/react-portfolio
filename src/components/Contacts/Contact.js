import styles from "../Contacts/Contact.module.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacts = () => {
  const form = useRef();
  console.log(process.env.REACT_APP_SERVICE_ID)
  console.log(process.env.REACT_APP_TEMPLATE_ID)


  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log(error.text);
      });
  }

  return (<>    <form
    className={styles.wrapper}
    target="_blank"
    action="https://formsubmit.co/your@email.com"
    method="POST"
    onSubmit={sendEmail}
  >
    <div className={styles.inputs}>
      <input
        className={styles.input}
        type="text"
        name="user_name"
        placeholder="Your name"
        required
      />
      <input
        className={styles.input}
        type="email"
        name="user_email"
        placeholder="Your email"
        required
      />
    </div>
    <div className={styles.textareas}>
      <textarea
        className={styles.textarea}
        type="text"
        name="message"
        placeholder="Your message"
        required
      />
      <button className={styles.send} type="submit">
        <img className={styles.icon} src="/assets/actions/send.png" alt="" />
      </button>
    </div>
  </form>
    <hr />
  </>

  );
};
