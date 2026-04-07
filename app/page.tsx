import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { WhySection } from "@/components/home/WhySection";
import { DestinationGrid } from "@/components/home/DestinationGrid";
import { ItineraryPreview } from "@/components/home/ItineraryPreview";
import { PracticalTeaser } from "@/components/home/PracticalTeaser";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhySection />
      <DestinationGrid />
      <ItineraryPreview />
      <PracticalTeaser />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
