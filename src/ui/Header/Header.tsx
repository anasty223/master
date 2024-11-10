"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BsTelephoneFill } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineAtSymbol, HiOutlinePhone } from "react-icons/hi2";
import { TbBrandTelegram } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon for mobile menu
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Header: React.FC<Props> = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) =>
    pathname === path ? "text-blue-500 underline" : "";

  return (
    <nav className="h-60 flex p-4 max-w-[1400px] mx-auto px-8">
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-xl text-white">
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="flex w-full items-center gap-12 justify-between">
        <div className="flex flex-col lg:flex-row  w-full items-center gap-12 justify-between">
          <h1 className="text-xl md:text-4xl lg:text-5xl mb-4 lg:mb-0 font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-brown">
            <a href="/">Ana Trunova</a>
          </h1>
          {/* Hamburger Icon for Mobile */}

          {/* Desktop Menu */}
          <div className="hidden md:flex z-0">
            <ul className="flex gap-8">
              <li
                className={`text-white text-xl ${isActive(
                  "/projects"
                )} hover:decoration-4`}
              >
                <a href="/projects">Projects</a>
              </li>
              <li
                className={`text-white text-xl ${isActive(
                  "/education"
                )} hover:decoration-4`}
              >
                <a href="/education">Education</a>
              </li>
            </ul>
          </div>
          {/* Contact Icons */}
          <ul className="hidden md:flex gap-4 lg:gap-8">
            <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
              <div className="flex justify-center items-center">
                <a href="mailto:anasty22@gmail.com">
                  <HiOutlineAtSymbol />
                </a>
                <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                  anasty22@gmail.com
                </span>
              </div>
            </li>
            <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
              <div className="flex justify-center items-center">
                <a href="https://t.me/anasty223" target="_blank">
                  <TbBrandTelegram />
                </a>
                <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                  https://t.me/anasty223
                </span>
              </div>
            </li>
            <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
              <div className="flex justify-center items-center">
                <a href="tel:+380937657086">
                  <HiOutlinePhone />
                </a>
                <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                  +380937657086
                </span>
              </div>
            </li>
            <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
              <div className="flex justify-center items-center">
                <a href="tel:+48512514164">
                  <BsTelephoneFill />
                </a>
                <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                  +48512514164
                </span>
              </div>
            </li>
            <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
              <div className="flex justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/anasty223/"
                  target="_blank"
                >
                  <CiLinkedin />
                </a>
                <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                  https://www.linkedin.com/in/anasty223/
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white z-10 p-4 flex flex-col items-end">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="text-3xl text-white absolute top-4 right-4"
            >
              <AiOutlineClose />
            </button>

            <ul className="flex flex-col gap-4 mt-12 px-8">
              <li className={`text-white text-xl ${isActive("/projects")}`}>
                <a href="/projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li className={`text-white text-xl ${isActive("/education")}`}>
                <a href="/education" onClick={toggleMenu}>
                  Education
                </a>
              </li>
              <li className={`text-white text-xl ${isActive("/")}`}>
                <a href="/" onClick={toggleMenu}>
                  Home
                </a>
              </li>
            </ul>
            <ul className="flex gap-4 lg:gap-8 mt-12">
              <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
                <div className="flex justify-center items-center">
                  <a href="mailto:anasty22@gmail.com">
                    <HiOutlineAtSymbol />
                  </a>
                  <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                    anasty22@gmail.com
                  </span>
                </div>
              </li>
              <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
                <div className="flex justify-center items-center">
                  <a href="https://t.me/anasty223" target="_blank">
                    <TbBrandTelegram />
                  </a>
                  <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                    https://t.me/anasty223
                  </span>
                </div>
              </li>
              <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
                <div className="flex justify-center items-center">
                  <a href="tel:+380937657086">
                    <HiOutlinePhone />
                  </a>
                  <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                    +380937657086
                  </span>
                </div>
              </li>
              <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
                <div className="flex justify-center items-center">
                  <a href="tel:+48512514164">
                    <BsTelephoneFill />
                  </a>
                  <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                    +48512514164
                  </span>
                </div>
              </li>
              <li className="text-2xl relative transition-transform duration-300 transform hover:scale-110 group">
                <div className="flex justify-center items-center">
                  <a
                    href="https://www.linkedin.com/in/anasty223/"
                    target="_blank"
                  >
                    <CiLinkedin />
                  </a>
                  <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                    https://www.linkedin.com/in/anasty223/
                  </span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
