"use client";
import React from "react";
import styles from "../../styles/mindly.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Separator } from "../../components/Separator/Separator";
import Lottie from "lottie-react";
import Palette from "../../../public/projects/mindly/animations/palette-mindly.json";
import Logo from "../../../public/projects/mindly/animations/logo.json";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Mindly = () => {
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
      <div className={commonStyles.mindlyPage}>
        <Header white />

        <div className={styles.mindly__hero}>
          <img
            src="/projects/mindly/jars.webp"
            alt="mindly_jars"
            loading="lazy"
            className={styles.mindly__hero_element1}
          />
          <img
            src="/projects/mindly/mindly_hero2.webp"
            alt="mindly_leaf1"
            loading="lazy"
            className={styles.mindly__hero_element2}
          />
          <img
            src="/projects/mindly/mindly_hero3.webp"
            alt="mindly_leaf2"
            loading="lazy"
            className={styles.mindly__hero_element3}
          />
        </div>
        <div className={styles.mindly}>
          <div className={styles.mindly__about}>
            <div className={styles.mindly__about__head}>
              <div className={styles.mindly__about__head_title}>О проекте</div>
              <div className={styles.mindly__about__head_subtitle}>
                {aboutPoints.map((point, index) => (
                  <div
                    key={`${point}-${index}`}
                    className={styles.mindly__about__head_point}
                  >
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mindly__about__description}>
              <div className={styles.mindly__about__description__subtitle}>
                <div
                  className={
                    styles.mindly__about__description__subtitle_paragraph
                  }
                >
                  Madaia – бренд одежды для повседневной <br /> жизни и спорта,
                  идейным вдохновителем <br /> которого является бывшая
                </div>
                <div
                  className={
                    styles.mindly__about__description__subtitle_paragraph
                  }
                >
                  побуждает ее творить красоту, бренд Madaia <br /> - результат
                  вдохновения. Madaia – <br />
                  бренд одежды для повседневной жизни и спорта
                </div>
              </div>
              <div className={styles.mindly__about__description__subtitle_big}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту, бренд Madaia - результат вдохновения. бренд одежды для
                повседневной жизни и спорта
              </div>
            </div>
          </div>
          <Separator />
          <div className={styles.mindly__palette}>
            <div className={styles.mindly__palette__info}>
              <div className={styles.mindly__palette__info_title}>
                основная палитра бренда
              </div>
              <div className={styles.mindly__palette__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
            <Lottie animationData={Palette} />
          </div>
        </div>
        <div className={styles.mindly__palette__brandbookMobile} />
        <div className={styles.mindly__palette__brandbook}>
          <div className={styles.mindly__palette__brandbook_row1}>
            <img
              src="/projects/mindly/brandbook/1.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
            <img
              src="/projects/mindly/brandbook/2.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
            <img
              src="/projects/mindly/brandbook/3.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
          </div>

          <div className={styles.mindly__palette__brandbook_row2}>
            <img
              src="/projects/mindly/brandbook/4.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
            <img
              src="/projects/mindly/brandbook/5.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
            <img
              src="/projects/mindly/brandbook/6.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
          </div>

          <div className={styles.mindly__palette__brandbook_row3}>
            <img
              src="/projects/mindly/brandbook/7.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
            <img
              src="/projects/mindly/brandbook/8.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
            <img
              src="/projects/mindly/brandbook/9.webp"
              alt="brandbook-image"
              className={styles.mindly__palette__brandbook_image}
              loading="lazy"
            />
          </div>
          <img
            src="/projects/mindly/brandbook/leaf.webp"
            alt="mindly-leaf"
            className={styles.mindly__palette__brandbook_leaf}
            loading="lazy"
          />
        </div>

        <div className={styles.mindly}>
          <Lottie
            className={styles.mindly__palette__logo}
            animationData={Logo}
          />
          <Separator />
          <div className={styles.mindly__adaptive}>
            <div className={styles.mindly__adaptive__info}>
              <div className={styles.mindly__adaptive__info_title}>
                адаптивный дизайн
              </div>
              <div className={styles.mindly__adaptive__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
            <div className={styles.mindly__adaptive__mob}>
              <img
                src="/projects/mindly/mindly_mobile1.webp"
                alt="mindly-adaptive"
                loading="lazy"
              />
              <img
                src="/projects/mindly/mindly_mobile1.1.webp"
                alt="mindly-adaptive"
                loading="lazy"
              />
              <img
                src="/projects/mindly/mindly_mobile2.webp"
                alt="mindly-adaptive"
                loading="lazy"
              />
              <img
                src="/projects/mindly/mindly_mobile3.webp"
                alt="mindly-adaptive"
                loading="lazy"
              />
              <img
                src="/projects/mindly/mindly_mobile4.webp"
                alt="mindly-adaptive"
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.mindly__adaptive__images}>
            <img
              src="/projects/mindly/mindly-jars.webp"
              alt="mindly-adaptive"
              loading="lazy"
            />
            <img
              src="/projects/mindly/prod-2.webp"
              alt="mindly-adaptive"
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.mindly}>
          <Separator />

          <div className={styles.mindly__adaptive}>
            <div className={styles.mindly__adaptive__info}>
              <div className={styles.mindly__adaptive__info_title}>
                адаптивный дизайн
              </div>
              <div className={styles.mindly__adaptive__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
          </div>
        </div>

        <img
          src="/projects/mindly/mindly_adaptive.png"
          className={styles.mindly__adaptive__imagesMobile}
          loading="lazy"
        />
        <img
          src="/projects/mindly/mindly_adaptive_mob.webp"
          className={styles.mindly__adaptive__imagesMobile_small}
          loading="lazy"
        />
        <div className={styles.mindly}>
          <Separator />

          <div className={styles.mindly__adaptive}>
            <div className={styles.mindly__adaptive__info}>
              <div className={styles.mindly__adaptive__info_title}>
                адаптивный дизайн
              </div>
              <div className={styles.mindly__adaptive__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mindly__adaptive__imagesDesktop} />
        <div className={styles.mindly}>
          <Separator />

          <div className={styles.mindly__examples}>
            <div className={styles.mindly__examples__info}>
              <div className={styles.mindly__examples__info_title}>
                адаптивный дизайн
              </div>
              <div className={styles.mindly__examples__info_description}>
                Madaia – бренд одежды для повседневной жизни и спорта, идейным
                вдохновителем которого является бывшая побуждает ее творить
                красоту
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mindly__swiper__images}>
          <Swiper
            slidesPerView={4}
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.mindly__swiper__images__slider}
          >
            <SwiperSlide
              className={styles.mindly__swiper__images__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel1.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel2.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel3.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel4.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel5.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel6.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.mindly__swiper__images_mob}>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.mindly__swiper__images_mob__slider}
          >
            <SwiperSlide
              className={styles.mindly__swiper__images_mob__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel1.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images_mob__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel2.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images_mob__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel3.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images_mob__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel4.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images_mob__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel5.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide
              className={styles.mindly__swiper__images_mob__slider_slide}
            >
              <img
                src="/projects/mindly/smm_carousel6.png"
                alt="instagram post"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.mindly}>
          <div className={styles.mindly__team}>
            <div className={styles.mindly__team_title}>
              Над проектом работали
            </div>
            {team.map((member, index) => (
              <React.Fragment key={`${member.name}-${index}`}>
                <div className={styles.mindly__team__member}>
                  <div className={styles.mindly__team__member_position}>
                    {member.position}
                  </div>
                  <div className={styles.mindly__team__member_name}>
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

export default Mindly;
