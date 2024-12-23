import React, { JSX } from "react";
import ClientLayout from "./ClientLayout";
import Hero from "./components/hero/Hero";
import Installation from "./components/installation/Installation";

import Properties from "./components/properties/Properties";
import "./globals.css";
import { ReactNode } from "react";
import News from "./components/new/New";

export const metadata = {
  title: "React (news, help, install, ...)",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="fr">
      <body>
        <ClientLayout>
          <main className="main">
            <Hero />
            <Installation />
            <Properties />
            <News />
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
