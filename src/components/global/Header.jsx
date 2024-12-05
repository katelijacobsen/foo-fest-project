"use client";
import Link from "next/link";
import { useState } from "react";
import { Caesar_Dressing } from "next/font/google";

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
        {/* Stor skærme: vis links som en horisontal menu */}
        <li className="list-none">
          <Link href="/">Logo</Link>
        </li>
        <ul className="hidden md:flex space-x-4 justify-between">
          <li>
            <Link href="/pages/program">Program</Link>
          </li>
          <li>
            <Link href="/lineup">Line-Up</Link>
          </li>
          <li>
            <Link href="/camping">Camping</Link>
          </li>
          <li>
            <Link href="/volunteer">Bliv Frivillig</Link>
          </li>
          <button>Køb billetter</button>
        </ul>

        {/* Burger-menu for små skærme */}
        <button onClick={handleClick} className={`md:hidden absolute top-4 right-4 p-2 ${ceasarDressing.className}`}>
          Menu
        </button>

        {/* Vis tekst: luk menu, når den er åben */}
        {isOpen && (
          <div className="md:hidden fixed top-0 right-0 bottom-0 left-0 z-50 bg-customBlack">
            {/* Luk menuen */}
            <button onClick={handleClick} className={` ${ceasarDressing.className} absolute top-4 right-4 text-customOrange text-2xl`}>
              Luk menu
            </button>
            <ul className="grid place-content-center text-center h-[60vh] gap-6">
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:text-customOrange`} href="/program">
                  PROGRAM
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:text-customOrange`} href="/lineup">
                  LINE-UP
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:text-customOrange`} href="/camping">
                  CAMPING
                </Link>
              </li>
              <li>
                <Link className={`${ceasarDressing.className} text-4xl hover:text-customOrange`} href="/volunteer">
                  BLIV FRIVILLIG
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
