"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { motion } from "framer-motion";
import Carousel from "../../components/Carousel/Carousel";
interface CardProps {
  text: string;
  background: string;
}
interface CardListProps {
  cards: CardProps[];
}
const Mindly = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);
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
  const cardsData: CardProps[] = [
    { text: 'Энергия', background: '/projects/mindly/cards/energy.png' },
    { text: 'Метаболизм ', background: '/projects/mindly/cards/metabol.png' },
    { text: 'Здоровый сон ', background: '/projects/mindly/cards/sleep.png' },
    { text: 'Спорт и фитнес ', background: '/projects/mindly/cards/sport.png' },
    { text: 'Кожа, волосы и ногти ', background: '/projects/mindly/cards/skin.png' },
    { text: 'Кости и суставы ', background: '/projects/mindly/cards/bones.png' },
    { text: 'Сердце и сосуды ', background: '/projects/mindly/cards/heart.png' },
    { text: 'Память и внимание ', background: '/projects/mindly/cards/memory.png' },
    { text: 'Омега-3 ', background: '/projects/mindly/cards/omega.png' },
    { text: 'Стресс-менеджмент ', background: '/projects/mindly/cards/stress.png' },
    { text: 'Иммунитет ', background: '/projects/mindly/cards/immun.png' },
    { text: 'Антиоксиданты ', background: '/projects/mindly/cards/antioks.png' },
    { text: 'Мужское здоровье ', background: '/projects/mindly/cards/mens.png' },
    { text: 'Женское здоровье ', background: '/projects/mindly/cards/women.png' },
    { text: 'Активное долголетие ', background: '/projects/mindly/cards/old.png' },
    { text: 'Настроение ', background: '/projects/mindly/cards/mood.png' }

    
  ];
  const aboutPoints = [
    "проект",
    "клиент / mindly",
    "категория / нейминг, брендинг, веб-дизайн, ux-ui, дизайн-поддержка",
    "дата / 2021-2023",
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
                  mindly – динамично развивающийся российский бренд,
                  специализирующийся на производстве высококачественных БАДов и
                  косметики из натуральных компонентов. Продукция Mindly,
                  создаваемая как в России, так и в Европе, выделяется на рынке
                  благодаря своему качеству и выбору ингредиентов.
                </div>
              </div>
              <div className={styles.mindly__about__description__subtitle_big}>
                для Mindly мы разработали нейминг, фирменный стиль и веб-сайт,
                акцентируя на уникальной идентичности бренда. В нашу работу
                вошли брендинг, веб-дизайн, UX<span>/</span>UI и дизайн-поддержка, целью
                которых было создание современного и удобного сайта для
                пользователей. Главная задача — подчеркнуть высокое качество
                натуральной продукции Mindly и их стремление к здоровому образу
                жизни, делая акцент на простоте и интуитивности использования
                сайта.
              </div>
            </div>
          </div>
          <Separator />
          <div className={styles.mindly__palette}>
            <div className={styles.mindly__palette__info}>
              <div className={styles.mindly__palette__info_title}>
                основная палитра бренда
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
          <div className={styles.packageDesign}>
            <div className={styles.packageDesign__info}>
              <div className={styles.packageDesign__info_title}>
              дизайн упаковки
              </div>
              <div className={styles.packageDesign__info_description}>
                
              </div>
            </div>
            <div className={styles.packageDesign__grid}>
              <div className={styles.packageDesign__grid_item}>
              <img
                src="/projects/mindly/mindly_new1.png"
                alt="mindly-package"
                loading="lazy"
              />
              </div>
              
              <div className={styles.packageDesign__grid_item}>
                <img
                  src="/projects/mindly/mindly_new2.png"
                  alt="mindly-package"
                  loading="lazy"
                />
              </div>
              
              <div className={styles.packageDesign__grid_item}>
                <img
                  src="/projects/mindly/mindly_new3.png"
                  alt="mindly-package"
                  loading="lazy"
                />
              </div>
              
              <div className={styles.packageDesign__grid_item}>
                <img
                  src="/projects/mindly/mindly_new4.png"
                  alt="mindly-package"
                  loading="lazy"
                />
              </div>
              
              <div className={styles.packageDesign__grid_item}>
                <img
                  src="/projects/mindly/mindly_new5.png"
                  alt="mindly-package"
                  loading="lazy"
                />
              </div>
              
              <div className={styles.packageDesign__grid_item}>
                <img
                  src="/projects/mindly/mindly_new6.png"
                  alt="mindly-package"
                  loading="lazy"
                />
              </div>
              
            </div>
            <Carousel
                width={315}
                images={["/projects/mindly/mindly_new1.png", "/projects/mindly/mindly_new2.png", "/projects/mindly/mindly_new3.png"]}
              />
              <Carousel
                width={315}
                images={["/projects/mindly/mindly_new4.png", "/projects/mindly/mindly_new5.png", "/projects/mindly/mindly_new6.png"]}
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
                
              </div>
            </div>
          </div>
        </div>

        <img
          src="/projects/mindly/mindly_adaptive.png"
          className={styles.mindly__adaptive__imagesMobile}
          loading="lazy"
        />
        <div className={styles.mindly}>
              <div className={styles.video_one_desktop}>
                <video
                  autoPlay
                  muted={true}
                  loop
                  playsInline={true}
                  ref={videoRef}
                  preload="auto"
                >
                  <source type="video/mp4" src="/projects/mindly/mindly_video_new1.mp4" />
                </video>
              </div>
              <div className={styles.directions}>
                  <div className={styles.directions_title}>Направления БАД</div>
                  <div className={styles.directions_grid}>
                    {cardsData.map(({text, background}) => (
                      <Card background={background} text={text} />
                    ))}
                  </div>
              </div>
        </div>
        <div className={styles.mobileVersion}>
          <div className={styles.mobileVersion_items}>
            <div className={styles.mobileVersion_item}>
              <img src="/projects/mindly/adaptive_mobile_new1.png" alt="adaptive-mindly" loading="lazy" />
            </div>
            <div className={styles.mobileVersion_item}>
              <img src="/projects/mindly/adaptive_mobile_new2.png" alt="adaptive-mindly" loading="lazy" />
            </div>
            <div className={styles.videos}>
              <div className={styles.video_one}>
                <video
                  autoPlay
                  muted={true}
                  loop
                  playsInline={true}
                  ref={videoRef}
                  preload="auto"
                >
                  <source type="video/mp4" src="/projects/mindly/mindly_video_new1.mp4" />
                </video>
              </div>
              <div className={styles.video_two}>
                <video
                  autoPlay
                  muted={true}
                  loop
                  playsInline={true}
                  ref={videoRef}
                  preload="auto"
                >
                  <source type="video/mp4" src="/projects/mindly/mindly_video_new2.mp4" />
                </video>
              </div>
            </div>
            
          </div>
        </div>

        <div className={styles.mindly}>
          <Separator />

          <div className={styles.mindly__examples}>
            <div className={styles.mindly__examples__info}>
              <div className={styles.mindly__examples__info_title}>
                адаптивный дизайн
              </div>
              <div className={styles.mindly__examples__info_description}>
                
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

const Card: React.FC<CardProps> = ({ text, background }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.img
        className={styles.cardImage}
        src={background}
        alt={text}
        loading="lazy"
        
        style={{
          width: "100%",
          height: "100%",
          objectFit: 'cover',
          zIndex: "0",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      />
      <div className={styles.cardContent}>
        {text}
      </div>
    </div>
  );
};