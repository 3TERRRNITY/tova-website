import React from "react";
import styles from "../../styles/avivir.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type Props = {};

const Avivir = (props: Props) => {
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

        <div className={styles.avivir__about}>
          <div className={styles.avivir__about__head}>
            <div className={styles.avivir__about__head_title}>О проекте</div>
            <div className={styles.avivir__about__head_subtitle}>
              {aboutPoints.map((point) => (
                <div key={point} className={styles.avivir__about__head_point}>
                  {point}
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
      </div>
      <Footer />
    </div>
  );
};

export default Avivir;
