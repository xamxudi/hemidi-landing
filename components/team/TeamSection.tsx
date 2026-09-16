import Image from "next/image";
import styles from "./TeamSection.module.css";

const teamMembers = [
  {
    name: "Esther Howard",
    role: "Senior SEO Manager",
    image: "/image/team-1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "SEO Executive",
    image: "/image/team-2.jpg",
  },
  {
    name: "Savannah Nguyen",
    role: "Account Manager",
    image: "/image/team-3.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>
            <span>Meet our amazing SEO</span>
            <br />
            team for your business
          </h2>

          <p>
            Our SEO team will take the time to truly understand your
            business, your goals, and your mission. We recognize that
            your needs are unique, and that&apos;s what inspires our team.
          </p>
        </div>

        {/* TEAM */}
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div
              className={styles.member}
              key={member.name}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={250}
                  className={styles.image}
                />
              </div>

              <h3>{member.name}</h3>

              <p>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}