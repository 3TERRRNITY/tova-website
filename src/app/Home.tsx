"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import styles from "../styles/hero.module.scss";
import commonStyles from "../styles/common.module.scss";
import { IMAGES, PROJECTS, SERVICES } from "../constants/constants";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  const firstContainer = useRef(null);
  const secondContainer = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstContainer.current, { xPercent: xPercent });
    gsap.set(secondContainer.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  const brandsContainer = IMAGES.map(({ img, key }) => (
    <div className={styles.slider__item} key={key}>
      <img src={img} alt="brand" />
    </div>
  ));

  return (
    <div className={commonStyles.mainPageBody}>
      <div className={styles.hero}>
        <div className={styles.hero__text}>
          креатив - он как нейросеть <br /> главное правильно <br />{" "}
          сформулировать запрос
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
      <div className={styles.services}>
        <div className={styles.services__title}>услуги</div>
        <div className={styles.services__serviceGrid}>
          {SERVICES.map((service) => (
            <div className={styles.services__card}>
              <div className={styles.services__card__info}>
                <div className={styles.services__card__info_title}>
                  {service.title}
                </div>
                <div className={styles.services__card__info_description}>
                  {service.description}
                </div>
              </div>
              <span className={styles.services__card__price}>
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projects}>
        {PROJECTS.map(
          ({
            img,
            description,
            title,
          }: {
            img: string;
            description: string;
            title: string;
          }) => (
            <Link key={title} href={title.toLowerCase()}>
              <Card image={img} title={title} description={description} />
            </Link>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
