// src/app/page.tsx
import Hero from "./components/hero/Hero";
import Installation from "./components/installation/Installation";
import Properties from "./components/properties/Properties";
import News from "./components/new/New";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Installation />
      <Properties />
      <News />
    </main>
  );
}