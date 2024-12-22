"use client"; // Indique que c'est un composant client

import { useState, useEffect } from "react";
import style from "./Navbar.module.css"; // Importation correcte du CSS module
import Image from "next/image";
import logo from "../../../../public/react_logo.svg";
import Link from "next/link";

interface NavbarProps {
  dark: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ dark, toggleDarkMode }) => {
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
        dark ? style.navbarLight : style.navbarDark
      } ${scroll ? style.navbarFixed : style.navbarAuto}`}
    >
      <ul className={style.navbarUl}>
        <li className={style.navbarLi}>
          <Image src={logo} alt="logo react" width={20} height={20} />
          <Link className={style.link} href="/#hero">
            React
          </Link>
        </li>
        <li className={style.navbarLi}>
          <Link className={style.link} href="/#installation">
            Install
          </Link>
        </li>
        <li className={style.navbarLi}>
          <Link className={style.link} href="/#properties">
            Fonctions
          </Link>
        </li>
        <Link className={style.link} href="/#news">
          <li className={style.navbarLi}>News</li>
        </Link>
        <li className={style.toogle} onClick={toggleDarkMode}>
          <input
            type="button"
            value={""}
            className={`${style.mode} ${dark ? style.ligth : style.dark}`}
          ></input>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
