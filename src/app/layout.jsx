import React from "react";
import "../styles/globals.css";

const geistSans = {
  fontFamily: "Geist Sans",
  src: `url("./fonts/GeistVF.woff") format("woff")`,
  fontWeight: "100 900",
};
const geistMono = {
  fontFamily: "Geist Mono",
  src: `url("./fonts/GeistMonoVF.woff") format("woff")`,
  fontWeight: "100 900",
};

export const metadata = {
  title: "CV frontend developer Ana Trunova",
  description: "CV frontend developer Ana Trunova",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
      @font-face {
        font-family: 'Geist Sans';
        src: url('./fonts/GeistVF.woff') format('woff');
        font-weight: 100 900;
      }
      @font-face {
        font-family: 'Geist Mono';
        src: url('./fonts/GeistMonoVF.woff') format('woff');
        font-weight: 100 900;
      }
    `}
        </style>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className="antialiased background color max-w-[1400px] mx-auto"
        // style={{ fontFamily: "Geist Sans, Geist Mono" }}
      >
        {children}
      </body>
    </html>
  );
}
