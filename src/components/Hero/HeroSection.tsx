import React from "react";
import { HiMiniWallet } from "react-icons/hi2";
import { ImArrowRight } from "react-icons/im";
import img from "/src/assets/img.png"; // Путь к изображению

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="flex justify-between w-full">
      <ul className="flex flex-col gap-8 text-white ">
        <li>
          <div className="flex gap-2 items-center text-2xl">
            <ImArrowRight />
            <a href="#" className="hover:underline text-lg">
              Projects
            </a>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center text-2xl">
            <ImArrowRight />
            <a href="#" className="hover:underline text-lg">
              Education
            </a>
          </div>
        </li>
      </ul>

      <div>
        <img src={img.src} alt="cv img" className="max-w-[400px] " />
      </div>
    </div>
  );
};

export default HeroSection;
