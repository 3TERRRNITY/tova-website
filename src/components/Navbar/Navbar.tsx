"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import Button from "./Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav/Nav";

type Props = {};
const navbarHeight = `max-content`;
const navbarWidth = `30vw`;

const navbarHeightMobile = `370px`;
const navbarWidthMobile = `350px`;

const variants = {
  open: {
    width: navbarWidth,
    height: navbarHeight,
    top: "-20px",
    right: "-20px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};
const variantsMobile = {
  open: {
    width: navbarWidthMobile,
    height: navbarHeightMobile,
    top: "-20px",
    right: "-20px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};
const Navbar = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        event.target instanceof Node &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <>
      <div className={styles.header} ref={navbarRef}>
        <motion.div
          className={styles.header__menu}
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Nav closeMenu={() => setIsActive(false)} />}
          </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>

      <div className={styles.headerMobile}>
        <motion.div
          className={styles.headerMobile__menu}
          variants={variantsMobile}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Nav closeMenu={() => setIsActive(false)} />}
          </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
    </>
  );
};

export default Navbar;
