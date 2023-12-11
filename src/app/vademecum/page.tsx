"use client";

import React from "react";
import styles from "../../styles/vademecum.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Lottie from "lottie-react";
import Palette from "../../../public/projects/vademkum/animations/palette.json";
import Image from "next/image";
import { Separator } from "../../components/Separator/Separator";

const Vademecum = () => {
  const aboutPoints = [
    "проект",
    "клиент / avivir",
    "категория / веб-дизайн, ux-ui",
    "дата / 2023",
  ];

  const team = [
    {
      position: "Руководитель проекта",
      name: "Анастасия Куренкова",
    },
    {
      position: "Арт-директор",
      name: "Мария Решетова",
    },
    {
      position: "Дизайнер",
      name: "Наталия Лазарева",
    },
    {
      position: "Команда разработки",
      name: "Александр Рязанов",
    },
  ];
  const aboutCards = ["исследование", "user fow", "дизайн", "разработка"];
  return (
    <div className={commonStyles.mainPageBody}>
      <Header />
      <div className={styles.vademecum__hero} />

      <div className={styles.vademecum__about}>
        <div className={styles.vademecum__about__head}>
          <div className={styles.vademecum__about__head_title}>О проекте</div>
          <div className={styles.vademecum__about__head_subtitle}>
            {aboutPoints.map((point) => (
              <div key={point} className={styles.vademecum__about__head_point}>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.vademecum__about__description}>
          <div className={styles.vademecum__about__description__subtitle}>
            <div
              className={
                styles.vademecum__about__description__subtitle_paragraph
              }
            >
              Madaia – бренд одежды для повседневной <br /> жизни и спорта,
              идейным вдохновителем <br /> которого является бывшая
            </div>
            <div
              className={
                styles.vademecum__about__description__subtitle_paragraph
              }
            >
              побуждает ее творить красоту, бренд Madaia <br /> - результат
              вдохновения. Madaia – <br />
              бренд одежды для повседневной жизни и спорта
            </div>
          </div>
          <div className={styles.vademecum__about__description__subtitle_big}>
            Madaia – бренд одежды для повседневной жизни и спорта, идейным
            вдохновителем которого является бывшая побуждает ее творить красоту,
            бренд Madaia - результат вдохновения. бренд одежды для повседневной
            жизни и спорта
          </div>
        </div>
        <Separator />
        <div className={styles.vademecum__mainPage}>
          <div className={styles.vademecum__mainPage__info}>
            <div className={styles.vademecum__mainPage__info_title}>
              дизайн главной страницы сайта
            </div>
            <div className={styles.vademecum__mainPage__info_description}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту
            </div>
          </div>
          <Lottie animationData={Palette} loop />
          <div className={styles.vademecum__mainPage__cards}>
            {aboutCards.map((card) => (
              <div key={card} className={styles.vademecum__mainPage__card}>
                {card}
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className={styles.vademecum__mainPage}>
          <div className={styles.vademecum__mainPage__info}>
            <div className={styles.vademecum__mainPage__info_title}>
              дизайн главной страницы сайта
            </div>
            <div className={styles.vademecum__mainPage__info_description}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту
            </div>
          </div>
          <div className={styles.vademecum__mainPage__image}>
            <Image
              src="/projects/vademkum/vademcum-mainPage.webp"
              alt="main-page"
              fill
              className={styles.vademecum__mainPage__image_img}
            />
          </div>
        </div>
        <Separator />
        <div className={styles.vademecum__mainPage}>
          <div className={styles.vademecum__mainPage__info}>
            <div className={styles.vademecum__mainPage__info_title}>
              дизайн главной страницы сайта
            </div>
            <div className={styles.vademecum__mainPage__info_description}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту
            </div>
          </div>
          <div className={styles.vademecum__mainPage__imagesGrid}>
            <div className={styles.vademecum__mainPage__imagesGrid_img1} />
            <div className={styles.vademecum__mainPage__imagesGrid_img2} />
            <div className={styles.vademecum__mainPage__imagesGrid_img3} />
            <div className={styles.vademecum__mainPage__imagesGrid_img4} />
          </div>
        </div>
        <Separator />
        <div className={styles.vademecum__shop}>
          <div className={styles.vademecum__shop__info}>
            <div className={styles.vademecum__shop__info_title}>
              вадемекум шоп
            </div>
            <div className={styles.vademecum__shop__info_description}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту
            </div>
          </div>
          <div className={styles.vademecum__shop__imagesGrid}>
            <div className={styles.vademecum__shop__imagesGrid_img1} />
            <div className={styles.vademecum__shop__imagesGrid_img2} />
            <div className={styles.vademecum__shop__imagesGrid_img3} />
          </div>
        </div>

        <div className={styles.vademecum__team}>
          <div className={styles.vademecum__team_title}>
            Над проектом работали
          </div>
          {team.map((member) => (
            <React.Fragment key={member.name}>
              <div className={styles.vademecum__team__member}>
                <div className={styles.vademecum__team__member_position}>
                  {member.position}
                </div>
                <div className={styles.vademecum__team__member_name}>
                  {member.name}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vademecum;
