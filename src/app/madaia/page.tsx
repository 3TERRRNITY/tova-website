"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/madaia.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const page = () => {
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
  const team = [
    {
      position: "Руководитель проекта",
      name: ["Михаил Василенко"],
    },
    {
      position: "Директор по маркетингу",
      name: ["Анастасия Куренкова"],
    },
    {
      position: "Арт-директор",
      name: ["Мария Решетова"],
    },
    {
      position: "Дизайнер",
      name: ["Наталия Лазарева"],
    },
    {
      position: "Команда разработки",
      name: ["Валерия Юрьева", "Михаил Выдрин"],
    },
  ];
  return (
    <>
      <div className={commonStyles.madaiaPage}>
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
        <div className={styles.madaia}>
          <div className={styles.madaia__hero}>
            <img
              className={styles.madaia__hero_logo}
              src="/projects/madaia/madaia_logo-rotate.png"
              alt="madaia logo"
              loading="lazy"
            />
            <div className={styles.madaia__hero_photo} />
          </div>
          <div className={styles.madaia__info}>
            <div className={styles.madaia__info__title}>
              дизайн онлайн магазина
            </div>
            <div className={styles.madaia__info__title_mob}>о проекте</div>
            <img
              src="/projects/madaia/madaia_logo.png"
              alt="madaia logo"
              loading="lazy"
            />
            <div className={styles.madaia__info__paragraph}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая профессиональная
              теннисистка Майя Кацитадзе. Майю зажигает теннис, побуждает ее
              творить красоту, бренд Madaia - результат вдохновения.
            </div>
            <div className={styles.madaia__info__paragraph}>
              Миссия бренда - помочь каждой женщине создать комфортный и
              лаконичный гардероб. Нами движет женственность, минимализм в
              деталях и желание сделать ваш образ уникальным, где бы вы ни были:
              на прогулке с друзьями, в незабываемом путешествии или в теннисном
              корте.
            </div>
            <div className={styles.madaia__info__paragraph}>
              <b>Задача проекта:</b> разработать концепт эстетичного
              интернет-магазина с интуитивным администрированием для заказчика с
              возможностью самостоятельного изменения контента и с последующим
              сопровождением команды tova.
            </div>
          </div>
          <div className={styles.madaia__desktopDesign}>
            <img
              src="/projects/madaia/madaia1.webp"
              alt="desktop design"
              loading="lazy"
            />
          </div>
          <div className={styles.madaia__tabletDesign}>
            <img
              src="/projects/madaia/madaia2.webp"
              alt="tablet design"
              loading="lazy"
            />
          </div>
          <div className={styles.madaia__clothes}>
            <img
              src="/projects/madaia/madaia3.webp"
              alt="clothes"
              loading="lazy"
            />
            <img
              src="/projects/madaia/madaia4.webp"
              alt="clothes"
              loading="lazy"
            />
          </div>
          <div className={styles.madaia__mobileDesign}>
            <img
              src="/projects/madaia/madaia5.webp"
              alt="mobile design"
              loading="lazy"
            />
          </div>

          <div className={styles.madaia__team}>
            <div className={styles.madaia__team_title}>
              над проектом работали
            </div>
            <div className={styles.madaia__team_container}>
              {team.map(
                (
                  { position, name }: { position: string; name: string[] },
                  index
                ) => (
                  <div
                    className={styles.madaia__team_member}
                    key={`${position}-${index}`}
                  >
                    <div className={styles.madaia__team_member_position}>
                      {position}
                    </div>
                    <div className={styles.madaia__team_member_nameContainer}>
                      {name.map((n, index) => (
                        <div
                          className={styles.madaia__team_member_name}
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
        </div>
        <Footer white />
      </div>
    </>
  );
};

export default page;
