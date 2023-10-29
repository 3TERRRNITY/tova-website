"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/hero.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { IMAGES, PROJECTS } from "../constants/constants";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const cardVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    hover: {
      opacity: 1,
      y: 20,
    },
  };

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
            <motion.div
              className="card"
              initial="initial"
              whileHover="hover"
              variants={cardVariants}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.h2>{title}</motion.h2>
              <AnimatePresence>
                {isHovered && (
                  <motion.p
                    key="description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {description}
                  </motion.p>
                )}
              </AnimatePresence>
              {isHovered && (
                <motion.div className="arrow-year">
                  <Image
                    src="/right-arrow.svg"
                    alt="arrow"
                    width={41}
                    height={21}
                  />
                  <div className="year">2023</div>
                </motion.div>
              )}
            </motion.div>
          )
        )}
      </div>
    </>
  );
}
