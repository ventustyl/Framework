"use client";

import React, { useState, useEffect } from "react";
import styles from "./New.module.css";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async (search = "react js") => {
    setLoading(true);
    setError(null);

    // Vérifions d'abord si les variables d'environnement sont bien définies
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiUrl || !apiKey) {
      setError(
        "Les variables d'environnement API_URL ou API_KEY ne sont pas définies"
      );
      setLoading(false);
      return;
    }

    try {
      const url = `${apiUrl}?q=${encodeURIComponent(search)}&sortBy
=popularity&pageSize=3&apiKey=${apiKey}`;
      console.log("URL de la requête:", url); // Pour déboguer

      const response = await fetch(url);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Réponse de l'API:", errorData); // Pour déboguer
        throw new Error(
          `Erreur ${response.status}: ${
            errorData?.message || response.statusText
          }`
        );
      }

      const data = await response.json();

      if (!data.articles) {
        throw new Error("Format de réponse invalide");
      }

      setArticles(data.articles);
    } catch (err) {
      console.error("Erreur complète:", err); // Pour déboguer
      setError(
        err instanceof Error
          ? `Erreur: ${err.message}`
          : "Une erreur inattendue est survenue"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button onClick={() => fetchNews()} className={styles.retryButton}>
          Réessayer
        </button>
      </div>
    );
  }

  // Le reste du composant reste inchangé...
  return (
    <div className={styles.container} id="news">
      <h3 className={styles.titleh3}>News populaire </h3>
      {loading ? (
        <div className={styles.loading}>Chargement des actualités...</div>
      ) : (
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <article key={index} className={styles.card}>
              {article.urlToImage && (
                <div className={styles.imageContainer}>
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className={styles.image}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/api/placeholder/400/320";
                      target.alt = "Image non disponible";
                    }}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h2 className={styles.title}>{article.title}</h2>
                <p className={styles.meta}>
                  {article.author && `Par ${article.author} • `}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <p className={styles.description}>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Lire la suite
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
