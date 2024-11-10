"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { BsTelephoneFill } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineAtSymbol, HiOutlinePhone } from "react-icons/hi2";
import { TbBrandTelegram } from "react-icons/tb";

type Props = {};

const Header: React.FC<Props> = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-blue-500 underline" : "";

  return (
    <nav className="h-60 flex p-4 max-w-[1400px] mx-auto px-8 ">
      <div className="flex w-full items-center gap-12 justify-between">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-brown">
          <a href="/">Ana Trunova</a>
        </h1>
        <div className="z-0">
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
              <a href="/education"> Education</a>
            </li>
          </ul>
        </div>
        <ul className="flex gap-8">
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
              <a href="https://www.linkedin.com/in/anasty223/" target="_blank">
                <CiLinkedin />
              </a>
              <span className="absolute bottom-[-20px] left-0 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs text-white bg-gray-700 rounded-md p-1">
                https://www.linkedin.com/in/anasty223/
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
