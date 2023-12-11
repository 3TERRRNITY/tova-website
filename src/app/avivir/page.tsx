"use client";

import React, { useState } from "react";
import styles from "../../styles/avivir.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NeonCircle from "../../components/NeonCircle/NeonCircle";

import Lottie from "lottie-react";
import Logo from "../../../public/projects/avivir/animations/logo.json";
import Grid from "../../../public/projects/avivir/animations/grid.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { Autoplay } from "swiper";

const Avivir = () => {
  const aboutPoints = [
    "проект",
    "клиент / avivir",
    "категория / веб-дизайн, ux-ui",
    "дата / 2023",
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

  return (
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
              <div className={styles.avivir__about__head_title}>О проекте</div>
              <div className={styles.avivir__about__head_subtitle}>
                {aboutPoints.map((point) => (
                  <div key={point} className={styles.avivir__about__head_point}>
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
                  Madaia – бренд одежды для повседневной <br /> жизни и спорта,
                  идейным вдохновителем <br /> которого является бывшая
                </div>
                <div
                  className={
                    styles.avivir__about__description__subtitle_paragraph
                  }
                >
                  побуждает ее творить красоту, бренд Madaia <br /> - результат
                  вдохновения. Madaia – <br />
                  бренд одежды для повседневной жизни и спорта
                </div>
              </div>
              <div className={styles.avivir__about__description__subtitle_big}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту, бренд Madaia - результат вдохновения. бренд одежды для
                повседневной жизни и спорта
              </div>
            </div>
            <div className={styles.avivir__about__cards}>
              {aboutCards.map((card) => (
                <div key={card} className={styles.avivir__about__cards__card}>
                  {card}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.avivir__mainPage}>
            <div className={styles.avivir__mainPage__info}>
              <div className={styles.avivir__mainPage__info_title}>
                дизайн главной страницы сайта
              </div>
              <div className={styles.avivir__mainPage__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
            <div className={styles.avivir__mainPage__image} />
          </div>

          <div className={styles.avivir__adaptiveDesign}>
            <div className={styles.avivir__adaptiveDesign__circle}>
              <NeonCircle />
            </div>
            <div className={styles.avivir__adaptiveDesign__info}>
              <div className={styles.avivir__adaptiveDesign__info_title}>
                адаптивный дизайн
              </div>
              <div className={styles.avivir__adaptiveDesign__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
            <div className={styles.avivir__adaptiveDesign__images}>
              <div
                className={styles.avivir__adaptiveDesign__images_image1}
              ></div>
              <div
                className={styles.avivir__adaptiveDesign__images_image2}
              ></div>
              <div
                className={styles.avivir__adaptiveDesign__images_image3}
              ></div>
            </div>
          </div>

          <div className={styles.avivir__smm}>
            <div className={styles.avivir__smm__info}>
              <div className={styles.avivir__smm__info_title}>smm</div>
              <div className={styles.avivir__smm__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
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

          <div className={styles.avivir__firm}>
            <div className={styles.avivir__firm__info}>
              <div className={styles.avivir__firm__info_title}>
                Фирменный стиль
              </div>
              <div className={styles.avivir__firm__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
          </div>
          <Lottie animationData={Logo} />
          <Lottie animationData={Grid} />

          <div className={styles.avivir__information}>
            <div className={styles.avivir__information__info}>
              <div className={styles.avivir__information__info_title}>
                Фирменный стиль
              </div>
              <div className={styles.avivir__information__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
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
                  <div className={styles.avivir__information__cardTexts_title}>
                    avivir
                  </div>
                  <div
                    className={
                      styles.avivir__information__cardTexts_description
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet illo consequatur laudantium vero dolor accusamus
                    fugiat dolores asperiores aut fugit sit dolore distinctio,
                    aliquid saepe incidunt excepturi iusto qui. Velit.
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
                  <div className={styles.avivir__information__cardTexts_title}>
                    avivir
                  </div>
                  <div
                    className={
                      styles.avivir__information__cardTexts_description
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet illo consequatur laudantium vero dolor accusamus
                    fugiat dolores asperiores aut fugit sit dolore distinctio,
                    aliquid saepe incidunt excepturi iusto qui. Velit.
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
                  <div className={styles.avivir__information__cardTexts_title}>
                    avivir
                  </div>
                  <div
                    className={
                      styles.avivir__information__cardTexts_description
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet illo consequatur laudantium vero dolor accusamus
                    fugiat dolores asperiores aut fugit sit dolore distinctio,
                    aliquid saepe incidunt excepturi iusto qui. Velit.
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Avivir;
