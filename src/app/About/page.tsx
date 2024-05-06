"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/about.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { DEPARTAMENTS, VACANCY } from "../../constants/constants";
import { textAnimation } from "../../common/animations";
import { Separator } from "../../components/Separator/Separator";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

const About = () => {
  const [imageUrl, setImageUrl] = useState("/telegram.png");
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageUrl("/telegram_notification.png");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const Departaments = DEPARTAMENTS.map(({ title, description }, index) => (
    <React.Fragment key={`${title}-${index}`}>
      <motion.div
        className={styles.about__team__departaments__departament}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div
          custom={1}
          variants={textAnimation}
          className={styles.about__team__departaments__departament_title}
        >
          {title}
        </motion.div>
        {description.map((item: string, index: number) => (
          <motion.div
            custom={2}
            variants={textAnimation}
            className={styles.about__team__departaments__departament_item}
            key={`${item}-${index}`}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
      {index !== DEPARTAMENTS.length - 1 && <Separator />}
    </React.Fragment>
  ));
  return (
    <div className={commonStyles.otherPageBody}>
      <Header white />
      <Navbar />
      <div className={commonStyles.telegramLogo}>
        <a href="https://t.me/tova_agency_bot" target="_blank">
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
      <motion.div
        className={styles.about}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div className={styles.about__headContainer}>
          <motion.div
            className={styles.about__headContainer__title}
            custom={1}
            variants={textAnimation}
          >
            о нас
          </motion.div>
          <motion.div
            className={styles.about__headContainer__description}
            custom={2}
            variants={textAnimation}
          >
            Мы - молодое и креативное агентство, специализирующееся <br /> на
            дизайне, веб-разработке и SMM.{" "}
          </motion.div>
        </motion.div>
        <Separator />
        <motion.div
          className={styles.about__ideologyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div
            className={styles.about__ideologyContainer__title}
            custom={1}
            variants={textAnimation}
          >
            Идеология tova Creative Agency:
          </motion.div>
          <motion.ul
            className={styles.about__ideologyContainer__description}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <motion.li
              custom={1}
              variants={textAnimation}
              className={styles.about__ideologyContainer__description_item}
            >
              - Вдохновение через креатив. Мы верим в силу инноваций и
              креативного подхода к каждому проекту. результатов.
            </motion.li>
            <motion.li
              custom={2}
              variants={textAnimation}
              className={styles.about__ideologyContainer__description_item}
            >
              - Совершенство в деталях. Мы уделяем внимание каждой мелочи, чтобы
              достичь выдающихся
            </motion.li>
            <motion.li
              custom={3}
              variants={textAnimation}
              className={styles.about__ideologyContainer__description_item}
            >
              - Партнерство и сотрудничество. Мы строим долгосрочные отношения с
              клиентами, их цели — наши цели.
            </motion.li>
            <motion.li
              custom={4}
              variants={textAnimation}
              className={styles.about__ideologyContainer__description_item}
            >
              - Цифровое развитие. Мы помогаем брендам процветать в онлайн-мире,
              используя передовые технологии.
            </motion.li>
            <motion.li
              custom={5}
              variants={textAnimation}
              className={styles.about__ideologyContainer__description_item}
            >
              - Творческий импульс. Мы вдохновляемся творчеством и привносим его
              в каждый проект.
            </motion.li>
          </motion.ul>
        </motion.div>
        <Separator />
        <motion.div
          className={styles.about__team}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div
            className={styles.about__team__title}
            custom={1}
            variants={textAnimation}
          >
            Команда
          </motion.div>
          <motion.div
            className={styles.about__team__departaments}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            {Departaments}
          </motion.div>
        </motion.div>
        <Separator />
        <motion.div
          className={styles.about__vacancies}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div
            className={styles.about__vacancies__title}
            custom={1}
            variants={textAnimation}
          >
            Вакансии
          </motion.div>
          <Separator />
          {VACANCY.map(({ title, description }, index) => (
            <React.Fragment key={`${title}-${index}`}>
              <motion.div
                className={styles.about__vacancies__vacancy}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
              >
                <motion.div
                  className={styles.about__vacancies__vacancy_title}
                  custom={1}
                  variants={textAnimation}
                >
                  {title}
                </motion.div>
                <motion.div
                  custom={2}
                  variants={textAnimation}
                  className={styles.about__vacancies__vacancy_description}
                >
                  {description}
                </motion.div>
              </motion.div>
              <Separator />
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
      <Form />
      <Footer white />
    </div>
  );
};

export default About;
