// src/app/ClientLayout.tsx
"use client";

import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(true);



  return (
    <>
      <Navbar dark={dark} toggleDarkMode={() => setDark(!dark)} />
      {children}
      <Footer />
    </>
  );
}
