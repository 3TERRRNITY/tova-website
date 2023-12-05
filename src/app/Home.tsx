"use client";

import styles from "../styles/hero.module.scss";
import commonStyles from "../styles/common.module.scss";
import { PROJECTS, SERVICES } from "../constants/constants";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <div className={commonStyles.mainPageBody}>
      <div className={styles.hero}>
        <div className={styles.hero__text}>
          креатив - он как нейросеть <br /> главное правильно <br />{" "}
          сформулировать запрос
        </div>
        <div className={styles.hero__header}>
          <Link href={"/"}>
            <div className={styles.hero__header__logo}>
              <Image src="/TOVA-logo.svg" alt="logo" fill />
            </div>
          </Link>

          <div className={styles.hero__header__text}>
            tova
            <br />
            про дизайн
          </div>
        </div>
      </div>
      <Slider />
      <div className={styles.services}>
        <div className={styles.services__title}>услуги</div>
        <div className={styles.services__serviceGrid}>
          {SERVICES.map((service) => (
            <div className={styles.services__card} key={service.title}>
              <div className={styles.services__card__info}>
                <div className={styles.services__card__info_title}>
                  {service.title}
                </div>
              </div>
              <span className={styles.services__card__price}>
                {service.price}
              </span>
              <img
                src={service.image}
                alt="service image"
                className={styles.services__card__image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projects}>
        {PROJECTS.map(
          ({
            img,
            description,
            title,
          }: {
            img: string;
            description: string;
            title: string;
          }) => (
            <Link key={title} href={title.toLowerCase()}>
              <Card image={img} title={title} description={description} />
            </Link>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
