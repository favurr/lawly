import HeroSection from "@/components/tailark/hero-section";
import FeaturesSection from "@/components/tailark/features-5";
import ContentSection from "@/components/tailark/content-3";
import FeatureCarousel from "@/components/21stdev/feature-carousel";
import {TeamSection} from "@/components/21stdev/team-section-1";
import TeamSectionWrapper from "@/components/team-section-wrapper";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturesSection />
      <FeatureCarousel />
      <ContentSection />
      <TeamSectionWrapper />
    </>
  );
}
