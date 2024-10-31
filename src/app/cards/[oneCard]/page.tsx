import OneCard from "@/components/OneCard/OneCard";
import React from "react";

export interface ContextProps {
  params: any;
}

// Обратите внимание на await перед использованием params
export default async function Card({ params }: ContextProps) {
  // Ожидаем параметры
  const { oneCard } = params;

  try {
    const response = await fetch(`http://localhost:3000/api/cards/${oneCard}`);

    if (!response.ok) {
      return <div>Не удалось загрузить детали карточки</div>;
    }

    const card = await response.json();

    if (!card) {
      return <div>Карточка не найдена</div>;
    }

    return (
      <div>
        <OneCard card={card} />
      </div>
    );
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return <div>Ошибка загрузки деталей карточки</div>;
  }
}
