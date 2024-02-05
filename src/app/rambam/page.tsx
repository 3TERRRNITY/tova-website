"use client";

import React, { useEffect, useRef } from "react";
import styles from "../../styles/rambam.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Footer from "../../components/Footer/Footer";
import { Separator } from "../../components/Separator/Separator";
import Header from "../../components/Header/Header";
import Lottie from "lottie-react";
import Logo from "../../../public/projects/rambam/animation/logo.json";
import Cursor from "../../components/Cursor/Cursor";
const page = () => {
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);

  return (
    <>
      <div className={commonStyles.otherPageBody}>
        <Header white />
        <div className={styles.rambam__hero}>
          <video autoPlay muted={true} playsInline={true} ref={videoRef}>
            <source type="video/mp4" src="/projects/rambam/rambam_main.mp4" />
          </video>
        </div>
        <div className={styles.rambam__hero_mob}>
          <video autoPlay muted={true} playsInline={true} ref={videoRef}>
            <source type="video/mp4" src="/projects/rambam/rambam_mob.mp4" />
          </video>
        </div>
        <div className={styles.rambam}>
          <div className={styles.rambam__about}>
            <div className={styles.rambam__about__head}>
              <div className={styles.rambam__about__head_title}>О проекте</div>
              <div className={styles.rambam__about__head_subtitle}>
                {aboutPoints.map((point, index) => (
                  <div
                    key={`${point}-${index}`}
                    className={styles.rambam__about__head_point}
                  >
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.rambam__about__description}>
              <div className={styles.rambam__about__description__subtitle}>
                <div
                  className={
                    styles.rambam__about__description__subtitle_paragraph
                  }
                >
                  Madaia – бренд одежды для повседневной <br /> жизни и спорта,
                  идейным вдохновителем <br /> которого является бывшая
                </div>
                <div
                  className={
                    styles.rambam__about__description__subtitle_paragraph
                  }
                >
                  побуждает ее творить красоту, бренд Madaia <br /> - результат
                  вдохновения. Madaia – <br />
                  бренд одежды для повседневной жизни и спорта
                </div>
              </div>
              <div className={styles.rambam__about__description__subtitle_big}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту, бренд Madaia - результат вдохновения. бренд одежды для
                повседневной жизни и спорта
              </div>
            </div>
          </div>
          <Separator />
          <div className={styles.rambam__mainPage}>
            <div className={styles.rambam__mainPage__info}>
              <div className={styles.rambam__mainPage__info_title}>
                дизайн главной страницы сайта
              </div>
              <div className={styles.rambam__mainPage__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
            <Lottie animationData={Logo} />
          </div>
          <Separator />
          <div className={styles.rambam__mainPage}>
            <div className={styles.rambam__mainPage__info}>
              <div className={styles.rambam__mainPage__info_description}>
                Существует 3 основных варианта логотипа: темно-зеленый на белом,
                белый на темно-зеленом, светло-зеленом или другом контрастном
                фоне и светло-зеленый логотип на белом фоне.
              </div>
              <div className={styles.rambam__mainPage__info_description}>
                В случаях, когда невозможно использовать <br />
                цветную версию логотипа, необходимо использовать черно-белую
                версию.
              </div>
            </div>

            <div className={styles.rambam__mainPage__images} />
          </div>
          <Separator />
          <div className={styles.rambam__mainPage}>
            <div className={styles.rambam__mainPage__info}>
              <div className={styles.rambam__mainPage__info_title}>
                Неправильное использование логотипа
              </div>
              <div className={styles.rambam__mainPage__info_description}>
                Основные принципы использования логотипа компании заключаются в
                том, чтобы все варианты оставались неизменными и максимально
                читабельными. Ниже приведены неправильные варианты
                использования.
              </div>
            </div>

            <div className={styles.rambam__mainPage__logos} />
          </div>
          <Separator />
          <div className={styles.rambam__mainPage}>
            <div className={styles.rambam__mainPage__info}>
              <div className={styles.rambam__mainPage__info_title}>
                Характеристики цвета
              </div>
              <div className={styles.rambam__mainPage__info_description}>
                Дополнительные цвета. <br /> В исключительных случаях можно
                использовать оттенки основных цветов при прозрачности 80-20
                <span>%</span>.
              </div>
            </div>
            <div className={styles.rambam__mainPage__colors}>
              <img
                src="/projects/rambam/rambam3.webp"
                alt="colors"
                className={styles.rambam__mainPage__colors_img1}
              />
              <img
                src="/projects/rambam/rambam4.png"
                alt="colors"
                className={styles.rambam__mainPage__colors_img2}
              />
            </div>
          </div>
          <Separator />
          <div className={styles.rambam__mainPage}>
            <div className={styles.rambam__mainPage__info}>
              <div className={styles.rambam__mainPage__info_title}>
                Типография
              </div>
              <div className={styles.rambam__mainPage__info_description}>
                Фирменный шрифт компании — IBM Plex Sans. IBM Plex Sans Regular
                можно использовать для основного текста. IBM Plex Sans Bold
                можно использовать в заголовках и подзаголовках, когда требуется
                более сильный акцент.
              </div>
            </div>
            <div className={styles.rambam__mainPage__typography}>
              <img
                src="/projects/rambam/rambam5.png"
                alt="colors"
                className={styles.rambam__mainPage__typography_img1}
              />
              <img
                src="/projects/rambam/rambam6.png"
                alt="colors"
                className={styles.rambam__mainPage__typography_img2}
              />
            </div>
          </div>
          <Separator />
          <div className={styles.rambam__mainPage}>
            <div className={styles.rambam__mainPage__info}>
              <div className={styles.rambam__mainPage__info_title}>
                Фирменные носители
              </div>
              <div className={styles.rambam__mainPage__info_description}>
                Фирменный шрифт компании — IBM Plex Sans. IBM Plex Sans Regular
                можно использовать для основного текста. IBM Plex Sans Bold
                можно использовать в заголовках и подзаголовках, когда требуется
                более сильный акцент.
              </div>
            </div>
            <div className={styles.rambam__mainPage__firm}>
              <img
                src="/projects/rambam/rambam7.png"
                alt="colors"
                className={styles.rambam__mainPage__firm_img1}
              />
              <img
                src="/projects/rambam/rambam8.png"
                alt="colors"
                className={styles.rambam__mainPage__firm_img2}
              />
            </div>
          </div>

          <div className={styles.rambam__team}>
            <div className={styles.rambam__team_title}>
              Над проектом работали
            </div>
            {team.map((member, index) => (
              <React.Fragment key={`${member.name}-${index}`}>
                <div className={styles.rambam__team__member}>
                  <div className={styles.rambam__team__member_position}>
                    {member.position}
                  </div>
                  <div className={styles.rambam__team__member_name}>
                    {member.name}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <Footer white />
      </div>
    </>
  );
};

export default page;
