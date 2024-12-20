"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Properties.module.css";
import { REACT_CONCEPTS } from "./data";
import gsap from "gsap";
const Properties: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.children;
    const totalWidth = Array.from(cards).reduce(
      (acc, card) => acc + (card as HTMLElement).offsetWidth,
      0
    );

    // Dupliquer le contenu pour simuler un effet infini
    const duplicateContent = () => {
      const cloned = container.innerHTML;
      container.innerHTML += cloned; // Dupliquer les cartes
    };

    duplicateContent();

    // Animation infinie
    const scrollSpeed = 50; // Pixels par seconde
    const tl = gsap.timeline({ repeat: -1, paused: true });

    tl.to(container, {
      x: `-=${totalWidth}`, // Déplacement sur la largeur totale
      duration: totalWidth / scrollSpeed,
      ease: "none",
    });

    tl.play();

    // Réinitialiser la position pour un effet continu
    const resetPosition = () => {
      const offset = parseFloat(gsap.getProperty(container, "x") as string);
      if (offset <= -totalWidth) {
        gsap.set(container, { x: 0 });
      } else if (offset >= 0) {
        gsap.set(container, { x: -totalWidth });
      }
    };

    gsap.ticker.add(resetPosition);

    return () => {
      gsap.ticker.remove(resetPosition);
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.scrollContainer} id="properties">
      <div className={styles.cardContainer} ref={scrollContainerRef}>
        {REACT_CONCEPTS.map((concept) => (
          <div key={concept.id} className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{concept.text}</h2>
              <p className={styles.cardDescription}>{concept.title}</p>
              <pre className={styles.cardExample}>{concept.exemple}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
