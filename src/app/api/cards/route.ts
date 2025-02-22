import { NextResponse } from "next/server";

const cards = [
  {
    id: "1",
    title: "Notifix",
    img: "/assets/notifix.jpg",
    content: "Content for card 1",
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
    id: "11",
    title: "MiraSeo App",
    img: "/assets/miraseoTauri/1.jpg",
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
  // {
  //   id: "9",
  //   title: "Fastmint",
  //   img: "/assets/fastmint.jpg",
  //   content: "Content for card 9",
  // },
  {
    id: "10",
    title: "My site boost",
    img: "/assets/mySiteBoost.jpg",
    content: "Content for card 9",
  },
  {
    id: "12",
    title: "SqueezeImg",
    img: "/assets/squeezeImg.jpg",
    content: "Content for card 9",
  },
];

export async function GET() {
  return NextResponse.json(cards);
}
