import HeroSection from "@/components/hero_section";
import IntroSection from "@/components/intro_section";
import MissionStatement from "@/components/mission_statement";
import SubjectsSection from "@/components/subjects";
import TestimonialsCarousel from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <MissionStatement/>
      <TestimonialsCarousel/>
      <IntroSection/>
      <SubjectsSection/>
    </>
  );
}
