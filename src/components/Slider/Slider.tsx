// components/Slider.tsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Card = {
  id: string;
  title: string;
  img: string;
  content: string;
};

const Slider: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

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

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div>
              <h3>{card.title}</h3>
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-[250px] h-[150px] object-cover"
                />
              )}
              <p>{card.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
