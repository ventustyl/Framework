"use client";

import React from "react";
import styles from "./New.module.css";
import Link from "next/link";
import Image from "next/image";

const News: React.FC = () => {
  return (
    <div className={styles.container} id="news">
      <h3 className={styles.titleh3}>News populaire</h3>

      <div className={styles.grid}>
        {/* Premier article */}
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src="https://infrequently.org/2024/11/if-not-react-then-what/spa-decision-tree.png"
              alt="If Not React, Then What?"
              className={styles.image}
              width={400}
              height={300}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>If Not React, Then What?</h2>
            <p className={styles.meta}>Par Alex Russell • 30/11/2024</p>
            <p className={styles.description}>
              Frameworkism is now the dominant creed of today's frontend
              discourse, and it&apos;s bullshit. We owe it to ourselves and to
              our users to reject dogma and embrace engineering as a discipline.
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

        {/* Deuxième article */}
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src="https://repository-images.githubusercontent.com/111614342/6ea69980-729f-11ea-93f5-88eb53a9bfc6"
              alt="Boardgame.io: an engine for creating turn-based games using JavaScript"
              className={styles.image}
              width={400}
              height={300}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Boardgame.io: an engine for creating turn-based games using
              JavaScript
            </h2>
            <p className={styles.meta}>Par boardgameio • 18/12/2024</p>
            <p className={styles.description}>
              State Management and Multiplayer Networking for Turn-Based Games -
              boardgameio/boardgame.io
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

        {/* Troisième article */}
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src="https://www.datocms-assets.com/205/1733237052-cover-astro.png?auto=format&fit=max&w=1200"
              alt="We switched from Next.js to Astro (and why it might interest you)"
              className={styles.image}
              width={400}
              height={300}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              We switched from Next.js to Astro (and why it might interest you)
            </h2>
            <p className={styles.meta}>03/12/2024</p>
            <p className={styles.description}>
              Follow the first article of a series in which we&apos;ll try to
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
    </div>
  );
};

export default News;
