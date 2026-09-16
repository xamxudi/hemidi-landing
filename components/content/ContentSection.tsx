import styles from "./ContentSection.module.css";

export default function ContentSection() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <div className={styles.videoPlaceholder}>
            <iframe
              src="https://www.youtube.com/embed/vE_A4IhmkKQ?si=gnKnuZ_eFPZHU1-q"
              title="SEO video"
              className={styles.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            We favor increasing the
            <br />
            <span>visibility of the website</span>
          </h2>

          <p className={styles.description}>
            At its core, the meaning of search engine optimization
            (SEO) is increasing your website&apos;s visibility in the
            results of major search engines &amp; users and your
            customers want or need.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>70k+</strong>
              <span>SEO Projects completed</span>
            </div>

            <div className={styles.stat}>
              <strong>156+</strong>
              <span>Satisfied Customers</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}