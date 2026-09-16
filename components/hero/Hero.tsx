import Header from "../Header";
import HeroStats from "./HeroStats";
import HeroScene from "./HeroScene";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Header />

            <div className={styles.heroContent}>
                {/* LEFT */}
                <div className={styles.heroLeft}>
                    <h1 className={styles.title}>
                        The right SEO to
                        <br />
                        boost{" "}
                        <span className={styles.highlight}>
                            your rankings
                        </span>
                    </h1>

                    <p className={styles.description}>
                        Search engine optimization is an ever-changing practice dictated
                        by updates in algorithms &amp; technological innovation. Get
                        discovered by the right SEO agency.
                    </p>

                    <a href="#" className={styles.heroButton}>
                        Get Started Free
                    </a>

                    <HeroStats />
                </div>

                {/* RIGHT */}
                <div className={styles.heroRight}>
                    <div className={styles.modelContainer}>
                        <HeroScene />
                    </div>
                </div>
            </div>
        </section>
    );
}