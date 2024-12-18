"use client"; // Indique que c'est un composant client

import { useState, useEffect } from "react";
import style from "./Navbar.module.css"; // Importation correcte du CSS module
import Image from "next/image";
import logo from "../../../../public/react_logo.svg";

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
        scroll ? style.navbarFixed : style.navbarAuto
      }`}
    >
      <ul className={style.navbarUl}>
        <li className={style.navbarLi}>
          <Image src={logo} alt="logo react" width={20} height={20} />
          React
        </li>
        <li className={style.navbarLi}>News</li>
        <li className={style.navbarLi}>Contact</li>
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
