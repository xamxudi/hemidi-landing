import styles from "./ServiceSection.module.css";

const services = [
  {
    title: "Target Analysis",
    description:
      "Target analysis is an examination of potential targets to determine military importance.",
  },
  {
    title: "Content Optimization",
    description:
      "Content optimization is the process of making sure content is written in a way that it can reach.",
  },
  {
    title: "Keyword Research",
    description:
      "Keyword research is the process by which you research popular search engines like Google.",
  },
  {
    title: "Continuous Testing",
    description:
      "Continuous Testing is the process of executing automated tests as part of the software delivery.",
  },
  {
    title: "E-Commerce SEO",
    description:
      "Ecommerce SEO is the process of making your online store more visible in the search engine.",
  },
  {
    title: "Website Migrations",
    description:
      "A site migration is a term broadly used by SEO professionals to describe any event website.",
  },
];

export default function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>
            Qualities &amp; customizable
            <br />
            <span>ideal SEO services</span>
          </h2>
        </div>

        <div className={styles.services}>
          {services.map((service) => (
            <article
              className={styles.service}
              key={service.title}
            >
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#" className={styles.link}>
                Discover More
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}