import Marquee from "react-fast-marquee";
import MyMarqueeComponent from "@/components/festivalsystem/MyMarqueeComponent";
import Image from "next/image";
import MarqueeBorder from "@/img/svg/small_marquee.svg";

const MyMarquee = () => {
  return (
    <div>
      <div className="relative h-[3rem]">
        <Image className="object-cover" fill={true} src={MarqueeBorder} alt="keltic mønster" sizes="(max-width: 800px) 10vw, (max-width:1400px) 5vw, 5vw" />
      </div>
      <Marquee>
        <MyMarqueeComponent />
        <MyMarqueeComponent />
        <MyMarqueeComponent />
        <MyMarqueeComponent />
        <MyMarqueeComponent />
        <MyMarqueeComponent />
        <MyMarqueeComponent />
        <MyMarqueeComponent />
        <MyMarqueeComponent />
      </Marquee>
      <div className="relative h-[3rem]">
        <Image className="object-cover" fill={true} src={MarqueeBorder} alt="keltic mønster" sizes="(max-width: 800px) 10vw, (max-width:1400px) 5vw, 5vw" />
      </div>
    </div>
  );
};

export default MyMarquee;
