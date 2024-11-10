"use client";
import Breadcrumb from "@/ui/Breadcrumb";
import Header from "@/ui/Header/Header";
import React, { useState } from "react";

type Props = {
  card: {
    id: string;
    title: string;
    img: string;
    content: string;
    myRole: string;
    folderImg: string[];
    stack: string[];
  };
};

const OneCard: React.FC<Props> = ({ card }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: card.title },
  ];
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-start justify-center gap-4 max-w-[1400px] mx-auto">
        <div className="my-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex items-center gap-4">
          <div className="max-w-[600px]">
            {card.img && (
              <img src={card.img} alt={card.title} className="w-full h-auto" />
            )}
            <div className="flex text-start gap-4 mt-4">
              {card?.stack &&
                card?.stack.map((stack, index) => {
                  return (
                    <div className="text-lg" key={index}>
                      {stack}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold">{card.title}</h1>
            <p>{card?.myRole}</p>
            <div className="flex flex-wrap gap-4">
              {card.folderImg &&
                card.folderImg.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${card.title} image ${index + 1}`}
                    className="w-32 h-auto cursor-pointer"
                    onClick={() => handleImageClick(imgSrc)}
                  />
                ))}
            </div>
          </div>
        </div>
        <p>{card.content}</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute text-white text-2xl font-bold hover:text-gray-400 bg-gray-500 w-[30px] h-[30px] flex justify-center items-center rounded-full"
              style={{ top: "10px", right: "20px" }}
            >
              &times;
            </button>
            <img
              src={selectedImage!}
              alt="Enlarged"
              className="max-w-[800px] max-h-[800px] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OneCard;
