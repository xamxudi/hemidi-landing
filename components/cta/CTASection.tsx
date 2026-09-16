import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <h2>
            Are you interested in
            <br />
            boosting your SEO ranking?
          </h2>

          <p>
            If you want to evolve your digital performance and learn more about
            <br />
            how our SEO services can help, get in touch with the team today.
          </p>

          <a href="#contact" className={styles.button}>
            Contact With Us
          </a>
        </div>
      </div>
    </section>
  );
}