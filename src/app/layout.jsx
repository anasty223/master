import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "CV frontend developer Ana Trunova",
  description: "CV frontend developer Ana Trunova",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        // className="antialiased background color  mx-auto"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {children}
      </body>
    </html>
  );
}
