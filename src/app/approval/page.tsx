"use client";

import React from "react";
import styles from "../../styles/approval.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Footer from "../../components/Footer/Footer";
import { Separator } from "../../components/Separator/Separator";
import Header from "../../components/Header/Header";
import Lottie from "lottie-react";
import Palette from "../../../public/projects/approval/animations/palette-approval.json";

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
  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <div className={commonStyles.otherPageBody}>
          <Header white />

          <div className={styles.approval__hero} />
          <div className={styles.approval}>
            <div className={styles.approval__about}>
              <div className={styles.approval__about__head}>
                <div className={styles.approval__about__head_title}>
                  О проекте
                </div>
                <div className={styles.approval__about__head_subtitle}>
                  {aboutPoints.map((point, index) => (
                    <div
                      key={`${point}-${index}`}
                      className={styles.approval__about__head_point}
                    >
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.approval__about__description}>
                <div className={styles.approval__about__description__subtitle}>
                  <div
                    className={
                      styles.approval__about__description__subtitle_paragraph
                    }
                  >
                    Madaia – бренд одежды для повседневной <br /> жизни и
                    спорта, идейным вдохновителем <br /> которого является
                    бывшая
                  </div>
                  <div
                    className={
                      styles.approval__about__description__subtitle_paragraph
                    }
                  >
                    побуждает ее творить красоту, бренд Madaia <br /> -
                    результат вдохновения. Madaia – <br />
                    бренд одежды для повседневной жизни и спорта
                  </div>
                </div>
                <div
                  className={styles.approval__about__description__subtitle_big}
                >
                  Madaia – бренд одежды для повседневной жизни и спорта, идейным
                  вдохновителем которого является бывшая побуждает ее творить
                  красоту, бренд Madaia - результат вдохновения. бренд одежды
                  для повседневной жизни и спорта
                </div>
              </div>
            </div>
            <Separator />
            <div className={styles.approval__mainPage}>
              <div className={styles.approval__mainPage__info}>
                <div className={styles.approval__mainPage__info_title}>
                  дизайн главной страницы сайта
                </div>
                <div className={styles.approval__mainPage__info_description}>
                  Madaia – бренд одежды для повседневной жизни и спорта, идейным
                  вдохновителем которого является бывшая побуждает ее творить
                  красоту
                </div>
              </div>
              <div className={styles.approval__mainPage__image} />
              <div className={styles.approval__mainPage__imageMobile}>
                <img
                  src="/projects/approval/approval_mobile1.webp"
                  alt="image"
                />
                <img
                  src="/projects/approval/approval_mobile2.webp"
                  alt="image"
                />
                <img
                  src="/projects/approval/approval_mobile3.webp"
                  alt="image"
                />
                <img
                  src="/projects/approval/approval_mobile4.webp"
                  alt="image"
                />
              </div>
            </div>
            <Separator />
            <div className={styles.approval__mainPage}>
              <div className={styles.approval__mainPage__info}>
                <div className={styles.approval__mainPage__info_title}>
                  дизайн главной страницы сайта
                </div>
                <div className={styles.approval__mainPage__info_description}>
                  Madaia – бренд одежды для повседневной жизни и спорта, идейным
                  вдохновителем которого является бывшая побуждает ее творить
                  красоту
                </div>
              </div>
              <Lottie animationData={Palette} />
              <div className={styles.approval__mainPage__imageMobile}>
                <img
                  src="/projects/approval/approval_mobile5.webp"
                  alt="image"
                />
                <img
                  src="/projects/approval/approval_mobile6.webp"
                  alt="image"
                />
              </div>
              <div className={styles.approval__mainPage__images} />
            </div>
            <Separator />
            <div className={styles.approval__mainPage}>
              <div className={styles.approval__mainPage__info}>
                <div className={styles.approval__mainPage__info_title}>
                  дизайн главной страницы сайта
                </div>
                <div className={styles.approval__mainPage__info_description}>
                  Madaia – бренд одежды для повседневной жизни и спорта, идейным
                  вдохновителем которого является бывшая побуждает ее творить
                  красоту
                </div>
              </div>
              <div className={styles.approval__mainPage__imageMobile_cards}>
                <div
                  className={styles.approval__mainPage__imageMobile_cards_img1}
                >
                  <img
                    src="/projects/approval/approval_mobile7.webp"
                    alt="image"
                  />
                </div>

                <div
                  className={styles.approval__mainPage__imageMobile_cards_img23}
                >
                  <div
                    className={
                      styles.approval__mainPage__imageMobile_cards_img2
                    }
                  >
                    <img
                      src="/projects/approval/approval_mobile8.webp"
                      alt="image"
                    />
                  </div>

                  <div
                    className={
                      styles.approval__mainPage__imageMobile_cards_img3
                    }
                  >
                    <img
                      src="/projects/approval/approval_mobile9.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              {/* <div className={styles.approval__mainPage__cards} /> */}
            </div>

            <div className={styles.approval__team}>
              <div className={styles.approval__team_title}>
                Над проектом работали
              </div>
              {team.map((member, index) => (
                <React.Fragment key={`${member.name}-${index}`}>
                  <div className={styles.approval__team__member}>
                    <div className={styles.approval__team__member_position}>
                      {member.position}
                    </div>
                    <div className={styles.approval__team__member_name}>
                      {member.name}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
