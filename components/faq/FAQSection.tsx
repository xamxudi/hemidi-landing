"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "What is SEO and does my business need SEO?",
    answer:
      "Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click.",
  },
  {
    question: "What are Google's most important ranking factors?",
    answer:
      "Google considers many factors, including helpful content, relevance, website experience, technical performance, links, and user intent.",
  },
  {
    question: "What is the difference between On-Page SEO and technical SEO?",
    answer:
      "On-Page SEO focuses on content and elements on your pages, while technical SEO focuses on crawling, indexing, site structure, performance, and other technical aspects.",
  },
  {
    question: "Does social media help to increase my website's rank?",
    answer:
      "Social media activity can increase visibility, traffic, and brand awareness. While social signals are not a direct ranking factor, they can indirectly support SEO.",
  },
  {
    question: "How do I create SEO-friendly content?",
    answer:
      "Create useful content that matches search intent, use clear headings, include relevant keywords naturally, provide accurate information, and make the page easy to read.",
  },
  {
    question: "Why has my organic traffic dropped?",
    answer:
      "Organic traffic can change because of search algorithm updates, technical issues, ranking changes, competition, seasonal demand, or changes in search behavior.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? -1 : index
    );
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>
            <span>Frequently asked</span>
            <br />
            question
          </h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`${styles.faqItem} ${
                  isOpen ? styles.open : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>Q. {faq.question}</span>

                  <span className={styles.icon}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    isOpen ? styles.answerOpen : ""
                  }`}
                >
                  <p className={styles.answer}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}