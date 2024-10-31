import OneCard from "@/components/OneCard/OneCard";
import React from "react";

export default async function Card(context) {
  const params = await context.params;
  const { oneCard } = params;

  try {
    const response = await fetch(`http://localhost:3000/api/cards/${oneCard}`);
    if (!response.ok) {
      return <div>Failed to load card details</div>;
    }

    const card = await response.json();

    if (!card) {
      return <div>Card not found</div>;
    }

    return (
      <div>
        <OneCard card={card} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading card details</div>;
  }
}
