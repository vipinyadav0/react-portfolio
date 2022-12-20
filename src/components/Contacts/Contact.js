import styles from "../Contacts/Contact.module.css";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { NotificationContainer, NotificationManager } from 'react-notifications';


export const Contacts = () => {
  const [status, setStatus] = useState(false)

  const userName = useRef(null);
  const email = useRef(null);
  const message = useRef(null);


  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.status)
        if (result.status) {
          setStatus(true)
          e.target.reset();
        }
      }, (error) => {
        console.log(error.text);
      });
  }
  setTimeout(() => {
    const success = document.getElementById('success');

    // 👇️ removes element from DOM
    success.style.display = 'none';

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 4000);

  return (<div className={styles.wrapper}>

    {status ? <h2 id="success" className={styles.success}>Message sent successfullly.</h2> : ""}

    <form
      className={styles.wrapper}
      target="_blank"
      action="https://formsubmit.co/your@email.com"
      method="POST"
      onSubmit={sendEmail}
    >
      <div className={styles.inputs}>
        <input
          className={styles.input}
          ref={userName}
          type="text" s
          name="user_name"
          placeholder="Your name"
          required
        />
        <input
          className={styles.input}
          type="email"
          ref={email}
          name="user_email"
          placeholder="Your email"
          required
        />
      </div>
      <div className={styles.textareas}>
        <textarea
          className={styles.textarea}
          type="text"
          ref={message}
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
  </div>

  );
};
