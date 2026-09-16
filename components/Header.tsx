import styles from "./Header.module.css";

const navItems = ["Demos", "About", "Blog", "Pages", "Contact"];

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoMark}>
          <span className={styles.logoMarkGreen} />
        </span>

        <span className={styles.logoText}>Sark</span>
      </a>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a href="#" key={item} className={styles.navItem}>
            {item}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <a href="#" className={styles.login}>
          Login
        </a>

        <a href="#" className={styles.headerButton}>
          Get Started Free
        </a>
      </div>
    </header>
  );
}