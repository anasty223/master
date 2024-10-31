// components/Slider.tsx
import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper"; // Import SwiperCore and Autoplay
// import "swiper/css";
// import "swiper/css/autoplay"; // Import Autoplay styles if necessary

// Register the Autoplay module
// SwiperCore.use([Autoplay]);
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
        console.log(data);

        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCards();
  }, []);
  const handleClickCard = (id: string) => {
    router.push(`/cards/${id}`);
  };
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div>
              <h3>{card.title}</h3>
              {card.img && (
                <div className="relative">
                  <img
                    src={card?.img}
                    alt={card?.title}
                    className="w-[250px] h-[150px] object-cover"
                  />
                  <div
                    className="absolute  bg-gray-500 w-[24px] h-[24px] flex items-center justify-center rounded-lg cursor-pointer"
                    style={{ zIndex: 999, top: "5px", right: "5px" }}
                    onClick={() => {
                      handleClickCard(card?.id);
                    }}
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
  );
};

export default Slider;
