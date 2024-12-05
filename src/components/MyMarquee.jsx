import Marquee from "react-fast-marquee";
import MyMarqueeComponent from "./MyMarqueeComponent";
import Image from "next/image";
import MarqueeBorder from "@/img/svg/small_marquee.svg";

const MyMarquee = () => {
  return (
    <div>
      <Image src={MarqueeBorder} alt="keltic mønster" width={1500} height={100} />
      {/* <Image src={MarqueeBorder} alt="keltic mønster" width={750} height={10} /> */}
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
      <Image src={MarqueeBorder} alt="keltic mønster" width={1500} height={100} />
    </div>
  );
};

export default MyMarquee;
