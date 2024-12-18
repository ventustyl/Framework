"use client"; // Indique que c'est un composant client

import { useState, useEffect } from "react";
import style from "./Navbar.module.css"; // Importation correcte du CSS module

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${style.navbar} ${
        scroll ? style.navbarFixed : style.navbarAuto
      }`}
    >
      <ul className={style.navbarUl}>
        <li className={style.navbarLi}>
          <span className={style.navbarSpan}>⚛️</span> {"<"}Framework{">"}
        </li>
        <li className={style.navbarLi}>News</li>
        <li className={style.navbarLi}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
