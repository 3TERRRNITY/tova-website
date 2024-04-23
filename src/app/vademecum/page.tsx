"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/vademecum.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Lottie from "lottie-react";
import Palette from "../../../public/projects/vademkum/animations/palette.json";
import { Separator } from "../../components/Separator/Separator";
import { motion } from "framer-motion";

const Vademecum = () => {
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

  const aboutPoints = [
    "проект",
    "клиент / vademecum",
    "категория / фирменный стиль, веб-дизайн, ux-ui",
    "дата / 2019",
  ];

  const team = [
    {
      position: "Руководитель проекта",
      name: "Григорий Марков ",
    },
    {
      position: "Директор по маркетингу",
      name: "Светлана Денисова",
    },
    {
      position: "Арт-директор",
      name: "Леонид Станько",
    },
    {
      position: "Дизайнер",
      name: "Кира Рубинская",
    },
  ];
  const aboutCards = ["исследование", "user fow", "дизайн", "разработка"];
  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <Header />
        <div className={styles.vademecum__hero} />
        <div className={commonStyles.telegramLogo}>
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
        <div className={styles.vademecum__about}>
          <div className={styles.vademecum__about__head}>
            <div className={styles.vademecum__about__head_title}>О проекте</div>
            <div className={styles.vademecum__about__head_subtitle}>
              {aboutPoints.map((point, index) => (
                <div
                  key={`${point}-${index}`}
                  className={styles.vademecum__about__head_point}
                >
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
                вадемекум занимает уникальное место как ведущее деловое издание,
                целиком посвященное сектору здравоохранения. Это ключевой ресурс
                для специалистов отрасли, предоставляющий не только актуальные
                новости, но и глубокий анализ, а также экспертные оценки
                последних тенденций и инноваций в медицине.
              </div>
            </div>
            <div className={styles.vademecum__about__description__subtitle_big}>
              для Вадемекума мы разработали сайт, уделяя особое внимание
              пожеланиям основателя компании. Стремясь сохранить его видение, мы
              не стали радикально менять концепцию, а скорее адаптировали её к
              современным требованиям интернет-пространства. Основатель, ярый
              сторонник традиционного подхода, желал, чтобы сайт сохранял дух и
              атмосферу печатной газеты, что стало ключевым аспектом нашей
              работы.
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
              {aboutCards.map((card, index) => (
                <div
                  key={`${card}-${index}`}
                  className={styles.vademecum__mainPage__card}
                >
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
          </div>
        </div>
        <div className={styles.vademecum__mainPage__image}>
          <img
            src="/projects/vademkum/vademecum_main.png"
            alt="main-page"
            className={styles.vademecum__mainPage__image_img}
            loading="lazy"
          />
        </div>
        <div className={styles.vademecum__about}>
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
            {team.map((member, index) => (
              <React.Fragment key={`${member.name}-${index}`}>
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
    </>
  );
};

export default Vademecum;
