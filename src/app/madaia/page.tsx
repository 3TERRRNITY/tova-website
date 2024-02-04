import React from "react";
import styles from "../../styles/madaia.module.scss";
import commonStyle from "../../styles/common.module.scss";
import Cursor from "../../components/Cursor/Cursor";

const page = () => {
  const team = [
    {
      position: "Руководитель проекта",
      name: ["Анастасия Куренкова"],
    },
    {
      position: "Арт-директор",
      name: ["Мария Решетова"],
    },
    {
      position: "Дизайнер",
      name: ["Наталия Лазарева"],
    },
    {
      position: "Команда разработки",
      name: ["Валерия Юрьевна", "Михаил Выдрин"],
    },
  ];
  return (
    <>
      <div className={commonStyle.madaiaPage}>
        <div className={styles.madaia}>
          <div className={styles.madaia__hero}>
            <img
              className={styles.madaia__hero_logo}
              src="/projects/madaia/madaia_logo-rotate.webp"
              alt="madaia logo"
            />
            <div className={styles.madaia__hero_photo} />
          </div>
          <div className={styles.madaia__info}>
            <div className={styles.madaia__info__title}>
              дизайн онлайн магазина
            </div>
            <div className={styles.madaia__info__title_mob}>о проекте</div>
            <img src="/projects/madaia/madaia_logo.webp" alt="madaia logo" />
            <div className={styles.madaia__info__paragraph}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая профессиональная
              теннисистка Майя Кацитадзе. Майю зажигает теннис, побуждает ее
              творить красоту, бренд Madaia - результат вдохновения.
            </div>
            <div className={styles.madaia__info__paragraph}>
              Миссия бренда - помочь каждой женщине создать комфортный и
              лаконичный гардероб. Нами движет женственность, минимализм в
              деталях и желание сделать ваш образ уникальным, где бы вы ни были:
              на прогулке с друзьями, в незабываемом путешествии или в теннисном
              корте.
            </div>
            <div className={styles.madaia__info__paragraph}>
              <b>Задача проекта:</b> разработать концепт эстетичного
              интернет-магазина с интуитивным администрированием для заказчика с
              возможностью самостоятельного изменения контента и с последующим
              сопровождением команды TOVA.
            </div>
          </div>
          <div className={styles.madaia__desktopDesign}>
            <img src="/projects/madaia/madaia1.webp" alt="desktop design" />
          </div>
          <div className={styles.madaia__tabletDesign}>
            <img src="/projects/madaia/madaia2.webp" alt="tablet design" />
          </div>
          <div className={styles.madaia__clothes}>
            <img src="/projects/madaia/madaia3.webp" alt="clothes" />
            <img src="/projects/madaia/madaia4.webp" alt="clothes" />
          </div>
          <div className={styles.madaia__mobileDesign}>
            <img src="/projects/madaia/madaia5.webp" alt="mobile design" />
          </div>

          <div className={styles.madaia__team}>
            <div className={styles.madaia__team_title}>
              над проектом работали
            </div>
            <div className={styles.madaia__team_container}>
              {team.map(
                ({ position, name }: { position: string; name: string[] }) => (
                  <div className={styles.madaia__team_member} key={position}>
                    <div className={styles.madaia__team_member_position}>
                      {position}
                    </div>
                    <div className={styles.madaia__team_member_nameContainer}>
                      {name.map((n) => (
                        <div
                          className={styles.madaia__team_member_name}
                          key={n}
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
        </div>
      </div>
    </>
  );
};

export default page;
