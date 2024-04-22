"use client";

import styles from "../styles/hero.module.scss";
import commonStyles from "../styles/common.module.scss";
import { PROJECTS } from "../constants/constants";
import headerStyles from "../components/Header/Header.module.scss";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import Slider from "../components/Slider/Slider";
import { useEffect, useRef, useState } from "react";
import ServicesComponent from "../components/ServicesCard/ServicesCard";
import Form from "../components/Form/Form";
import { motion } from "framer-motion";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState("/telegram.png");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageUrl("/telegram_notification.png");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);

  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <div className={styles.hero}>
          <div className={styles.hero__video}>
            <video
              autoPlay
              muted={true}
              loop
              playsInline={true}
              ref={videoRef}
              preload="auto"
            >
              <source type="video/mp4" src="/main/tova.mp4" />
            </video>
          </div>
          <div className={styles.telegramLogo}>
            <a href="https://t.me/tova_agency" target="_blank">
              <motion.img
                src={imageUrl}
                alt="telegram"
                loading="lazy"
                whileHover={{ rotate: isHovered ? -45 : 0 }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              />
            </a>
          </div>
          <div className={styles.hero__text}>
            Воплощаем идеи в реальность – дизайн, продакшн, разработка и
            инновации, которые определяют завтра.
          </div>
          <div className={styles.hero__header}>
            <Link href={"/"} className={styles.hero__header_link}>
              <div className={styles.hero__header__logo}>
                <Image src="/TOVA-logo.svg" alt="logo" fill />
              </div>
            </Link>
            <Link
              href={"https://t.me/tova_agency"}
              target="_blank"
              className={styles.hero__header_link}
            >
              <div className={styles.hero__header__text}>
                tova
                <br />
                про дизайн
              </div>
            </Link>
          </div>
        </div>
        <Slider />
        <div className={styles.services}>
          <div className={styles.services__title}>услуги</div>

          <ServicesComponent />
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projects__title}>проекты</div>
          <div className={styles.projects}>
            {PROJECTS.map(
              ({
                img,
                description,
                title,
                year,
              }: {
                img: string;
                description: string;
                title: string;
                year: number;
              }) => (
                <Card
                  key={title}
                  href={title.toLowerCase()}
                  image={img}
                  title={title}
                  year={year}
                  description={description}
                />
              )
            )}
          </div>
          <Form />
        </div>

        <Footer />
      </div>
    </>
  );
}
