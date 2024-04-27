"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/frenchi.module.scss";
import aimiStyles from "../../styles/aimi.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const Frenchi = () => {
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
    "клиент / frenchi products",
    "категория / веб-дизайн, ux-ui",
    "дата / 2022",
  ];

  const team = [
    {
      position: "Руководитель проекта",
      name: ["Михаил Василенко"],
    },
    {
      position: "Директор по маркетингу",
      name: ["Светлана Денисова"],
    },
    {
      position: "Арт-директор",
      name: ["Ирина Макарова"],
    },
    {
      position: "Дизайнер",
      name: ["Наталия Лазарева"],
    },
    {
      position: "Команда разработки",
      name: ["Дмитрий Беляев", "Александр Рязанов"],
    },
  ];
  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <Header />
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
        <div className={styles.frenchi__hero} />

        <div className={styles.frenchi__about}>
          <div className={styles.frenchi__about__head}>
            <div className={styles.frenchi__about__head_title}>О проекте</div>
            <div className={styles.frenchi__about__head_subtitle}>
              {aboutPoints.map((point, index) => (
                <div
                  key={`${point}-${index}`}
                  className={styles.frenchi__about__head_point}
                >
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.frenchi__about__description}>
            <div className={styles.frenchi__about__description__subtitle}>
              <div
                className={
                  styles.frenchi__about__description__subtitle_paragraph
                }
              >
                Frenchi Products - эксперт в области ухода за натуральными
                ногтями. Их продукция уникально сочетает в себе активные,
                питательные и защитные компоненты, обеспечивая эффективное
                решение проблем с ломкостью и отслаиванием ногтей
              </div>
            </div>
            <div className={styles.frenchi__about__description__subtitle_big}>
              Для Frenchi Products, мы осуществили ребрендинг сайта,
              сфокусировавшись на улучшении навигации и удобства использования.
              Переструктурировав его для обслуживания как B2B, так и B2C
              клиентов, мы обеспечили, чтобы сайт отражал имиджевую роль
              компании. Это решение было основано на том факте, что бренд уже
              широко известен благодаря своей обширной сети дистрибуции и
              присутствию в аптеках, что делает основной задачей сайта
              поддержание и укрепление имиджа
            </div>
          </div>

          <div className={styles.frenchi__mainPage}>
            <div className={styles.frenchi__mainPage__info}>
              <div className={styles.frenchi__mainPage__info_title}>
                дизайн главной страницы сайта
              </div>
            </div>
            <div className={styles.frenchi__mainPage__images}>
              <div className={styles.frenchi__mainPage__images_img1} />
              <div className={styles.frenchi__mainPage__images_img2} />
              <div className={styles.frenchi__mainPage__images_img3} />
              <div className={styles.frenchi__mainPage__images_img4} />
              <div className={styles.frenchi__mainPage__images_img5} />
            </div>
          </div>

          <div className={styles.frenchi__adaptive}>
            <div className={styles.frenchi__adaptive__info}>
              <div className={styles.frenchi__adaptive__info_title}>
                дизайн главной страницы сайта
              </div>
            </div>
            <div className={styles.frenchi__adaptive__image} />
            <div className={styles.frenchi__adaptive__mobileImages}>
              <div className={styles.frenchi__adaptive__mobileImages_img1} />
              <div className={styles.frenchi__adaptive__mobileImages_img2} />
              <div className={styles.frenchi__adaptive__mobileImages_img3} />
            </div>
          </div>

          <div className={styles.frenchi__images}>
            <div className={styles.frenchi__images_img1} />
            <div className={styles.frenchi__images_img2} />
            <div className={styles.frenchi__images_img3} />
          </div>
        </div>
        <div className={aimiStyles.aimi__team}>
          <div className={aimiStyles.aimi__team_title}>
            над проектом работали
          </div>
          <div className={aimiStyles.aimi__team_container}>
            {team.map(
              (
                { position, name }: { position: string; name: string[] },
                index
              ) => (
                <div
                  className={aimiStyles.aimi__team_member}
                  key={`${position}-${index}`}
                >
                  <div className={aimiStyles.aimi__team_member_position}>
                    {position}
                  </div>
                  <div className={aimiStyles.aimi__team_member_nameContainer}>
                    {name.map((n, index) => (
                      <div
                        className={aimiStyles.aimi__team_member_name}
                        key={`${n}-${index}`}
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Frenchi;
