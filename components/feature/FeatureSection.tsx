"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureScene from "./FeatureScene";
import styles from "./FeatureSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Initial SEO Project",
    description:
      "SEO is an ever-changing practice dictated by updates in SEO algorithms and technological innovation.",
  },
  {
    title: "SEO Audit & Strategy",
    description:
      "Campaigns are tracked and data is leveraged throughout every campaign, ensuring our clients are one step.",
  },
  {
    title: "Local SEO Project",
    description:
      "This is the process of getting other websites to link back to a website. Links are a signal to Google that a website.",
  },
];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const model = modelRef.current;

    if (!section || !model) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.set(cards, {
        opacity: 0.45,
        y: 20,
      });

      gsap.set(cards[0], {
        opacity: 1,
        y: 0,
      });

      gsap.to(model, {
        rotation: 360,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,

          onUpdate: (self) => {
            const progress = self.progress;

            let activeIndex = 0;

            if (progress > 0.66) {
              activeIndex = 2;
            } else if (progress > 0.33) {
              activeIndex = 1;
            }

            cards.forEach((card, index) => {
              gsap.to(card, {
                opacity: index === activeIndex ? 1 : 0.45,
                y: index === activeIndex ? 0 : 20,
                duration: 0.3,
                overwrite: true,
              });
            });
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.featureSection}
    >
      <div className={styles.content}>

        <div className={styles.heading}>
          <h2>
            <span>Awesome features</span>
            <br />
            optimizing your website
          </h2>
        </div>

        <div
          ref={modelRef}
          className={styles.model}
        >
          <FeatureScene />
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(element) => {
                if (element) {
                  cardsRef.current[index] = element;
                }
              }}
              className={styles.feature}
            >
              <div className={styles.icon}>
                {index === 0 && "↗"}
                {index === 1 && "☁"}
                {index === 2 && "⚙"}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}