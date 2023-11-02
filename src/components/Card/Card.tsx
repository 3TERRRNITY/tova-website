import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/hero.module.scss";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [cardHeight, setCardHeight] = useState<number>(0);
  const heightRef = useRef(null as null | HTMLDivElement);

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

  useEffect(() => {
    setCardHeight(heightRef.current?.clientHeight ?? 0);
  }, [cardHeight]);
  return (
    <motion.div
      className={styles.projects__card}
      onHoverStart={handleHover}
      onHoverEnd={handleUnhover}
      ref={heightRef}
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
      <motion.div
        className={styles.projects__card__container}
        initial={{ y: 0 }}
        transition={{ duration: 0.25 }}
        animate={{
          y: isHovered ? cardHeight - 100 : 0,
        }}
      >
        <motion.h2 className={styles.projects__card__title}>{title}</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
