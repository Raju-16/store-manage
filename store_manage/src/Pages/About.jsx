import React from "react";
import styles from "../Styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>About Us</h1>
      <p className={styles.para1}>
        We are managing the stroage of a Ecommerce Platefrom{" "}
      </p>
      <img
        className={styles.image1}
        src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-760x400.webp"
        alt=""
      />

      <div className={styles.div1}>
        <img
          className={styles.div1Image}
          src="https://www.flipkartcareers.com/images/fk_site/Experiment_Learn_Grow_image2.webp"
          alt=""
        />
        <div className={styles.div1Text}>
          <h1>Experiment Learn Grow</h1>
          <p>
            Our journey of building India's biggest unicorn start-up has been
            full of successes, but also failures and learning from them. That's
            why there's calculated risk-taking, a high willingness to learn and
            improvise, and a growth orientation built into everything we do.
            Whether it be opening a new warehouse, or making our mobile app a
            bit more consumer friendly, we're always experimenting, learning and
            growing!
          </p>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.div2Text}>
          <h1>Leave a Mark</h1>
          <p>
            We're known more by the impact we create than the titles we hold.
            Impact that is brought by working together on audacious challenges
            at scale with an aim to revolutionize for the Indian customer. We
            believe great ideas can emerge from anywhere and must be backed. Our
            people - backed by our culture of end-to-end ownership - have
            revolutionised India's e-commerce sector - several times over!
          </p>
        </div>
        <img
          className={styles.div2Image}
          src="https://www.flipkartcareers.com/images/fk_site/Leave_A_Mark_image_1.webp"
          alt=""
        />
      </div>

      <br />
      <br />
    </div>
  );
};

export default About;
