"use client";

import React, { useEffect } from "react";
import styles from "./Cursor.module.scss";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor") as HTMLElement;
    const links = document.querySelectorAll("a");

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX - 30, y: clientY - 30 });
    };

    const onMouseEnterLink = (e: MouseEvent) => {
      const link = e?.target;
      if (link) {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);
  return <div id="custom-cursor" className={styles.custom_cursor}></div>;
};

export default Cursor;
