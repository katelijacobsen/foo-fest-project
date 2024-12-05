"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="sticky top-0 p-4">
        {/* Stor skærme: vis links som en horisontal menu */}
        <ul className="hidden md:flex space-x-4 justify-between">
          <div>
            <li>
              <Link href="/">Logo</Link>
            </li>
          </div>
          <div className="flex gap-4">
            <li>
              <Link href="/program">Program</Link>
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
          </div>
        </ul>

        {/* Burger-menu for små skærme */}
        <button onClick={handleClick} className="md:hidden absolute top-4 right-4 p-2">
          Menu
        </button>

        {/* Vis tekst: luk menu, når den er åben */}
        {isOpen && (
          <div className="md:hidden fixed top-0 right-0 bottom-0 left-0  z-50 p-6">
            {/* Luk menuen */}
            <button onClick={handleClick} className="absolute top-4 right-4 text-black text-2xl">
              Luk menu
            </button>
            <ul className="space-y-6 text-center">
              <li>
                <Link href="/program">Program</Link>
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
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
