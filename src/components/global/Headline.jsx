import Image from "next/image";

import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Headline = ({ src, text }) => {
  return (
    <div className="flex gap-2">
      <Image src={src} alt="rune" width={50} height={50} />
      <h1 className={`${ceasarDressing.className} text-6xl`}>{text}</h1>
    </div>
  );
};

export default Headline;
