import Image from "next/image";
import Logo from "@/img/fooFestLogo.png";
import Facebook from "@/img/svg/facebook_icon.svg";
import Instagram from "@/img/svg/instagram_Icon.svg";
import Button from "@/components/global/buttonFolder/PrimaryButton";
const Footer = () => {
  return (
    <div className="w-screen bg-customBlack_5 p-2 ">
      <Image src={Logo} alt={"kads"} width={150} height={150} />
      <div className="sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-7">
        <div className="text-customWhite flex flex-col justify-center text-center sm:mb-32">
          <h2 className="text-4xl">Nyhedsbrev</h2>
          <p>Tilmeld dig vores nyhedsbrev</p>
        </div>
        <form className="flex flex-col gap-5 items-center " action="">
          <div className="flex flex-col  text-customWhite ">
            <label htmlFor="name">Navn</label>
            <input className="bg-customBlack_4 p-2 min-w-64 sm:min-w-96 " placeholder="Navn" type="text" id="name" name="name" />
          </div>
          <div className="flex flex-col  text-customWhite">
            <label htmlFor="email">E-mail</label>
            <input className="bg-customBlack_4 p-2 min-w-64 sm:min-w-96" placeholder="E-mail" type="text" id="email" name="email" />
          </div>
          <Button color="bg-customBlack_3" buttonContent="Tilmeld"></Button>
        </form>
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
