import React from "react";
import styles from "./Nav.module.scss";
import { LINKS, FOOTER_LINKS } from "./data";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavProps {
  closeMenu: () => void;
}
const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
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

const Nav = ({ closeMenu }: NavProps) => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__body}>
        {LINKS.map((link, i) => {
          return (
            <motion.div
              custom={i}
              variants={perspective}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.nav__linkContainer}
            >
              <Link href={link.href} onClick={closeMenu}>
                {link.title.toLowerCase()}
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className={styles.nav__footer}>
        <Link href={"https://t.me/tova_agency"} target="_blank">
          <motion.div
            custom={3}
            variants={slideIn}
            animate="enter"
            exit="exit"
            initial="initial"
            className={styles.nav__footer__tova}
          >
            tova <br /> про дизайн
          </motion.div>
        </Link>

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
              {link.title.toLowerCase()}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
