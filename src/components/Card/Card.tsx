import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/hero.module.scss";
import Link from "next/link";

export default function Card({
  title,
  description,
  animation = true,
  href,
  year,
  image,
  secondImage,
  isProject,
}: {
  title: string;
  description: string;
  animation?: boolean;
  href: string;
  year?: number;
  image: string;
  secondImage?: string;
  isProject?: boolean;
}) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [cardHeight, setCardHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const heightRef = useRef(null as null | HTMLDivElement);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize(); // вызовите это, чтобы установить начальное состояние

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = () => {
    if (animation && !isMobile) {
      controls.start({
        opacity: 1,
        x: 0,
      });
      setIsHovered(true);
    } else {
      setIsHovered(true);
    }
  };

  const handleUnhover = () => {
    if (!isMobile) {
      controls.start({
        opacity: 0,
        x: -100,
      });
    }
    setIsHovered(false);
  };

  useEffect(() => {
    setCardHeight(heightRef.current?.clientHeight ?? 0);
  }, [cardHeight]);

  if (isProject && isMobile) {
    return (
      <Link href={href} className={styles.projects__link}>
        <div
          className={styles.projects__card}
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
          ref={heightRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className={styles.projects__card__yearContainer_arrow}
            style={{ zIndex: "10", margin: "10px" }}
          >
            <Image src="/right-arrow.svg" alt="arrow" fill loading="lazy" />
          </div>
          <div
            className={styles.projects__card__yearContainer_year}
            style={{ zIndex: "10", padding: "10px" }}
          >
            {year}
          </div>
          <img
            className={styles.projects__card_bgImage}
            src={secondImage ? secondImage : image}
            alt="background image"
            loading="lazy"
          />
        </div>
      </Link>
    );
  }
  return (
    <Link href={href} className={styles.projects__link}>
      {isMobile ? (
        <div
          className={styles.projects__card}
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
          ref={heightRef}
        >
          <div className={styles.projects__card__startContainer}>
            {title.toLowerCase()}
          </div>
          <img
            className={styles.projects__card_bgImage}
            src={secondImage ? secondImage : image}
            alt="background image"
            loading="lazy"
          />
        </div>
      ) : (
        <motion.div
          className={styles.projects__card}
          onHoverStart={handleHover}
          onHoverEnd={handleUnhover}
          ref={heightRef}
        >
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.3 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -200,
            }}
            className={styles.projects__card__yearContainer}
          >
            <div className={styles.projects__card__yearContainer_arrow}>
              <Image src="/right-arrow.svg" alt="arrow" fill loading="lazy" />
            </div>
            <div className={styles.projects__card__yearContainer_year}>
              {year}
            </div>
          </motion.div>

          {!isProject && (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              animate={{
                opacity: isHovered ? 0 : 1,
              }}
              className={styles.projects__card__startContainer}
            >
              {title.toLowerCase()}
            </motion.div>
          )}
          <motion.img
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.7 : 1,
            }}
            className={styles.projects__card_bgImage}
            src={secondImage ? secondImage : image}
            alt="background image"
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.3 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 200,
            }}
            className={styles.projects__card__container}
          >
            {!isProject && (
            <motion.h2 className={styles.projects__card__title}>
              {title.toLowerCase()}
            </motion.h2>
            )}

            <motion.p className={styles.projects__card__description}>
              {description.toLowerCase()}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </Link>
  );
}
