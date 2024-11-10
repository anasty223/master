import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type Card = {
  id: string;
  title: string;
  img: string;
  content: string;
};

const Slider: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/cards");
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
        const data: Card[] = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCards();
  }, []);

  const handleClickCard = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-lg pt-4 h-[250px]">
              <h3 className="text-xl text-center mb-2 text-gray-500">
                {card.title}
              </h3>
              {card.img && (
                <div className="relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover"
                  />
                  <div
                    className="absolute bg-gray-300 text-gray-500 w-[24px] h-[24px] flex items-center justify-center rounded-lg cursor-pointer hover:bg-white hover:text-black"
                    style={{ zIndex: 999, top: "-35px", right: "20px" }}
                    onClick={() => handleClickCard(card.id)}
                  >
                    <FaArrowUpRightFromSquare />
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="my-6">
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          initialSlide={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white rounded-lg pt-4 h-[250px]">
                <h3 className="text-xl text-center mb-2 text-gray-500">
                  {card.title}
                </h3>
                {card.img && (
                  <div className="relative">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="object-cover"
                    />
                    <div
                      className="absolute bg-gray-300 text-gray-500 w-[24px] h-[24px] flex items-center justify-center rounded-lg cursor-pointer hover:bg-white hover:text-black"
                      style={{ zIndex: 999, top: "-35px", right: "20px" }}
                      onClick={() => handleClickCard(card.id)}
                    >
                      <FaArrowUpRightFromSquare />
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
