import FeaturedSection from "@/components/sections/HomeSections/FeaturedSection";
import HeroSection from "@/components/sections/HomeSections/HeroSection";
import TrailersSection from "@/components/sections/HomeSections/TrailersSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <TrailersSection />
    </>
  );
}
