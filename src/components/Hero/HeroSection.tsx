import React from "react";
import { HiMiniWallet } from "react-icons/hi2";
import { ImArrowRight } from "react-icons/im";
import img from "/src/assets/img.png";
import green from "/src/assets/green.png";
import oval from "/src/assets/Oval1.png";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="flex justify-between w-full">
      <div className="object-cover relative shadow-lg  p-4">
        <ul className="flex flex-col gap-8 text-white">
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
        {/* <img
          src={oval.src}
          alt="cv img"
          className="rounded-lg max-w-[400px] rotate-180 absolute blurred-edge bg-origin-content"
          style={{ top: "0px", left: "-10px" }}
        /> */}
      </div>

      <div className="relative">
        <img src={img.src} alt="cv img" className="max-w-[400px] rounded-lg " />

        <img
          src={green.src}
          alt="cv img"
          className="max-w-[400px] rounded-lg absolute rotate-45"
          style={{ top: "-75px", right: "-65px" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
