import { Caesar_Dressing } from "next/font/google";
import { Inter } from "next/font/google";
import Marquee from "@/components/festivalsystem/MyMarquee";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
import { FaArrowDown } from "react-icons/fa6";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div>
      <h1 className={`${ceasarDressing.className} text-[7rem] lg:text-[16rem] text-center`}>FOO FEST</h1>
      <h2 className={`${inter.className} text-xl text-center`}>Camp som en ægte viking – og skrål til musikken som en kriger.</h2>
      <div className="grid place-content-center pt-6 pb-12">
        <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Køb billetter" />
      </div>
      <div className="grid place-content-end p-2">
        <FaArrowDown className="text-customOrange w-8 h-8 animate-bounce" />
      </div>
      <Marquee />
    </div>
  );
};

export default HeroSection;
