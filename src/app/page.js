import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MyMarquee from "@/components/MyMarquee";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MyMarquee />
    </div>
  );
}
