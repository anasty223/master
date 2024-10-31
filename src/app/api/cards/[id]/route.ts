// src/app/api/cards/[id]/route.ts
import { ContextProps } from "@/app/cards/[oneCard]/page";
import { NextResponse } from "next/server";

const cards = [
  {
    id: "1",
    title: "Notifix",
    img: "/assets/notifix.jpg",
    folderImg: [
      "/assets/notifix/1.jpg",
      "/assets/notifix/2.jpg",
      "/assets/notifix/3.jpg",
    ],
    myRole:
      "My role in this project. I sent notifications via email, as well as integration via Telegram. Adding a new member to the project",
    content:
      "The Notifix project was developed as an automation tool to streamline software development workflows, specifically aiding DevOps teams in managing and configuring CI/CD processes. The platform integrates smoothly with major services like GitLab, Google, and GitHub, and is adaptable to meet varied company needs, enhancing efficiency for engineering teams.Usability was a priority, with an intuitive interface allowing quick pipeline configurations for task automation. Notifix also supports collaboration tools and security features, including Telegram notifications and SSH for secure connections, helping teams to optimize resources and work more effectively.",
  },
  {
    id: "2",
    title: "3dvis",
    img: "/assets/3dvis.jpg",
    content: "Content for card 2",
  },
  {
    id: "3",
    title: "Aventure",
    img: "/assets/aventure.jpg",
    content: "Content for card 3",
  },
  {
    id: "4",
    title: "Mealfork",
    img: "/assets/mealfork.jpg",
    content: "Content for card 4",
  },
  {
    id: "5",
    title: "Alla Hichko",
    img: "/assets/hichko.jpg",
    content: "Content for card 5",
  },
  {
    id: "6",
    title: "MiraSeo",
    img: "/assets/miraseo.jpg",
    content: "Content for card 6",
  },
  {
    id: "7",
    title: "Opps",
    img: "/assets/opps.jpg",
    content: "Content for card 7",
  },
  {
    id: "8",
    title: "Viza group",
    img: "/assets/viza.jpg",
    content: "Content for card 8",
  },
  {
    id: "9",
    title: "Fastmint",
    img: "/assets/fastmint.jpg",
    content: "Content for card 9",
  },
];
export async function GET(req: Request, context: ContextProps) {
  const { id } = context.params; // Используем await для получения id из params
  console.log(id, "iddddddddddddddddddd");

  const card = cards.find((card) => card.id === id); // Поиск карточки по id

  if (!card) {
    return NextResponse.json({ message: "Card not found" }, { status: 404 }); // Ответ в случае неудачи
  }

  return NextResponse.json(card); // Возврат найденной карточки
}
