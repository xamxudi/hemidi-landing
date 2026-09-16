import Hero from "@/components/hero/Hero";
import LogosSection from "@/components/logos/LogosSection";
import FeatureSection from "@/components/feature/FeatureSection";
import ContentSection from "@/components/content/ContentSection";
import ServiceSection from "@/components/service/ServiceSection";
import TeamSection from "@/components/team/TeamSection";
import FAQSection from "@/components/faq/FAQSection";
import CTASection from "@/components/cta/CTASection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <LogosSection />

      <FeatureSection />

      <ContentSection />

      <ServiceSection />

      <TeamSection />

      <FAQSection />

      <CTASection />

      <Footer />
    </main>
  );
}