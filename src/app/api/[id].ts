import { NextResponse } from "next/server";

const cards = [
  { id: "1", title: "Card 1", content: "Content for card 1" },
  { id: "2", title: "Card 2", content: "Content for card 2" },
  { id: "3", title: "Card 3", content: "Content for card 3" },
  // другие карточки
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const card = cards.find((card) => card.id === params.id);

  if (!card) {
    return NextResponse.json({ message: "Card not found" }, { status: 404 });
  }

  return NextResponse.json(card);
}
