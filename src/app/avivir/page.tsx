"use client";

import React, { useState } from "react";
import styles from "../../styles/avivir.module.scss";
import aimiStyles from "../../styles/aimi.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NeonCircle from "../../components/NeonCircle/NeonCircle";

import Lottie from "lottie-react";
import Logo from "../../../public/projects/avivir/animations/logo.json";
import Grid from "../../../public/projects/avivir/animations/grid.json";
import Desktop from "../../../public/projects/avivir/animations/avivir_desktop.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { Autoplay } from "swiper";

const Avivir = () => {
  const aboutPoints = [
    "проект",
    "клиент / avivir",
    "категория / фирменный стиль / веб-дизайн, ux-ui, разработка, SMM",
    "дата / 2021 -  по наст. время",
  ];
  const aboutCards = [
    "веб-дизайн",
    "адаптивный дизайн",
    "фирменный стиль",
    "smm",
  ];
  const controls = useAnimation();
  // TODO: сделать в отдельном компоненте и убрать эту чушь
  const [isHoveredCard1, setIsHoveredCard1] = useState<boolean>(false);
  const [isHoveredCard2, setIsHoveredCard2] = useState<boolean>(false);
  const [isHoveredCard3, setIsHoveredCard3] = useState<boolean>(false);
  const handleHover1 = () => {
    controls.start({
      opacity: 1,
    });
    setIsHoveredCard1(true);
  };

  const handleUnhover1 = () => {
    controls.start({
      opacity: 0,
    });
    setIsHoveredCard1(false);
  };
  const handleHover2 = () => {
    controls.start({
      opacity: 1,
    });
    setIsHoveredCard2(true);
  };

  const handleUnhover2 = () => {
    controls.start({
      opacity: 0,
    });
    setIsHoveredCard2(false);
  };
  const handleHover3 = () => {
    controls.start({
      opacity: 1,
    });
    setIsHoveredCard3(true);
  };

  const handleUnhover3 = () => {
    controls.start({
      opacity: 0,
    });
    setIsHoveredCard3(false);
  };
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
      name: ["Полина Гунищева"],
    },
    {
      position: "Дизайнер",
      name: ["Наталия Лазарева"],
    },
    {
      position: "Копирайтер",
      name: ["Сергей Афанасьев"],
    },
    {
      position: "Команда разработки",
      name: ["Алексей Ларионов", "Дмитрий Авдеев", "Леонид Захваткин"],
    },
  ];

  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <Header />
        <div className={commonStyles.projectContainer}>
          <div className={styles.avivir__hero} />
          <div className={styles.avivir}>
            <div className={styles.avivir__about}>
              <div className={styles.avivir__about__circle}>
                <NeonCircle />
              </div>
              <div className={styles.avivir__about__head}>
                <div className={styles.avivir__about__head_title}>
                  О проекте
                </div>
                <div className={styles.avivir__about__head_subtitle}>
                  {aboutPoints.map((point, index) => (
                    <div
                      key={`${point}-${index}`}
                      className={styles.avivir__about__head_point}
                    >
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.avivir__about__description}>
                <div className={styles.avivir__about__description__subtitle}>
                  <div
                    className={
                      styles.avivir__about__description__subtitle_paragraph
                    }
                  >
                    Компания «Авивир» реализует проекты оснащения медицинских
                    организаций и фармацевтических производств оборудованием,
                    строительства объектов здравоохранения; занимается
                    поставками средств диагностики, лекарственных препаратов и
                    парафармацевтических товаров.
                  </div>
                </div>
                <div
                  className={styles.avivir__about__description__subtitle_big}
                >
                  В работе с Авивир мы полностью обновили бренд: разработали
                  новый логотип и провели глобальный ребрендинг. Кроме того, мы
                  создали современный и функциональный сайт, отражающий
                  обновленный имидж и деятельность компании.
                </div>
              </div>
              <div className={styles.avivir__about__cards}>
                {aboutCards.map((card, index) => (
                  <div
                    key={`${card}-${index}`}
                    className={styles.avivir__about__cards__card}
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.avivir__firm}>
              <div className={styles.avivir__firm__info}>
                <div className={styles.avivir__firm__info_title}>
                  Фирменный стиль
                </div>
                <div className={styles.avivir__firm__info_description}>
                  Мы освежили образ Авивир, представив две версии логотипа:
                  классический и сокращённый 'AV'. Элегантность сокращённой
                  версии заключается в симметричном дизайне букв 'A' и 'V',
                  которые сохраняют свою узнаваемость при любом повороте.
                </div>
              </div>
            </div>
            <Lottie animationData={Logo} />
            <Lottie animationData={Grid} />

            <div className={styles.avivir__information}>
              <div className={styles.avivir__information__cards}>
                <motion.div
                  className={styles.avivir__information__card1}
                  onHoverStart={handleHover1}
                  onHoverEnd={handleUnhover1}
                >
                  <div className={styles.avivir__information__card1_overflow} />
                  <motion.div
                    className={styles.avivir__information__cardTexts}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{
                      opacity: isHoveredCard1 ? 1 : 0,
                    }}
                  >
                    <div
                      className={styles.avivir__information__cardTexts_title}
                    >
                      avivir
                    </div>
                    <div
                      className={
                        styles.avivir__information__cardTexts_description
                      }
                    >
                      рекламные баннеры
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  onHoverStart={handleHover2}
                  onHoverEnd={handleUnhover2}
                  className={styles.avivir__information__card2}
                >
                  <div className={styles.avivir__information__card2_overflow} />
                  <motion.div
                    className={styles.avivir__information__cardTexts}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{
                      opacity: isHoveredCard2 ? 1 : 0,
                    }}
                  >
                    <div
                      className={styles.avivir__information__cardTexts_title}
                    >
                      avivir
                    </div>
                    <div
                      className={
                        styles.avivir__information__cardTexts_description
                      }
                    >
                      дизайн полиграфической продукции
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  onHoverStart={handleHover3}
                  onHoverEnd={handleUnhover3}
                  className={styles.avivir__information__card_big}
                >
                  <div
                    className={styles.avivir__information__card_big_overflow}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{
                      opacity: isHoveredCard3 ? 1 : 0,
                    }}
                    className={styles.avivir__information__cardTexts}
                  >
                    <div
                      className={styles.avivir__information__cardTexts_title}
                    >
                      avivir
                    </div>
                    <div
                      className={
                        styles.avivir__information__cardTexts_description
                      }
                    >
                      визитки
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className={styles.avivir__mainPage}>
              <div className={styles.avivir__mainPage__info}>
                <div className={styles.avivir__mainPage__info_title}>
                  дизайн главной страницы сайта
                </div>
                <div className={styles.avivir__mainPage__info_description}>
                  В создании дизайна главной страницы сайта компании мы
                  сосредоточились на четком представлении её деятельности.
                  Учитывая, что это визитная карточка компании, мы акцентировали
                  важные аспекты, обеспечив при этом простоту и интуитивность
                  навигации.
                </div>
              </div>
              <div className={styles.avivir__mainPage__image} />
              {/* <Lottie animationData={Desktop} style={{ width: "100%" }} /> */}
            </div>

            <div className={styles.avivir__adaptiveDesign}>
              <div className={styles.avivir__adaptiveDesign__circle}>
                <NeonCircle />
              </div>
              <div className={styles.avivir__adaptiveDesign__info}>
                <div className={styles.avivir__adaptiveDesign__info_title}>
                  адаптивный дизайн
                </div>
                <div
                  className={styles.avivir__adaptiveDesign__info_description}
                >
                  Адаптивный дизайн сайта эффектно сочетает функциональность и
                  удобство, отлично адаптируясь под любой размер экрана
                </div>
              </div>
              <div className={styles.avivir__adaptiveDesign__images}>
                {/* <div
                  className={styles.avivir__adaptiveDesign__images_image1}
                ></div>
                <div
                  className={styles.avivir__adaptiveDesign__images_image2}
                ></div>
                <div
                  className={styles.avivir__adaptiveDesign__images_image3}
                ></div> */}
              </div>
            </div>

            <div className={styles.avivir__smm}>
              <div className={styles.avivir__smm__info}>
                <div className={styles.avivir__smm__info_title}>smm</div>
                <div className={styles.avivir__smm__info_description}>
                  В течение двух лет мы эффективно управляем социальными сетями
                  Авивир, применяя креативные стратегии для увеличения аудитории
                  и укрепления имиджа бренда.
                </div>
              </div>

              <div className={styles.avivir__smm__circle}>
                <NeonCircle />
              </div>
              <div className={styles.avivir__smm__images}>
                <Swiper
                  slidesPerView={3}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className={styles.avivir__smm__images__slider}
                >
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel1.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel2.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel3.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel4.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel5.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel6.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel7.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel8.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel9.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel10.webp" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={styles.avivir__smm__imagesMobile}>
                <Swiper
                  slideToClickedSlide={true}
                  slidesPerView={"auto"}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop={true}
                  className={styles.avivir__smm__images__slider}
                >
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel1.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel2.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel3.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel4.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel5.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel6.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel7.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel8.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel9.webp" />
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.avivir__smm__images__slider_slide}
                  >
                    <img src="/projects/avivir/carousel/avivir-carousel10.webp" />
                  </SwiperSlide>
                </Swiper>
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
                      <div
                        className={aimiStyles.aimi__team_member_nameContainer}
                      >
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Avivir;
