"use client";
import Slider from "@/components/Slider/Slider";
import Header from "@/ui/Header/Header";
import React from "react";
import bg from "/src/assets/font4.png";

type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div
      className="relative w-full h-[100vh] bg-cover bg-center overflow-visible z-0"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Header />
      {/* <Slider /> */}
    </div>
  );
};

export default ProjectsPage;
