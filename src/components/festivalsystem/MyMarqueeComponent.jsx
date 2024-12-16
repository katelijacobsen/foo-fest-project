import { Caesar_Dressing } from "next/font/google";
import Image from "next/image";
import MusicRune from "@/img/svg/music_rune.svg";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const MyComponent = () => {
  return (
    <div className="flex">
      <Image src={MusicRune} alt="musik rune" width={20} height={20} />
      <h1 className={`${ceasarDressing.className} text-3xl px-4 bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent`}>FOO FESTIVAL - 2024</h1>
    </div>
  );
};

export default MyComponent;
