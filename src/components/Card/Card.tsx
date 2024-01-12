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
  image,
  secondImage,
}: {
  title: string;
  description: string;
  animation?: boolean;
  href: string;
  image: string;
  secondImage?: string;
}) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [cardHeight, setCardHeight] = useState<number>(0);
  const heightRef = useRef(null as null | HTMLDivElement);

  const handleHover = () => {
    if (animation) {
      controls.start({
        opacity: 1,
        x: 0,
      });
      setIsHovered(true);
    } else {
    }
  };

  const handleUnhover = () => {
    controls.start({
      opacity: 0,
      x: -100,
    });
    setIsHovered(false);
  };

  useEffect(() => {
    setCardHeight(heightRef.current?.clientHeight ?? 0);
  }, [cardHeight]);

  return (
    <Link href={href} className={styles.projects__link}>
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
            <Image src="/right-arrow.svg" alt="arrow" fill />
          </div>
          <div className="year">2023</div>
        </motion.div>

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
          <motion.h2 className={styles.projects__card__title}>
            {title.toLowerCase()}
          </motion.h2>
          <motion.p className={styles.projects__card__description}>
            {description.toLowerCase()}
          </motion.p>
        </motion.div>
      </motion.div>
    </Link>
  );
}
