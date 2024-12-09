"use client";
import Link from "next/link";
import { useState } from "react";
import { Caesar_Dressing } from "next/font/google";
import Image from "next/image";
import Logo from "@/img/fooFestLogo.png";

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
      <nav className="flex justify-between sticky top-0 p-4">
        <li className="list-none">
          <Link href="/">
            <Image src={Logo} width={100} height={100} alt="foofest logo" />
          </Link>
        </li>
        <ul className="hidden md:flex md:gap-6 space-x-4 justify-between items-center">
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/pages/program">Program</Link>
          </li>
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/pages/lineup">Line-Up</Link>
          </li>
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/pages/camping">Camping</Link>
          </li>
          <li className="hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent">
            <Link href="/pages/volunteer">Bliv Frivillig</Link>
          </li>
          <button>
            <Link href="/pages/payment">Køb billetter</Link>
          </button>
        </ul>

        {/* Burger-menu for små skærme */}
        <button onClick={handleClick} className={`md:hidden absolute text-2xl top-4 right-4 p-2 ${ceasarDressing.className} bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent`}>
          Menu
        </button>

        {/* Vis tekst: "Luk menu", når burgermenu er åben */}
        {isOpen && (
          <div className="md:hidden fixed top-0 right-0 bottom-0 left-0 z-10 bg-customBlack">
            {/* Luk menuen */}
            <button onClick={handleClick} className={`${ceasarDressing.className} absolute top-4 right-4 bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent text-2xl`}>
              Luk menu
            </button>
            <ul className="grid place-content-center text-center h-[60vh] gap-6 mt-[8rem]">
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/pages/program">
                  PROGRAM
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/pages/lineup">
                  LINE-UP
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/pages/camping">
                  CAMPING
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`} href="/pages/volunteer">
                  BLIV FRIVILLIG
                </Link>
              </li>
              <button>
                <Link href="/pages/payment" className={`${ceasarDressing.className} text-4xl hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent`}>
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
