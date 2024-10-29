"use client";
import React, { useRef, useState, useEffect } from "react";
import { ImArrowRight } from "react-icons/im";
import img from "/src/assets/img.png";
import green from "/src/assets/269.png";
import brown from "/src/assets/263.png";
import bg from "/src/assets/font.png";

type Props = {};

const HeroSection = (props: Props) => {
  const zoomRef = useRef<HTMLDivElement>(null);
  const [zoomStyle, setZoomStyle] = useState<{ [key: string]: string }>({
    display: "none",
  });

  const [typedText, setTypedText] = useState("");
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
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      zoomRef.current!.getBoundingClientRect();

    const xPercent = ((e.clientX - left) / width) * 100;
    const yPercent = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundSize: "900%",
      top: `${e.clientY - top - 50}px`,
      left: `${e.clientX - left - 50}px`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex justify-between w-full h-full max-w-[1400px] mx-auto px-8 ">
        <div className="relative p-4">
          <ul className="flex flex-col gap-8 text-white">
            <li>
              <div className="flex gap-2 items-center text-2xl">
                <ImArrowRight />
                <a
                  href="#"
                  className="hover:underline text-2xl tracking-widest"
                >
                  Projects
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center text-2xl">
                <ImArrowRight />
                <a
                  href="#"
                  className="hover:underline text-2xl tracking-widest"
                >
                  Education
                </a>
              </div>
            </li>
          </ul>
          <div className=" mt-8">
            <p className="max-w-[700px]">{typedText}</p>
            <img
              src={brown.src}
              alt="cv img"
              className="max-w-[150px] rounded-lg absolute rotate-180 mt-auto opacity-65"
              style={{ bottom: "165px", left: "-10px", zIndex: 5 }}
            />
          </div>
        </div>

        <div className="relative" ref={zoomRef}>
          <img
            src={img.src}
            alt="cv img"
            className="max-w-[400px] rounded-lg relative z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          <div
            className="absolute w-24 h-24 rounded-full border-4 border-white bg-no-repeat"
            style={{
              ...zoomStyle,
              backgroundImage: `url(${img.src})`,
              pointerEvents: "none",
              zIndex: 20,
            }}
          ></div>

          <img
            src={green.src}
            alt="cv img"
            className="max-w-[200px] rounded-lg absolute rotate-90 opacity-65"
            style={{ top: "-95px", right: "-65px", zIndex: 5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
