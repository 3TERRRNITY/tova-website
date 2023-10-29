"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/hero.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { IMAGES, PROJECTS } from "../constants/constants";
import gsap from "gsap";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
function Card({ title, description }: { title: string; description: string }) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    controls.start({
      opacity: 1,
      x: 0,
    });
    setIsHovered(true);
  };

  const handleUnhover = () => {
    controls.start({
      opacity: 0,
      x: -100,
    });
    setIsHovered(false);
  };
  return (
    <motion.div
      className={styles.projects__card}
      onHoverStart={handleHover}
      onHoverEnd={handleUnhover}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.25 }}
        animate={controls}
        className={styles.projects__card__yearContainer}
      >
        <Image src="/right-arrow.svg" alt="arrow" width={41} height={21} />
        <div className="year">2023</div>
      </motion.div>
      <motion.div className={styles.projects__card__container}>
        <motion.h2
          className={styles.projects__card__title}
          initial={{ y: 0 }}
          transition={{ duration: 0.25 }}
          animate={{
            y: isHovered ? 200 : 0,
          }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.projects__card__description}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
export default function Home() {
  const firstContainer = useRef(null);
  const secondContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstContainer.current, { xPercent: xPercent });
    gsap.set(secondContainer.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
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
            <Card key={title} title={title} description={description} />
          )
        )}
      </div>
    </>
  );
}
