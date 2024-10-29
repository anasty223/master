"use client";

import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import {
  HiMiniWallet,
  HiOutlineAtSymbol,
  HiOutlinePhone,
} from "react-icons/hi2";
import { TbBrandTelegram } from "react-icons/tb";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <nav className="h-60 flex p-4 items-center">
      <div className="flex w-full items-center gap-12 justify-between">
        <h1 className="text-3xl font-bold text-white">
          <a href="/">Ana Trunova</a>
        </h1>

        <ul className="flex gap-2">
          <li className="text-2xl transition-transform duration-300 transform hover:scale-110">
            <div className="conic flex justify-center items-center">
              <a href="mailto:anasty22@gmail.com">
                <HiOutlineAtSymbol />
              </a>
            </div>
          </li>
          <li className="text-2xl transition-transform duration-300 transform hover:scale-110">
            <div className="conic flex justify-center items-center">
              <a href="https://t.me/anasty223" target="_blank">
                <TbBrandTelegram />
              </a>
            </div>
          </li>
          <li className="text-2xl transition-transform duration-300 transform hover:scale-110">
            <div className="conic flex justify-center items-center">
              <a href="tel:+380937657086">
                <HiOutlinePhone />
              </a>
              <p className="text-xs">urk</p>
            </div>
          </li>
          <li className="text-2xl transition-transform duration-300 transform hover:scale-110">
            <div className="conic flex justify-center items-center">
              <a href="tel:+48512514164">
                <BsTelephoneFill />
              </a>
              <p className="text-xs">pol</p>
            </div>
          </li>
          <li className="text-2xl transition-transform duration-300 transform hover:scale-110">
            <div className="conic flex justify-center items-center">
              <a href="https://www.linkedin.com/in/anasty223/" target="_blank">
                <CiLinkedin />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
