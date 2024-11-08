"use client";
import React, { useRef, useState, useEffect } from "react";
import { ImArrowRight } from "react-icons/im";
import img from "/src/assets/img.png";
import green from "/src/assets/269.png";
import brown from "/src/assets/263.png";
import bg from "/src/assets/font.png";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { Skeleton } from "@nextui-org/skeleton";

type Props = {};

const HeroSection = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [loading, setLoading] = useState(true);
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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoaded = () => {
    setLoading(false);
  };

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex justify-between w-full h-full max-w-[1400px] mx-auto px-8">
        <div className="relative p-4">
          <div className="w-[700px] h-[300px] mb-4 relative">
            <Skeleton className="rounded-lg" isLoaded={!loading}>
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/bx4otR19RY4?autoplay=1&mute=1"
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ zIndex: 9999 }}
                ></iframe>
              </div>
            </Skeleton>

            <div className="mt-8">
              <Skeleton className="max-w-[700px]" isLoaded={!loading}>
                <p className="max-w-[700px]" style={{ zIndex: 9999 }}>
                  {typedText}
                </p>
              </Skeleton>

              <img
                src={brown.src}
                alt="cv img"
                className="max-w-[150px] rounded-lg absolute rotate-180 mt-auto opacity-65"
                style={{ bottom: "-180px", left: "-100px", zIndex: 5 }}
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={img.src}
            alt="cv img"
            className="max-w-[400px] rounded-lg relative z-10"
          />
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
