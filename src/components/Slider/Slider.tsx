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
  const [isLoading, setIsLoading] = useState(true); // Loading state
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
        setIsLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false in case of error
      }
    };
    fetchCards();
  }, []);

  const handleClickCard = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-[300px]">
          {/* Add your loader here */}
          <div className="animate-spin rounded-full border-t-4 border-blue-500 w-12 h-12"></div>
        </div>
      ) : (
        <div>
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
        </div>
      )}

      <h2 className="text-3xl font-bold mb-4 text-center my-6">
        Projects in which I took part
      </h2>

      <div className="my-6 flex flex-wrap justify-start gap-4 mt-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg pt-4 w-[150px] h-[150px] mb-4"
            style={{ cursor: "pointer" }}
            onClick={() => handleClickCard(card.id)}
          >
            <h3 className="text-xl text-center mb-2 text-gray-500">
              {card.title}
            </h3>
            {card.img && (
              <div className="relative">
                <img src={card.img} alt={card.title} className="object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
