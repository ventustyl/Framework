// Hero.tsx
'use client';

import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { heroFunctions } from './data/heroFunctions';
import { HeroFunction } from './types';
import style from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const setupGsapAnimations = useCallback(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Animations des éléments principaux
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.9, ease: 'back.out(1.7)' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const setupInfiniteScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const scrollGroups = scrollContainerRef.current.children;
    const scrollHeight = scrollContainerRef.current.scrollHeight / 2;

    gsap.to(scrollGroups, {
      y: -scrollHeight,
      duration: 20,
      ease: 'none',
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize(y => parseFloat(y) % scrollHeight)
      }
    });
  }, []);

  useEffect(() => {
    setupGsapAnimations();
    setupInfiniteScroll();
  }, [setupGsapAnimations, setupInfiniteScroll]);

  // Duplique les fonctions pour un défilement fluide
  const duplicatedFunctions = [...heroFunctions, ...heroFunctions];

  return (
    <div className={style.hero} ref={heroRef}>
      <div className={style.heroText}>
        <div className={style.reactLogo} aria-hidden="true" />
        <h1 className={style.heroTitle} ref={titleRef}>
          React
        </h1>
        <p className={style.heroSubtitle} ref={subtitleRef}>
          React, souvent appelé React.js, est une bibliothèque JavaScript
          open-source conçue par Facebook et utilisée par des millions de
          développeurs à travers le monde. Depuis sa création en 2013, elle est
          devenue un incontournable pour le développement d'interfaces
          utilisateur (UI) dynamiques, rapides et évolutives. Si vous recherchez
          une solution moderne et performante pour créer des applications web,
          React est un choix stratégique.
        </p>
        <button 
          className={style.heroButton} 
          ref={buttonRef}
          onClick={() => console.log('En savoir plus clicked')}
        >
          En savoir plus
        </button>
      </div>
      <div className={style.heroFunction}>
        <div className={style.scrollContainer} ref={scrollContainerRef}>
          <div className={style.scrollGroup}>
            {heroFunctions.map((func: HeroFunction, index: number) => (
              <div
                key={`group1-${func.name}-${index}`}
                className={style.functionCard}
                style={{ backgroundColor: func.color }}
              >
                {func.name}
              </div>
            ))}
          </div>
          <div className={style.scrollGroup}>
            {heroFunctions.map((func: HeroFunction, index: number) => (
              <div
                key={`group2-${func.name}-${index}`}
                className={style.functionCard}
                style={{ backgroundColor: func.color }}
              >
                {func.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;