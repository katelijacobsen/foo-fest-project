import { Caesar_Dressing } from "next/font/google";
import { Inter } from "next/font/google";

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
      <h1 className={`${ceasarDressing.className} text-[16rem]`}>FOO FEST</h1>
      <h2 className={`${inter.className}`}>Camp som en ægte viking – og skrål til musikken som en kriger.</h2>
    </div>
  );
};

export default HeroSection;
