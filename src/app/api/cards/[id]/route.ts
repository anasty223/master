// src/app/api/cards/[id]/route.ts
import { ContextProps } from "@/app/projects/[oneCard]/page";
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
      "My role in this project. I sent notifications via email, as well as integration via Telegram. Adding a new member to the project. Mobile responsive interface",
    content:
      "The Notifix project was developed as an automation tool to streamline software development workflows, specifically aiding DevOps teams in managing and configuring CI/CD processes. The platform integrates smoothly with major services like GitLab, Google, and GitHub, and is adaptable to meet varied company needs, enhancing efficiency for engineering teams.Usability was a priority, with an intuitive interface allowing quick pipeline configurations for task automation. Notifix also supports collaboration tools and security features, including Telegram notifications and SSH for secure connections, helping teams to optimize resources and work more effectively.",
  },
  {
    id: "2",
    title: "3dvis",
    folderImg: [
      "/assets/3dvis/1.jpg",
      "/assets/3dvis/2.jpg",
      "/assets/3dvis/3.jpg",
      "/assets/3dvis/4.jpg",
      "/assets/3dvis/5.jpg",
      "/assets/3dvis/6.jpg",
    ],
    stack: ["Next.js", "Tailwind", "Sql", "Dato"],
    img: "/assets/3dvis.jpg",
    myRole:
      "On this project I did localization using the Dato database. Dark and light theme. Styling main page, Image preloading, Image Zoom,images-gallery,page- Services,page- About me, Contacts page, Footer and Header pages, animation using framer-motion and aos. Mobile responsive interface",
    content: "",
  },
  {
    id: "3",
    title: "Aventure",
    folderImg: [
      "/assets/aventure/1.jpg",
      "/assets/aventure/2.jpg",
      "/assets/aventure/3.jpg",
      "/assets/aventure/4.jpg",
      "/assets/aventure/5.jpg",
      "/assets/aventure/6.jpg",
      "/assets/aventure/7.jpg",
      "/assets/aventure/8.jpg",
    ],
    myRole:
      "On this project, I participated in the creation of a page for one company, one person, displaying a list of people, making charts and tables, the main page, server side rendering of news pages on the blog. Took part in the creation of filters, and advertising banners",
    stack: ["Next.js", "Chakra.ui", , "Strapi"],
    img: "/assets/aventure.jpg",
  },
  {
    id: "4",
    title: "Mealfork",
    img: "/assets/mealfork.jpg",
    folderImg: [
      "/assets/mealforks/1.jpg",
      "/assets/mealforks/2.jpg",
      "/assets/mealforks/3.jpg",
      "/assets/mealforks/4.jpg",
    ],
    stack: ["Next.js", "Chakra.ui"],
    myRole:
      "in this project I created the main page, i used Swiper for images, creating and editing a recipe, editing a profile, logging in via email, and the admin part of the project.",
    content:
      "MealForks is a vibrant online hub for food lovers, bringing together both home cooks and professional chefs to share and enhance recipes. More than just a recipe site, it’s a collaborative space where users can explore new flavors, exchange cooking tips, and refine their dishes. MealForks is designed to inspire, offering tools for interaction and culinary growth regardless of experience level. With easy access to diverse recipes and the ability to personalize and share creations, MealForks creates a welcoming community for every food enthusiast.",
  },
  {
    id: "5",
    title: "Alla Hichko",
    myRole:
      "I did this project myself, I used pure html and css to send contacts to php email",
    folderImg: [
      "/assets/hichko/1.jpg",
      "/assets/hichko/2.jpg",
      "/assets/hichko/3.jpg",
      "/assets/hichko/4.jpg",
      "/assets/hichko/5.jpg",
    ],
    stack: ["html", "css", "php"],
    img: "/assets/hichko.jpg",
  },
  {
    id: "6",
    title: "MiraSeo",
    stack: [
      "Next.js",
      "Tailwind",
      "Chakra.ui",
      "Strapi",
      "Mailchimp",
      "Typescript",
    ],
    folderImg: [
      "/assets/miraseo/1.jpg",
      "/assets/miraseo/2.jpg",
      "/assets/miraseo/3.jpg",
    ],
    myRole:
      "On this project, I was working on a blog, outputting all articles, and one article through the strapi server, side rendering server, BradCramps, sending letters by mail, as well as typesetting some parts of the pages.",
    img: "/assets/miraseo.jpg",
    content:
      "MiraSEO was developed to support website owners and SEO experts in optimizing their sites. It offers an advanced toolset for comprehensive site analysis, helping identify code and structure issues and assessing adherence to search engine standards. By doing so, MiraSEO aids in boosting search rankings, enhancing user experience, driving more traffic, and improving load times. The platform provides a suite of auditing and competitor analysis tools, delivering practical SEO improvement insights. It caters to a diverse user base—from individual site owners to large enterprises—with personalized reports to enhance search visibility. With its interactive features and in-depth analytics, MiraSEO streamlines the website optimization process.",
  },
  {
    id: "7",
    title: "Opps",
    folderImg: [
      "/assets/opps/1.jpg",
      "/assets/opps/2.jpg",
      "/assets/opps/3.jpg",
      "/assets/opps/4.jpg",
      "/assets/opps/5.jpg",
    ],
    stack: ["Next.js", "Chakra.ui"],
    myRole:
      "in this project I worked on login through a code using email. filtering where, in particular, binary search was used in order to speed up the process. Displaying tables with search lists, one list, purchased lists, listing lists, one or several at a time. Editing a profile, changing a photo.",
    img: "/assets/opps.jpg",
    content:
      "Opps.ai is a platform where you can discover fresh opportunity data for cold emailing, targeted advertising audiences, LinkedIn outreach, and Twitter campaigns. As a subscriber, you'll have access to three types of data:- Investors- Companies in high-growth sectors or those that have recently received funding- Custom data available in the marketplace, including curated lists and audience insights.",
  },
  {
    id: "8",
    title: "Viza group",
    folderImg: [
      "/assets/viza/1.jpg",
      "/assets/viza/2.jpg",
      "/assets/viza/3.jpg",
      "/assets/viza/4.jpg",
      "/assets/viza/5.jpg",
      "/assets/viza/6.jpg",
      "/assets/viza/7.jpg",
    ],
    myRole:
      "Here I participated in the layout of the entire project, login and registration, with confirmation of the telephone number, recaptcha. Server side rendering. Creating and editing a claim. Multiple chats between the lawyer, administrator and plaintiff of filed claims, those who will invest, informational chats. Sending files via chats. Saving chat history at all stages. Integration of notifications of read and unread messages.",
    stack: ["Next.js", "Chakra.ui", "Firebase", "Strapi"],
    img: "/assets/viza.jpg",
    content: "",
  },
  // {
  //   id: "9",
  //   title: "Fastmint",
  //   img: "/assets/fastmint.jpg",
  //   content: "Content for card 9",
  // },
  {
    id: "10",
    folderImg: [
      "/assets/mysiteboost/1.jpg",
      "/assets/mysiteboost/2.jpg",
      "/assets/mysiteboost/3.jpg",
      "/assets/mysiteboost/4.jpg",
      "/assets/mysiteboost/5.jpg",
      "/assets/mysiteboost/6.jpg",
      "/assets/mysiteboost/7.jpg",
    ],
    myRole:
      "My role in this project is designing the layout of all pages. Header, localization, interaction with Strapi, blog, connection creation, email and telegram integration. Editing a profile, deleting a profile, changing a password, time zones, avatars. One dashboard page, data output, graph, site editing, pause, refresh, delete. eo analytics, cards and data. Report, display data on the page, send, print and save a PDF file. Sing In, Sing Up",
    title: "MySiteBoost",
    stack: ["Next.js", "Chakra.ui", "Firebase", "Strapi"],
    img: "/assets/mySiteBoost.jpg",
    content: "Website SEO analytics tracking project",
  },
  {
    id: "11",
    title: "MiraSeo App",
    img: "/assets/miraseoTauri/1.jpg",

    folderImg: [
      "/assets/miraseoTauri/1.jpg",
      "/assets/miraseoTauri/2.jpg",
      "/assets/miraseoTauri/3.jpg",
      "/assets/miraseoTauri/4.jpg",
      "/assets/miraseoTauri/5.jpg",
    ],
    myRole:
      "I was responsible for the header, for the SEO analytics page where I used resize tables, cards, chart, skeleton ,search, page Pages, reports - markup and styling and logic.",
    stack: ["Tauri", "React.js", "Chakra.ui", "Firebase"],
    content:
      "MiraSEO was developed to support website owners and SEO experts in optimizing their sites. It offers an advanced toolset for comprehensive site analysis, helping identify code and structure issues and assessing adherence to search engine standards. By doing so, MiraSEO aids in boosting search rankings, enhancing user experience, driving more traffic, and improving load times. The platform provides a suite of auditing and competitor analysis tools, delivering practical SEO improvement insights. It caters to a diverse user base—from individual site owners to large enterprises—with personalized reports to enhance search visibility. With its interactive features and in-depth analytics, MiraSEO streamlines the website optimization process.",
  },

  {
    id: "12",
    title: "Squeezeimg",
    img: "/assets/squeezeImg.jpg",
    content:
      "A project for editing images, reducing quality, removing background.",
    stack: ["Next.js", "Chakra.ui"],
    myRole:
      "In this project I registered via email, Google, Facebook, login. Header, Adding a picture to the editor, loading several pictures into the processing queue. Removing background, reducing size. Lowders.",
    folderImg: [
      "/assets/squeezeImg/1.jpg",
      "/assets/squeezeImg/2.jpg",
      "/assets/squeezeImg/3.jpg",
    ],
  },
];
export async function GET(req: Request, context: ContextProps) {
  const { id } = context.params;

  const card = cards.find((card) => card.id === id);

  if (!card) {
    return NextResponse.json({ message: "Card not found" }, { status: 404 });
  }

  return NextResponse.json(card);
}
