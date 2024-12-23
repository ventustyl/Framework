"use client";

import React from "react";
import styles from "./Footer.module.css";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.title}>À propos</h3>
          <p className={styles.description}>
            Découvrez les dernières actualités du framework React et restez
            informé des évolutions du monde numérique avec notre veille
            technologique.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Liens rapides</h3>
          <ul className={styles.links}>
            <li>
              <Link href="//#installation">Install</Link>
            </li>
            <li>
              <Link href="/#properties">Fonctions</Link>
            </li>
            <li>
              <Link href="/#news">News</Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Newsletter</h3>
          <div className={styles.newsletter}>
            <input
              type="email"
              placeholder="Votre email"
              className={styles.input}
            />
            <button className={styles.button}>S&apos;abonner</button>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Nous suivre</h3>
          <div className={styles.social}>
            <Link href="#" className={styles.socialLink}>
              <Github size={20} />
            </Link>

            <Link href="#" className={styles.socialLink}>
              <Linkedin size={20} />
            </Link>
            <Link href="#" className={styles.socialLink}>
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {currentYear} React & Eric Venturino
          </p>
          <div className={styles.legal}>
            <Link href="/">Politique de confidentialité</Link>
            <span className={styles.separator}>•</span>
            <Link href="/">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
