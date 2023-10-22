"use client";
import { useEffect, useState } from "react";
import styles from "../styles/hero.module.scss";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div style={{ height: "100vh", backgroundColor: "#cac" }}></div>
      <div style={{ height: "100vh", backgroundColor: "#bfb" }}></div>
    </>
  );
}
