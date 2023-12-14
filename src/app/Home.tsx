"use client";

import styles from "../styles/hero.module.scss";
import commonStyles from "../styles/common.module.scss";
import { PROJECTS, SERVICES } from "../constants/constants";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import Slider from "../components/Slider/Slider";
import { useState } from "react";

export default function Home() {
  const redirectToServicePage = (serviceTitle: string) => {
    const url = `/services#${serviceTitle}`;
    window.location.href = url;
  };
  const [hoverPosition, setHoverPosition] = useState<{
    [key: number]: { x: number; y: number };
  }>({});

  const handleMouseMove = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;
    setHoverPosition((prevPositions) => ({
      ...prevPositions,
      [index]: { x, y },
    }));
  };

  const resetHoverPosition = (index: number) => {
    setHoverPosition((prevPositions) => {
      const updatedPositions = { ...prevPositions };
      delete updatedPositions[index];
      return updatedPositions;
    });
  };
  // const [hoverPositions, setHoverPositions] = useState(
  //   Array(SERVICES.length).fill({ x: 0, y: 0 })
  // );

  // const handleMouseMove = (
  //   index: number,
  //   e: React.MouseEvent<HTMLDivElement>
  // ) => {
  //   const boundingRect = e.currentTarget.getBoundingClientRect();
  //   const x = e.clientX - boundingRect.left;
  //   const y = e.clientY - boundingRect.top;

  //   const updatedHoverPositions = [...hoverPositions];
  //   updatedHoverPositions[index] = { x, y };
  //   setHoverPositions(updatedHoverPositions);
  // };

  // const resetHoverPosition = (index: number) => {
  //   const updatedHoverPositions = [...hoverPositions];
  //   updatedHoverPositions[index] = { x: 0, y: 0 };
  //   setHoverPositions(updatedHoverPositions);
  // };
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
          {SERVICES.map((service, index) => (
            <Link key={service.title} href={`/services#${service.href}`}>
              <div
                className={styles.services__card}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => resetHoverPosition(index)}
                style={{ position: "relative" }}
              >
                <div className={styles.services__card__info}>
                  <div className={styles.services__card__info_title}>
                    {service.title}
                  </div>
                  {hoverPosition[index]?.x !== undefined &&
                    hoverPosition[index]?.y !== undefined && (
                      <div
                        className={styles.services__card__cursor}
                        style={{
                          left: hoverPosition[index].x + "px",
                          top: hoverPosition[index].y + "px",
                        }}
                      ></div>
                    )}
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
            </Link>
          ))}
        </div>

        {/* <div className={styles.services__serviceGrid}>
          {SERVICES.map((service) => (
            <Link
              className={styles.services__card}
              key={service.title}
              href={`/services#${service.href}`}
            >
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
            </Link>
          ))}
        </div> */}
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projects__title}>проекты</div>
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
              <Card
                href={title.toLowerCase()}
                image={img}
                title={title}
                description={description}
              />
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
