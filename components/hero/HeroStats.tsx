import styles from "./HeroStats.module.css";

export default function HeroStats() {
  return (
    <div className={styles.stats}>
      <div className={styles.avatars}>
        <div className={`${styles.avatar} ${styles.mainAvatar}`}>
          👨🏻
        </div>

        <div className={styles.avatarCircle} />

        <div className={styles.avatarCircle} />
      </div>

      <div className={styles.customer}>
        <strong>38,482</strong>
        <span>Happy Customers</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.rating}>
        <strong>4.8/5</strong>

        <div className={styles.ratingBottom}>
          <span className={styles.stars}>★★★★</span>
          <span className={styles.emptyStar}>★</span>
          <span className={styles.ratingText}>Rating</span>
        </div>
      </div>
    </div>
  );
}