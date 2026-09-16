import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>

        {/* Brand */}
        <div className={styles.brandColumn}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoMark}>
              <span className={styles.logoGreen} />
            </span>

            <span>Sark</span>
          </a>

          <p className={styles.description}>
            There are many variations of passages
            <br />
            of Lorem Ipsum available it majority.
          </p>

          <form className={styles.subscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
            />

            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>

        {/* Services */}
        <div className={styles.column}>
          <h3>Services</h3>

          <a href="#">Incident Responder</a>
          <a href="#">Secure Managed IT</a>
          <a href="#">Check Website Url</a>
          <a href="#">Locker Security</a>
        </div>

        {/* About */}
        <div className={styles.column}>
          <h3>About Us</h3>

          <a href="#">Payment Plans</a>
          <a href="#">Make saving More</a>
          <a href="#">Tax Calculator</a>
          <a href="#">Talk To Us</a>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3>Contact Info</h3>

          <p>
            455 West Orchard Street
            <br />
            Kings Mountain, NC 280867
          </p>

          <a href="tel:+0882464272710" className={styles.contact}>
            <span>☎</span>
            +088 (246) 642-27-10
          </a>

          <a
            href="mailto:example@gmail.com"
            className={styles.contact}
          >
            <span>✉</span>
            example@gmail.com
          </a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>
          © 2022 Sharkko All Rights Reserved. Designed by Finestdevs
        </p>
      </div>
    </footer>
  );
}