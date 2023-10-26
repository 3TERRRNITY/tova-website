"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/hero.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { IMAGES } from "../constants/constants";
import gsap from "gsap";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const firstContainer = useRef(null);
  const secondContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -105) {
      xPercent = 0;
    }
    gsap.set(firstContainer.current, { xPercent: xPercent });
    gsap.set(secondContainer.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };
  const brandsContainer = IMAGES.map(({ img, key }) => (
    <div className={styles.slider__item} key={key}>
      <img src={img} alt="brand" />
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.hero__text}>
          креатив - он как нейросеть главное правильно сформулировать запрос
        </div>
        <Header />
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={styles.slider__container} ref={firstContainer}>
            {brandsContainer}
          </div>
          <div
            className={styles.slider__container_duplicate}
            ref={secondContainer}
          >
            {brandsContainer}
          </div>
        </div>
      </div>
    </>
  );
}
