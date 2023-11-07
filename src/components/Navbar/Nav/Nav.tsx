import React from "react";
import styles from "./Nav.module.scss";
import { LINKS, FOOTER_LINKS } from "./data";
import Link from "next/link";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__body}>
        {LINKS.map((link, i) => {
          return (
            <div key={i} className={styles.nav__linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className={styles.nav__footer}>
        {FOOTER_LINKS.map((link, i) => {
          return (
            <motion.a
              key={`f_${i}`}
              href={link.href}
              custom={i}
              variants={slideIn}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
