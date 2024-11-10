"use client";
import React, { useRef, useState, useEffect } from "react";
import { ImArrowRight } from "react-icons/im";
import img from "/src/assets/img.png";
import green from "/src/assets/269.png";
import brown from "/src/assets/263.png";
import bg from "/src/assets/font.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { MdOutlineSaveAlt } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type Props = {};

const HeroSection = (props: Props) => {
  const [typedText, setTypedText] = useState("");
  const [loading, setLoading] = useState(true);
  const zoomRef = useRef<HTMLDivElement>(null);

  const fullText =
    " I have two years of successful experience working as a frontend developer, and I consider myself a creative and determined individual, ready for new challenges and opportunities. My passion for creating beautiful and intuitive user interfaces is combined with a deep understanding of modern web technologies, allowing me to effectively implement projects of any scale. My approach to development is based on continuous learning and a commitment to improvement, enabling me to stay abreast of the latest trends and best practices in frontend development. I am ready to contribute to the team, enhancing user experience and bringing innovation to every project I work on";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setLoading(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="relative w-full h-[100vh] bg-cover bg-center overflow-visible"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row  justify-between w-full h-full max-w-[1400px] mx-auto px-8">
        <div className="relative p-4">
          <div className="w-full lg:w-[700px] h-[300px] mb-4 relative">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/bx4otR19RY4?autoplay=1&mute=1"
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover lg:z-10"
              ></iframe>
            </div>

            <div className="mt-8">
              <p className="max-w-[700px]" style={{ zIndex: 100 }}>
                {typedText}
              </p>

              <img
                src={brown.src}
                alt="cv img"
                className="max-w-[150px] rounded-lg absolute rotate-180 mt-auto opacity-65"
                style={{ bottom: "-180px", left: "-100px", zIndex: 0 }}
              />
            </div>
          </div>
        </div>
        <div className="relative" ref={zoomRef}>
          <div className="flex items-center gap-4 mb-4">
            <MdOutlineSaveAlt />
            <a
              href="/СV_AnastasiiaTrunova_React-Frontenddeveloper.pdf"
              download
              className="hover:text-[#232323] hover:underline transition-colors duration-300"
            >
              <h3 className="cursor-pointer font-extrabold">Save PDF</h3>
            </a>
            <a
              href="/СV_AnastasiiaTrunova_React-Frontenddeveloper.png"
              download
              className="hover:text-[#232323] hover:underline transition-colors duration-300"
            >
              <h3 className="cursor-pointer font-extrabold">Save PNG</h3>
            </a>
          </div>

          <Zoom>
            <img
              src={img.src}
              alt="cv img"
              className="w-full lg:w-[550px] h-[370px] object-cover object-top rounded-lg relative lg:z-10"
            />
          </Zoom>
          <img
            src={green.src}
            alt="cv img"
            className="max-w-[200px] rounded-lg absolute rotate-90 opacity-65 hidden lg:visible"
            style={{ top: "-95px", right: "-65px", zIndex: 5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
