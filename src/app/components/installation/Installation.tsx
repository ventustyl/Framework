"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./Installation.module.css";

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: React.ElementType;
  isMobile: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  tag: Tag = "p",
  isMobile
}) => {
  const elementRef = useRef<HTMLElement>(null);

  const initializeText = useCallback(() => {
    if (!elementRef.current || isMobile) return;

    const element = elementRef.current;
    const words = text.split(' ');
    element.innerHTML = "";

    words.forEach((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = styles.wordWrapper;
      
      const textNode = document.createTextNode(word);
      wordSpan.appendChild(textNode);
      
      if (index < words.length - 1) {
        wordSpan.appendChild(document.createTextNode(" "));
      }
      
      element.appendChild(wordSpan);
    });
  }, [text, isMobile]);

  useEffect(() => {
    initializeText();
  }, [initializeText]);

  if (isMobile) {
    return <Tag className={`${styles.mobileText} ${className}`.trim()}>{text}</Tag>;
  }

  return (
    <Tag ref={elementRef} className={`${styles.glowIn} ${className}`.trim()} />
  );
};

const Installation: React.FC = () => {
  const articleRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérification initiale
    checkMobile();

    // Ajouter un écouteur pour le redimensionnement
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const animateText = useCallback(() => {
    if (!articleRef.current || isMobile) return;

    const spans = articleRef.current.querySelectorAll("span");
    const tl = gsap.timeline();
    activeAnimationRef.current = tl;

    gsap.set(spans, {
      opacity: 0,
      textShadow: "none",
    });

    tl.to(spans, {
      opacity: 1,
      duration: 1,
      stagger: {
        each: 0.01,
        ease: "power1.inOut",
      },
      textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      ease: "power2.inOut",
    });

    return tl;
  }, [isMobile]);

  const resetAnimation = useCallback(() => {
    if (!articleRef.current || isMobile) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const spans = articleRef.current.querySelectorAll("span");

    if (activeAnimationRef.current) {
      activeAnimationRef.current.kill();
    }

    const tl = gsap.timeline();
    activeAnimationRef.current = tl;

    tl.to(spans, {
      opacity: 0,
      duration: 0.1,
      stagger: {
        each: 0.01,
        ease: "power1.inOut",
      },
      textShadow: "none",
      ease: "power2.inOut",
    });

    return tl;
  }, [isMobile]);

  const handleMouseEnter = useCallback(() => {
    if (isMobile) return;
    
    resetAnimation();
    timeoutRef.current = setTimeout(() => {
      animateText();
    }, 100);
  }, [animateText, resetAnimation, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    resetAnimation();
  }, [resetAnimation, isMobile]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (activeAnimationRef.current) {
        activeAnimationRef.current.kill();
      }
    };
  }, []);

  const articleContent = {
    title: "Guide Étape par Étape",
    paragraphs: [
      "React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur. Développée par Facebook, elle permet de construire des applications web dynamiques et réactives grâce à une approche basée sur les composants.",
      "Prérequis : Avant de commencer, assurez-vous d'avoir Node.js et npm installés sur votre machine. Node.js inclut npm par défaut.",
      "Étape 1 : Créez un nouveau projet React en utilisant create-react-app avec la commande : npx create-react-app mon-app",
      "Étape 2 : Accédez au répertoire du projet avec : cd mon-app",
      "Étape 3 : Lancez le serveur de développement : npm start",
      "Étape 4 : Ouvrez votre navigateur et accédez à : http://localhost:3000",
      "Étape 5 : Commencez à modifier src/App.js pour personnaliser votre application",
      "Étape 6 : Pour construire votre application pour la production : npm run build",
      "Structure du Projet : Familiarisez-vous avec les dossiers src/ et public/",
      "Prochaines Étapes : Explorez la documentation officielle de React pour approfondir vos connaissances",
    ],
  };

  return (
    <section className={styles.container} id="installation">
      <h2 className={styles.titleh2}>Installation de React</h2>
      <article
        ref={articleRef}
        className={`${styles.article} ${isMobile ? styles.mobileArticle : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatedText 
          text={articleContent.title} 
          tag="h2" 
          className={styles.articleTitle}
          isMobile={isMobile}
        />
        <div className={styles.paragraphsContainer}>
          {articleContent.paragraphs.map((paragraph, index) => (
            <AnimatedText 
              key={index} 
              text={paragraph} 
              className={styles.paragraph}
              isMobile={isMobile}
            />
          ))}
        </div>
        {!isMobile && (
          <div className={styles.mouseOver}>Passer la souris dans le cadre</div>
        )}
      </article>
    </section>
  );
};

export default Installation;