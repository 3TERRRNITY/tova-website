"use client";

import React from "react";
import styles from "../../styles/avivir.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NeonCircle from "../../components/NeonCircle/NeonCircle";
import { Separator } from "../../components/Separator/Separator";
import Lottie from "lottie-react";
import Logo from "../../../public/projects/avivir/animations/logo.json";
import Grid from "../../../public/projects/avivir/animations/grid.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
                className={styles.avivir__smm__images__slider}
              >
                <SwiperSlide
                  className={styles.avivir__smm__images__slider_slide}
                >
                  <img src="/projects/avivir/avivir_smm1.png" />
                </SwiperSlide>
                <SwiperSlide
                  className={styles.avivir__smm__images__slider_slide}
                >
                  <img src="/projects/avivir/avivir_smm2.png" />
                </SwiperSlide>
                <SwiperSlide
                  className={styles.avivir__smm__images__slider_slide}
                >
                  <img src="/projects/avivir/avivir_smm3.png" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.avivir__smm__imagesMobile}>
              <Swiper
                slideToClickedSlide={true}
                slidesPerView={"auto"}
                centeredSlides={true}
                loop={true}
                className={styles.avivir__smm__images__slider}
              >
                <SwiperSlide
                  className={styles.avivir__smm__images__slider_slide}
                >
                  <img src="/projects/avivir/avivir_smm1.png" />
                </SwiperSlide>
                <SwiperSlide
                  className={styles.avivir__smm__images__slider_slide}
                >
                  <img src="/projects/avivir/avivir_smm2.png" />
                </SwiperSlide>
                <SwiperSlide
                  className={styles.avivir__smm__images__slider_slide}
                >
                  <img src="/projects/avivir/avivir_smm3.png" />
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
              <div className={styles.avivir__information__card1}>
                <div className={styles.avivir__information__cardTexts}>
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
                </div>
              </div>

              <div className={styles.avivir__information__card2}>
                <div className={styles.avivir__information__cardTexts}>
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
                </div>
              </div>
              <div className={styles.avivir__information__card_big}>
                <div className={styles.avivir__information__cardTexts}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Avivir;
