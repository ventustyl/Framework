"use client";

import React, { useState, useEffect } from "react";
import styles from "./New.module.css";
import Link from "next/link";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
}

const News: React.FC = () => {
  // const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  //   const fetchNews = async (search = "react js") => {
  //     setLoading(true);
  //     setError(null);

  //     // Vérifions d'abord si les variables d'environnement sont bien définies
  //     const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  //     const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  //     if (!apiUrl || !apiKey) {
  //       setError(
  //         "Les variables d'environnement API_URL ou API_KEY ne sont pas définies"
  //       );
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const url = `${apiUrl}?q=${encodeURIComponent(search)}&sortBy
  // =popularity&pageSize=3&apiKey=${apiKey}`;
  //       console.log("URL de la requête:", url); // Pour déboguer

  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         const errorData = await response.json().catch(() => null);
  //         console.error("Réponse de l'API:", errorData); // Pour déboguer
  //         throw new Error(
  //           `Erreur ${response.status}: ${
  //             errorData?.message || response.statusText
  //           }`
  //         );
  //       }

  //       const data = await response.json();

  //       if (!data.articles) {
  //         throw new Error("Format de réponse invalide");
  //       }

  //       setArticles(data.articles);
  //     } catch (err) {
  //       console.error("Erreur complète:", err); // Pour déboguer
  //       setError(
  //         err instanceof Error
  //           ? `Erreur: ${err.message}`
  //           : "Une erreur inattendue est survenue"
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchNews();
  //   }, []);

  //   if (error) {
  //     return (
  //       <div className={styles.error}>
  //         <p>{error}</p>
  //         <button onClick={() => fetchNews()} className={styles.retryButton}>
  //           Réessayer
  //         </button>
  //       </div>
  //     );
  //   }

  // Le reste du composant reste inchangé...
  return (
    <div className={styles.container} id="news">
      <h3 className={styles.titleh3}>News populaire </h3>
      {loading ? (
        <div className={styles.loading}>Chargement des actualités...</div>
      ) : (
        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="https://infrequently.org/2024/11/if-not-react-then-what/spa-decision-tree.png"
                alt="If Not React, Then What?"
                className={styles.image}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/400/320";
                  target.alt = "Image non disponible";
                }}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>If Not React, Then What?</h2>
              <p className={styles.meta}>Par Alex Russell • 30/11/2024</p>
              <p className={styles.description}>
                Frameworkism is now the dominant creed of today's frontend
                discourse, and it's bullshit. We owe it to ourselves and to our
                users to reject dogma and embrace engineering as a discipline
              </p>
              <Link
                href="https://infrequently.org/2024/11/if-not-react-then-what/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Lire la suite
              </Link>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="https://repository-images.githubusercontent.com/111614342/6ea69980-729f-11ea-93f5-88eb53a9bfc6"
                alt="Boardgame.io: an engine for creating turn-based games using JavaScript"
                className={styles.image}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/400/320";
                  target.alt = "Image non disponible";
                }}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>
                Boardgame.io: an engine for creating turn-based games using
                JavaScript
              </h2>
              <p className={styles.meta}>Par boardgameio • 18/12/2024</p>
              <p className={styles.description}>
                State Management and Multiplayer Networking for Turn-Based Games
                - boardgameio/boardgame.io
              </p>
              <Link
                href="https://github.com/boardgameio/boardgame.io"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Lire la suite
              </Link>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="https://www.datocms-assets.com/205/1733237052-cover-astro.png?auto=format&fit=max&w=1200"
                alt="We switched from Next.js to Astro (and why it might interest you)"
                className={styles.image}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/400/320";
                  target.alt = "Image non disponible";
                }}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>
                We switched from Next.js to Astro (and why it might interest
                you)
              </h2>
              <p className={styles.meta}>03/12/2024</p>
              <p className={styles.description}>
                Follow the first article of a series in which we'll try to
                summarize our journey with Astro, sharing many cool...
              </p>
              <Link
                href="https://astro.build/blog/nextjs-to-astro"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Lire la suite
              </Link>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default News;
