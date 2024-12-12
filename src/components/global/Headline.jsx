import Image from "next/image";

import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Headline = ({ src, text, size, width, height }) => {
  return (
    <div className="flex gap-2 items-center ">
      <Image src={src} alt="rune" width={width} height={height} />
      <h1 className={`${ceasarDressing.className}  ${size}`}>{text}</h1>
    </div>
  );
};

export default Headline;
