import React from "react";
import { HiMiniWallet } from "react-icons/hi2";
import { ImArrowRight } from "react-icons/im";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="">
      <ul className="flex flex-col gap-8 text-white ml-auto">
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
    </div>
  );
};

export default HeroSection;
