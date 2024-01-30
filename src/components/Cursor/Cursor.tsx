"use client";

import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.scss";

import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 90 : 30;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isHovered]);

  const variants = {
    default: {
      x: mousePosition.x - size / 2,
      y: mousePosition.y - size / 2,
      width: size,
      height: size,
    },
  };
  return (
    <motion.div
      id="custom-cursor"
      className={styles.custom_cursor}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween", ease: "backOut" }}
    ></motion.div>
  );
};

export default Cursor;
