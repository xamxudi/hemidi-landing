import Image from "next/image";
import styles from "./LogosSection.module.css";

const brands = [
  {
    name: "Microsoft",
    src: "/image/microsoft.jpg",
  },
  {
    name: "Airbnb",
    src: "/image/airbnb.jpg",
  },
  {
    name: "OLA",
    src: "/image/ola.jpg",
  },
  {
    name: "Walmart",
    src: "/image/walmart.jpg",
  },
  {
    name: "Google",
    src: "/image/google.jpg",
  },
];

export default function LogosSection() {
  return (
    <section className={styles.logosSection}>
      <div className={styles.container}>
        <p className={styles.title}>1000+ Big brands trust us</p>

        <div className={styles.brands}>
          {brands.map((brand) => (
            <div className={styles.brand} key={brand.name}>
              <Image
                src={brand.src}
                alt={brand.name}
                width={110}
                height={40}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}