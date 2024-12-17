import Image from "next/image";
import MusicRune from "@/img/svg/music_rune_white.svg";
// import { Caesar_Dressing } from "next/font/google";

// const ceasarDressing = Caesar_Dressing({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

const MyComponent = () => {
  return (
    <div className="flex">
      <Image src={MusicRune} alt="musik rune" width={20} height={20} />
      <h1 className={` font-bold text-3xl px-4 text-white`}>FOOFEST FESTIVAL - 2025</h1>
    </div>
  );
};

export default MyComponent;
