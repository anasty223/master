"use client"; // Добавьте эту строку

import React from "react";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <nav className="h-64 flex relative w-full bg-blue-600">
      <div className="flex gap-8 w-full items-center justify-between px-8">
        <h1 className="text-4xl font-bold text-white">Ana Trunova</h1>
        <ul className="flex gap-8 text-white ml-auto">
          <li>
            <a
              href="#"
              style={{ transition: "color 0.3s", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ transition: "color 0.3s", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              Education
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
