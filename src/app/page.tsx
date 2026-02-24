import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import LevelsPreview from "@/components/home/LevelsPreview";
import Testimonials from "@/components/home/Testimonials";
import NewsPreview from "@/components/home/NewsPreview";
import ScolAppPreview from "@/components/home/ScolAppPreview";
import AdmissionCTA from "@/components/home/AdmissionCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyUs />
      <LevelsPreview />
      <ScolAppPreview />
      <Testimonials />
      <NewsPreview />
      <AdmissionCTA />
    </>
  );
}
