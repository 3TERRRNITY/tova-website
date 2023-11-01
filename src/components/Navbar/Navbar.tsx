"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [navbarTopVisible, setNavbarTopVisible] = useState(false);
  const navbarTopRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbarTop = () => {
    setNavbarTopVisible(!navbarTopVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarTopRef.current &&
        !navbarTopRef.current.contains(event.target as Node)
      ) {
        setNavbarTopVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.navbar}>
      <div
        ref={navbarTopRef}
        className={`${styles.navbar__top} ${
          navbarTopVisible ? styles.active : ""
        }`}
      >
        <div className={styles.navbar__top__moreLinks}>
          <div className={styles.navbar__top__col}>
            <div className={styles.navbar__top__link}>
              <Link href="/about">о нас</Link>
            </div>
            <div className={styles.navbar__top__link}>
              <Link href="/services">услуги</Link>
            </div>
            <div className={styles.navbar__top__link}>
              <Link href="/projects">проекты</Link>
            </div>
            <div className={styles.navbar__top__link}>
              <Link href="/contacts">контакты</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navbar__bottom} ref={navbarTopRef}>
        <div className={styles.navbar__bottom__home} onClick={toggleNavbarTop}>
          <div className={styles.navbar__bottom__hamburger}>
            <Image src="/burger.svg" alt="burger" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
