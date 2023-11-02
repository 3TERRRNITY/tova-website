import React from "react";

import styles from "../../styles/about.module.scss";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Separator from "../../components/Separator/Separator";
import { DEPARTAMENTS, VACANCY } from "../../constants/constants";

const About = () => {
  const Departaments = DEPARTAMENTS.map(({ title, description }) => (
    <>
      <div className={styles.about__team__departaments__departament}>
        <div className={styles.about__team__departaments__departament_title}>
          {title}
        </div>
        {description.map((item: string) => (
          <div className={styles.about__team__departaments__departament_item}>
            {item}
          </div>
        ))}
      </div>
      <Separator />
    </>
  ));
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.about}>
        <div className={styles.about__headContainer}>
          <div className={styles.about__headContainer__title}>о нас</div>
          <div className={styles.about__headContainer__description}>
            Мы - молодое и креативное агентство, специализирующееся <br /> на
            дизайне, веб-разработке и SMM.{" "}
          </div>
        </div>
        <Separator />
        <div className={styles.about__ideologyContainer}>
          <div className={styles.about__ideologyContainer__title}>
            Идеология TOVA Creative Agency:
          </div>
          <ul className={styles.about__ideologyContainer__description}>
            <li className={styles.about__ideologyContainer__description_item}>
              - Вдохновение через креатив. Мы верим в силу инноваций и
              креативного подхода к каждому проекту. результатов.
            </li>
            <li className={styles.about__ideologyContainer__description_item}>
              - Совершенство в деталях. Мы уделяем внимание каждой мелочи, чтобы
              достичь выдающихся
            </li>
            <li className={styles.about__ideologyContainer__description_item}>
              - Партнерство и сотрудничество. Мы строим долгосрочные отношения с
              клиентами, их цели — наши цели.
            </li>
            <li className={styles.about__ideologyContainer__description_item}>
              - Цифровое развитие. Мы помогаем брендам процветать в онлайн-мире,
              используя передовые технологии.
            </li>
            <li className={styles.about__ideologyContainer__description_item}>
              - Творческий импульс. Мы вдохновляемся творчеством и привносим его
              в каждый проект.
            </li>
          </ul>
        </div>
        <Separator />
        <div className={styles.about__team}>
          <div className={styles.about__team__title}>Команда</div>
          <div className={styles.about__team__departaments}>{Departaments}</div>
        </div>
        <Separator />
        <div className={styles.about__vacancies}>
          <div className={styles.about__vacancies__title}>Вакансии</div>
          <Separator />
          {VACANCY.map(({ title, description }) => (
            <>
              <div className={styles.about__vacancies__vacancy}>
                <div className={styles.about__vacancies__vacancy_title}>
                  {title}
                </div>
                <div className={styles.about__vacancies__vacancy_description}>
                  {description}
                </div>
              </div>
              <Separator />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
