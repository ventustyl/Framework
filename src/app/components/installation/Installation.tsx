"use client";

import React, { useRef, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Installation.module.css";

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  tag: Tag = "p",
}) => {
  const elementRef = useRef<HTMLElement>(null);

  const initializeText = useCallback(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const letters = Array.from(text);
    element.innerHTML = ""; // Clear existing content

    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter; // Utilise un espace insécable pour les espaces
      span.style.opacity = "0";
      span.style.display = "inline-block";
      element.appendChild(span);
    });
  }, [text]);

  // Initialise les spans au montage
  useEffect(() => {
    initializeText();
  }, [initializeText]);

  return (
    <Tag ref={elementRef} className={`${styles.glowIn} ${className}`.trim()} />
  );
};

const Installation: React.FC = () => {
  const articleRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  const animateText = useCallback(() => {
    if (!articleRef.current || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const spans = articleRef.current.querySelectorAll("span");

    // Réinitialise d'abord toutes les spans
    gsap.set(spans, { opacity: 0, textShadow: "none" });

    // Puis lance l'animation
    gsap.to(spans, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.02,
      ease: "power2.inOut",
      textShadow: "0 0 20px white",
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  }, []);

  const resetAnimation = useCallback(() => {
    if (!articleRef.current) return;

    // Annule le timeout précédent si existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const spans = articleRef.current.querySelectorAll("span");

    // Arrête toutes les animations en cours
    gsap.killTweensOf(spans);

    // Animation de disparition
    gsap.to(spans, {
      opacity: 0,
      duration: 0.3,
      stagger: 0.01,
      ease: "power2.inOut",
      textShadow: "none",
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    resetAnimation(); // Réinitialise d'abord
    // Petit délai pour s'assurer que la réinitialisation est terminée
    timeoutRef.current = setTimeout(() => {
      animateText();
    }, 100);
  }, [animateText, resetAnimation]);

  const handleMouseLeave = useCallback(() => {
    resetAnimation();
  }, [resetAnimation]);

  // Nettoyage au démontage
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (articleRef.current) {
        const spans = articleRef.current.querySelectorAll("span");
        gsap.killTweensOf(spans);
      }
    };
  }, []);

  const articleContent = {
    title: "Installation de React : Un Guide Étape par Étape",
    paragraphs: [
      " React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur. Développée par Facebook, elle permet de construire des applications web dynamiques et réactives grâce à une approche basée sur les composants. Avant de commencer, assurez-vous d'avoir Node.js et npm ou yarn installés sur votre machine.",
      " Téléchargez et installez Node.js :Visitez le site officiel de Node.js (https://nodejs.org) et téléchargez la dernière version LTS (Long Term Support). L'installation de Node.js inclut également npm, le gestionnaire de paquets.",
      " Vérifiez l'installation :Ouvrez un terminal ou une console et exécutez les commandes suivantes pour vérifier que Node.js et npm sont correctement installés: node -v npm -v Ces commandes doivent afficher les versions de Node.js et npm.",
      " Téléchargez et installez Node.js :Visitez le site officiel de Node.js (https://nodejs.org) et téléchargez la dernière version LTS (Long Term Support). L'installation de Node.js inclut également npm, le gestionnaire de paquets.",
      " Téléchargez et installez Node.js :Visitez le site officiel de Node.js (https://nodejs.org) et téléchargez la dernière version LTS (Long Term Support). L'installation de Node.js inclut également npm, le gestionnaire de paquets.",
      " Téléchargez et installez Node.js :Visitez le site officiel de Node.js (https://nodejs.org) et téléchargez la dernière version LTS (Long Term Support). L'installation de Node.js inclut également npm, le gestionnaire de paquets.",
    ],
  };

  return (
    <article
      ref={articleRef}
      className={styles.article}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatedText text={articleContent.title} tag="h1" />
      {articleContent.paragraphs.map((paragraph, index) => (
        <AnimatedText key={index} text={paragraph} />
      ))}
    </article>
  );
};

export default Installation;
