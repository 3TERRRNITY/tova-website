"use client";

import React from "react";
import styles from "../../styles/frenchi.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cursor from "../../components/Cursor/Cursor";

const Frenchi = () => {
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
  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <Header />
        <div className={styles.frenchi__hero} />

        <div className={styles.frenchi__about}>
          <div className={styles.frenchi__about__head}>
            <div className={styles.frenchi__about__head_title}>О проекте</div>
            <div className={styles.frenchi__about__head_subtitle}>
              {aboutPoints.map((point) => (
                <div key={point} className={styles.frenchi__about__head_point}>
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
                Madaia – бренд одежды для повседневной <br /> жизни и спорта,
                идейным вдохновителем <br /> которого является бывшая
              </div>
              <div
                className={
                  styles.frenchi__about__description__subtitle_paragraph
                }
              >
                побуждает ее творить красоту, бренд Madaia <br /> - результат
                вдохновения. Madaia – <br />
                бренд одежды для повседневной жизни и спорта
              </div>
            </div>
            <div className={styles.frenchi__about__description__subtitle_big}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту, бренд Madaia - результат вдохновения. бренд одежды для
              повседневной жизни и спорта
            </div>
          </div>

          <div className={styles.frenchi__mainPage}>
            <div className={styles.frenchi__mainPage__info}>
              <div className={styles.frenchi__mainPage__info_title}>
                дизайн главной страницы сайта
              </div>
              <div className={styles.frenchi__mainPage__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
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
              <div className={styles.frenchi__adaptive__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
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

          <div className={styles.frenchi__team}>
            <div className={styles.frenchi__team_title}>
              Над проектом работали
            </div>
            {team.map((member) => (
              <React.Fragment key={member.name}>
                <div className={styles.frenchi__team__member}>
                  <div className={styles.frenchi__team__member_position}>
                    {member.position}
                  </div>
                  <div className={styles.frenchi__team__member_name}>
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

export default Frenchi;
