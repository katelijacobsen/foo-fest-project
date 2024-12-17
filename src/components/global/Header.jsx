"use client";
import Link from "next/link";
import { useState } from "react";
import { Caesar_Dressing } from "next/font/google";
import Image from "next/image";
// import Logo from "@/img/fooFestLogo.png";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center fixed z-30 top-0 p-4 w-full">
        <div className="list-none backdrop-blur-[2px] bg-gradient-to-b from-customBlack to-transparent">
          {/* <Link href="/">
            <Image src={Logo} width={100} height={100} alt="foofest logo" />
          </Link> */}
          <Link href="/">
            <p>Logo</p>
          </Link>
        </div>
        <ul className="hidden md:flex md:gap-6 space-x-4 justify-between items-center">
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/program">Program</Link>
          </li>
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/lineup">Line-Up</Link>
          </li>
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/camping">Camping</Link>
          </li>
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/volunteer">Bliv Frivillig</Link>
          </li>
          <li>
            <Link href="/tickets">
              <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Køb billetter" />
            </Link>
          </li>
        </ul>

        {/* Burger-menu for små skærme */}
        <button onClick={handleClick} className={`md:hidden absolute text-2xl top-4 right-4 p-2 ${ceasarDressing.className} bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent`}>
          Menu
        </button>

        {/* Vis tekst: "Luk menu", når burgermenu er åben */}
        {isOpen && (
          <div className="md:hidden fixed top-0 right-0 bottom-0 left-0 z-40 bg-customBlack">
            <button onClick={handleClick} className={`${ceasarDressing.className} absolute top-4 right-4 bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent text-2xl`}>
              Luk menu
            </button>
            <ul className="grid place-content-center text-center h-[60vh] gap-6 mt-[8rem] ">
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/">
                  FORSIDE
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/program">
                  PROGRAM
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/lineup">
                  LINE-UP
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/camping">
                  CAMPING
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/volunteer">
                  BLIV FRIVILLIG
                </Link>
              </li>
              <button>
                <Link href="/tickets" className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`}>
                  Køb billetter
                </Link>
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
