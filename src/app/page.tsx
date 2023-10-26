"use client";
import { useEffect, useState } from "react";
import styles from "../styles/hero.module.scss";
import Image from "next/image";
import { IMAGES } from "../constants/constants";

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
          <div className={styles.hero__text__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.hero__text__logo}>
            <Image src="/TOVA-logo.svg" alt="logo" fill />
          </div>
        </div>
        <div className={styles.hero__contact}>
          <div className={styles.hero__contact_href}>
            <a href="">связаться</a>
          </div>
          <div className={styles.hero__contact__description}>
            tova <br />
            про дизайн
          </div>
        </div>
        <div className={styles.hero__sliderContainer}>
          <div className={styles.hero__slider}>
            {IMAGES.map(({ img, key }) => (
              <div className={styles.hero__slider__item} key={key}>
                <Image
                  className={styles.hero__slider__item_img}
                  src={img}
                  alt="logo"
                  fill
                />
              </div>
            ))}
            {IMAGES.map(({ img, key }) => (
              <div className={styles.hero__slider__item} key={key}>
                <Image
                  className={styles.hero__slider__item_img}
                  src={img}
                  alt="logo"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
