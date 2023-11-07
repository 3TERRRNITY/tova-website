"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Button from "./Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav/Nav";

type Props = {};

const variants = {
  open: {
    width: 480,
    height: 650,
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

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.header__menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Navbar;
