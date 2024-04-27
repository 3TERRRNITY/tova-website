"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/aimi.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import Lottie from "lottie-react";
import Logo from "../../../public/projects/aimi/aimations/logo-aimi.json";
import Scheme1 from "../../../public/projects/aimi/aimations/scheme1-aimi.json";
import Graphic1 from "../../../public/projects/aimi/aimations/Graphic1.json";
import Graphic2 from "../../../public/projects/aimi/aimations/Graphic2.json";
import Graphic3 from "../../../public/projects/aimi/aimations/Graphic3.json";
import Graphic4 from "../../../public/projects/aimi/aimations/Graphic4.json";
import Carousel from "../../components/Carousel/Carousel";
import { motion, useAnimation } from "framer-motion";

const Aimi = () => {
  const aboutPoints = [
    "проект",
    "клиент / aimi",
    "категория / брендинг, дизайн-поддержка",
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
      name: ["Наталия Лазарева"],
    },
    {
      position: "Копирайтер",
      name: ["Сергей Афанасьев", "Фарид Абдуллаев"],
    },
    {
      position: "Команда разработки",
      name: ["Алексей Ларионов", "Дмитрий Авдеев"],
    },
  ];
  const controls = useAnimation();
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);
  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <Header />
        <div className={commonStyles.projectContainer}>
          <div className={styles.aimi__hero}>
            <div className={styles.aimi__hero__video}>
              <video
                autoPlay
                muted={true}
                loop
                playsInline={true}
                ref={videoRef}
                preload="auto"
              >
                <source type="video/mp4" src="/projects/aimi/aimi_video.mp4" />
              </video>
            </div>
            <div className={styles.aimi__hero__video_mob}>
              <video
                autoPlay
                muted={true}
                loop
                playsInline={true}
                ref={videoRef}
              >
                <source type="video/mp4" src="/projects/aimi/aimi_mob.mp4" />
              </video>
            </div>
          </div>
          <div className={styles.aimi__about}>
            <div className={styles.aimi__about__head}>
              <div className={styles.aimi__about__head_title}>О проекте</div>
              <div className={styles.aimi__about__head_subtitle}>
                {aboutPoints.map((point, index) => (
                  <div
                    key={`${point}-${index}`}
                    className={styles.aimi__about__head_point}
                  >
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.aimi__about__description}>
              <div className={styles.aimi__about__description__subtitle}>
                <div className={styles.aimi__about__description__subtitle_big}>
                  AIMI — сербская CRO-компания, специализирующаяся на
                  клинических исследованиях в Европе. AIMI предоставляют полный
                  спектр услуг, охватывающих все этапы клинических испытаний для
                  фармацевтических и биотехнологических отраслей.
                </div>
              </div>
              <div className={styles.aimi__about__description__subtitle_big}>
                В этом кейсе команда tova под ключ создала визуальный облик для
                стартапа в сфере клинических исследований. От нейминга до
                дизайна сайта, каждый элемент был разработан с учетом пожеланий
                клиента, придавая новому игроку в индустрии исследований
                уникальный, современный и запоминающийся облик.
              </div>
            </div>
          </div>
          <Separator />
          <div className={styles.aimi__mainPage}>
            <div className={styles.aimi__mainPage__info}>
              <div className={styles.aimi__mainPage__info_title}>
                создание нейминга и логотипа
              </div>
              <div className={styles.aimi__mainPage__info_description}>
                <p>
                  выбор названия aimi - arti<span>f</span>icial intelligence and
                  medical innovations был вдохновлен желанием руководителя
                  отразить её инновационный подход и специализацию в сфере
                  медицинских технологий. это название идеально сочетает
                  использование искусственного интеллекта и передовые
                  медицинские инновации, что отражает стратегические цели
                  компании.
                </p>
              </div>
            </div>
            <div className={styles.aimi__mainPage__images}>
              <Lottie animationData={Logo} />
              <Lottie animationData={Scheme1} />
            </div>
          </div>
          <Separator />
          <div className={styles.aimi__infographics}>
            <div className={styles.aimi__infographics__info}>
              <div className={styles.aimi__infographics__info_title}>
                Инфографика
              </div>
              <div className={styles.aimi__infographics__info_description}>
                Aimi активно работает с обширной документацией, поэтому мы
                разработали для них серию инфографик. Эти визуальные элементы
                упрощают понимание сложных данных и улучшают представление
                информации для их заказчиков.
              </div>
            </div>
            <div className={styles.aimi__infographics__images}>
              <span>Графики 1</span>
              <div className={styles.aimi__infographics__images_container}>
                <Lottie animationData={Graphic1} />
                <Lottie animationData={Graphic2} />
              </div>
              <span>Графики 2</span>
              <div className={styles.aimi__infographics__images_container}>
                <Lottie animationData={Graphic3} />
                <Lottie animationData={Graphic4} />
              </div>
            </div>
          </div>
          <Separator />
          <div className={styles.aimi__firm}>
            <div className={styles.aimi__firm__info}>
              <div className={styles.aimi__firm__info_title}>
                фирменные носители
              </div>
            </div>

            <div className={styles.aimi__information__cards}>
              <motion.div
                className={styles.aimi__information__card1}
                onHoverStart={handleHover1}
                onHoverEnd={handleUnhover1}
              >
                <div className={styles.aimi__information__card1_overflow} />
                <motion.div
                  className={styles.aimi__information__cardTexts}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    opacity: isHoveredCard1 ? 1 : 0,
                  }}
                >
                  <div
                    className={styles.aimi__information__cardTexts_description}
                  >
                    визитки
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                onHoverStart={handleHover2}
                onHoverEnd={handleUnhover2}
                className={styles.aimi__information__card2}
              >
                <div className={styles.aimi__information__card2_overflow} />
                <motion.div
                  className={styles.aimi__information__cardTexts}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    opacity: isHoveredCard2 ? 1 : 0,
                  }}
                >
                  <div
                    className={styles.aimi__information__cardTexts_description}
                  >
                    почтовые конверты
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                onHoverStart={handleHover3}
                onHoverEnd={handleUnhover3}
                className={styles.aimi__information__card_big}
              >
                <div className={styles.aimi__information__card_big_overflow} />
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    opacity: isHoveredCard3 ? 1 : 0,
                  }}
                  className={styles.aimi__information__cardTexts}
                >
                  <div
                    className={styles.aimi__information__cardTexts_description}
                  >
                    фирменный бланк
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <Separator />
          <div className={styles.aimi__typography}>
            <div className={styles.aimi__typography__info}>
              <div className={styles.aimi__typography__info_title}>шрифт</div>
              <div className={styles.aimi__typography__info__example}>
                <div className={styles.aimi__typography__info__example_title}>
                  muller
                </div>
                <div className={styles.aimi__typography__info__example_letters}>
                  <div
                    className={
                      styles.aimi__typography__info__example_letters_rus
                    }
                  >
                    Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт
                    Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя
                  </div>
                  <div
                    className={
                      styles.aimi__typography__info__example_letters_en
                    }
                  >
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt
                    Uu Vv Ww Xx Yy Zz
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className={styles.aimi__smm}>
            <div className={styles.aimi__smm__info}>
              <div className={styles.aimi__smm__info_title}>smm</div>
              <div className={styles.aimi__smm__info__images}>
                <div className={styles.aimi__smm__info__images_image1} />
                <div className={styles.aimi__smm__info__images_image2} />
              </div>
              <Carousel
                width={315}
                images={["/projects/aimi/smm1.png", "/projects/aimi/smm2.png"]}
              />
            </div>
          </div>

          <Separator />

          <div className={styles.aimi__linkedin}>
            <div className={styles.aimi__linkedin_title}>linkedin</div>
            <div className={styles.aimi__linkedin__images}>
              <div className={styles.aimi__linkedin__images_image1} />
              <div className={styles.aimi__linkedin__images_image2} />
              <div className={styles.aimi__linkedin__images_image3} />
            </div>
            <div className={styles.aimi__linkedin__slider}>
              <Carousel
                width={268}
                images={[
                  "/projects/aimi/linkedin1.png",
                  "/projects/aimi/linkedin2.png",
                  "/projects/aimi/linkedin3.png",
                ]}
              />
            </div>
          </div>

          <div className={styles.aimi__team}>
            <div className={styles.aimi__team_title}>над проектом работали</div>
            <div className={styles.aimi__team_container}>
              {team.map(
                (
                  { position, name }: { position: string; name: string[] },
                  index
                ) => (
                  <div
                    className={styles.aimi__team_member}
                    key={`${position}-${index}`}
                  >
                    <div className={styles.aimi__team_member_position}>
                      {position}
                    </div>
                    <div className={styles.aimi__team_member_nameContainer}>
                      {name.map((n, index) => (
                        <div
                          className={styles.aimi__team_member_name}
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

          {/* <div className={styles.aimi__team}>
            <div className={styles.aimi__team_title}>Над проектом работали</div>
            {team.map((member, index) => (
              <React.Fragment key={`${member.name}-${index}`}>
                <div className={styles.aimi__team__member}>
                  <div className={styles.aimi__team__member_position}>
                    {member.position}
                  </div>
                  <div className={styles.aimi__team__member_name}>
                    {member.name}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div> */}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Aimi;
