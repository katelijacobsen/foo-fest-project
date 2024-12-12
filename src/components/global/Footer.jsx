import Image from "next/image";
// import Logo from "@/img/fooFestLogo.png";
import Facebook from "@/img/svg/facebook_icon.svg";
import Instagram from "@/img/svg/instagram_Icon.svg";
import Button from "@/components/global/buttonFolder/PrimaryButton";
import Newsletter from "./Newsletter";
const Footer = () => {
  return (
    <div className="w-screen bg-customBlack_5 p-2 ">
      {/* <Image src={Logo} alt={"kads"} width={150} height={150} /> */}
      <div className="sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-7">
        <div className="text-customWhite flex flex-col justify-center text-center sm:mb-32">
          <h2 className="text-4xl">Nyhedsbrev</h2>
          <p>Tilmeld dig vores nyhedsbrev</p>
        </div>
        <Newsletter></Newsletter>
      </div>
      <div className="flex gap-5 flex-row-reverse mt-5 ">
        <a href="#">
          <Image src={Facebook} alt={"Facebook logo, a circle with a f inside"} width={25} height={25}></Image>
        </a>
        <a href="#">
          <Image src={Instagram} alt={"Instagram a square that looks like a camera"} width={25} height={25}></Image>
        </a>
      </div>
    </div>
  );
};

export default Footer;
