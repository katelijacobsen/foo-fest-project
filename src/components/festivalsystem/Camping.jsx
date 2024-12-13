import Image from "next/image";
import CampingMap from "@/img/svg/camping_map.svg";
import Headline from "../global/Headline";
import CampingRune from "@/img/svg/camping_rune.svg";

const Camping = ({ text }) => {
  return (
    <section className="py-6 px-4 h-screen grid place-content-center md:grid-cols-2 gap-4 max-w-screen-xl mx-auto items-start">
      <div>
        <Headline src={CampingRune} width={45} height={45} size="text-4xl md:text-6xl" text="CAMPING" />
        <p className="pt-6 text-lg md:text-lg">{text}</p>
      </div>
      <Image className="justify-self-center" src={CampingMap} alt="illustration af campingpladser" width={650} height={650} />
    </section>
  );
};

export default Camping;
