"use client"; // Indique que c'est un composant client

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dark, setDark] = useState(true);
  return (
    <html lang="en">
      <body>
        <Navbar dark={dark} toggleDarkMode={() => setDark(!dark)} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
