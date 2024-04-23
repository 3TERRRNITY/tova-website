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
    "клиент / approval",
    "категория / брендинг, фирменный стиль",
    "дата / 2022",
  ];

  const team = [
    {
      position: "Руководитель проекта",
      name: "Михаил Василенко",
    },
    {
      position: "Директор по маркетингу",
      name: "Светлана Денисова",
    },
    {
      position: "Арт-директор",
      name: "Ирина Макарова",
    },
    {
      position: "Дизайнер",
      name: "Наталия Лазарева",
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
                    Компания Аппрувал специализируется на регистрации
                    лекарственных препаратов и медицинских изделий. С её помощью
                    было зарегистрировано более 400 лекарственных средств и
                    свыше 70 медицинских изделий. Аппрувал завоевал доверие
                    ведущих игроков отрасли, включая Johnson & Johnson, Акрихин,
                    ekuore и др. , благодаря своей экспертизе и надежности в
                    области регистрации.
                  </div>
                </div>
                <div
                  className={styles.approval__about__description__subtitle_big}
                >
                  Для Аппрувал мы разработали логотип и фирменный стиль,
                  акцентируя на их ключевой роли в области регистрации
                  медицинских препаратов и изделий. Разработанный нами фирменный
                  стиль подчеркивает их экспертность и обеспечивает надежное
                  визуальное представление компании, подкрепляя её репутацию в
                  индустрии.
                </div>
              </div>
            </div>
            <Separator />
            <div className={styles.approval__mainPage}>
              <div className={styles.approval__mainPage__info}>
                <div className={styles.approval__mainPage__info_title}>
                  разработка логотипа
                </div>
                <div className={styles.approval__mainPage__info_description}>
                  При разработке логотипа для Аппрувал, мы сосредоточились на
                  создании символа, который бы не только отличал бы компанию на
                  рынке, но и визуально передавал её суть. Выбор пал на
                  уникальное изображение, где буква "v" трансформирована в
                  галочку — международный символ одобрения, успеха и выполнения.
                  Этот знак подчеркивает основную миссию Аппрувал — обеспечение
                  успешной регистрации лекарственных препаратов и медицинских
                  изделий. Эта деталь логотипа является ярким напоминанием о
                  надежности и эффективности услуг компании, подкрепляя доверие
                  клиентов к её профессионализму.
                </div>
              </div>
              <div className={styles.approval__mainPage__image} />
              <div className={styles.approval__mainPage__imageMobile}>
                <img
                  src="/projects/approval/approval_mobile1.webp"
                  alt="image"
                  loading="lazy"
                />
                <img
                  src="/projects/approval/approval_mobile2.webp"
                  alt="image"
                  loading="lazy"
                />
                <img
                  src="/projects/approval/approval_mobile3.webp"
                  alt="image"
                  loading="lazy"
                />
                <img
                  src="/projects/approval/approval_mobile4.webp"
                  alt="image"
                  loading="lazy"
                />
              </div>
            </div>
            <Separator />
            <div className={styles.approval__mainPage}>
              <div className={styles.approval__mainPage__info}>
                <div className={styles.approval__mainPage__info_title}>
                  фирменные цвета
                </div>
              </div>
              <Lottie animationData={Palette} />
              <div className={styles.approval__mainPage__imageMobile}>
                <img
                  src="/projects/approval/approval_mobile5.webp"
                  alt="image"
                  loading="lazy"
                />
                <img
                  src="/projects/approval/approval_mobile6.webp"
                  alt="image"
                  loading="lazy"
                />
              </div>
              <div className={styles.approval__mainPage__images} />
            </div>
            <Separator />
            <div className={styles.approval__mainPage}>
              <div className={styles.approval__mainPage__info}>
                <div className={styles.approval__mainPage__info_title}>
                  Печатная продукция
                </div>
              </div>
              <div className={styles.approval__mainPage__imageMobile_cards}>
                <div
                  className={styles.approval__mainPage__imageMobile_cards_img1}
                >
                  <img
                    src="/projects/approval/approval_mobile7.webp"
                    alt="image"
                    loading="lazy"
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
                      loading="lazy"
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
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
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
