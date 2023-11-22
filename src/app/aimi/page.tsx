import React from "react";
import styles from "../../styles/aimi.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import motion from "framer-motion";

type Props = {};

const Aimi = (props: Props) => {
  const aboutPoints = [
    "проект",
    "клиент / aimi",
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
    <div className={commonStyles.mainPageBody}>
      <Header />
      <div className={commonStyles.projectContainer}>
        <div className={styles.aimi__hero} />

        <div className={styles.aimi__about}>
          <div className={styles.aimi__about__head}>
            <div className={styles.aimi__about__head_title}>О проекте</div>
            <div className={styles.aimi__about__head_subtitle}>
              {aboutPoints.map((point) => (
                <div key={point} className={styles.aimi__about__head_point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.aimi__about__description}>
            <div className={styles.aimi__about__description__subtitle}>
              <div
                className={styles.aimi__about__description__subtitle_paragraph}
              >
                Madaia – бренд одежды для повседневной <br /> жизни и спорта,
                идейным вдохновителем <br /> которого является бывшая
              </div>
              <div
                className={styles.aimi__about__description__subtitle_paragraph}
              >
                побуждает ее творить красоту, бренд Madaia <br /> - результат
                вдохновения. Madaia – <br />
                бренд одежды для повседневной жизни и спорта
              </div>
            </div>
            <div className={styles.aimi__about__description__subtitle_big}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту, бренд Madaia - результат вдохновения. бренд одежды для
              повседневной жизни и спорта
            </div>
          </div>
        </div>
        {/* <Separator /> */}
        <div className={styles.aimi__mainPage}>
          <div className={styles.aimi__mainPage__info}>
            <div className={styles.aimi__mainPage__info_title}>
              дизайн главной страницы сайта
            </div>
            <div className={styles.aimi__mainPage__info_description}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту
            </div>
          </div>
          <div className={styles.aimi__mainPage__images}>
            <div className={styles.aimi__mainPage__images_image1} />
            <div className={styles.aimi__mainPage__images_image2} />
            <div className={styles.aimi__mainPage__images_image3} />
            <div className={styles.aimi__mainPage__images_image4} />
          </div>
        </div>

        <div className={styles.aimi__infographics}>
          <div className={styles.aimi__infographics__info}>
            <div className={styles.aimi__infographics__info_title}>
              Инфографика
            </div>
            <div className={styles.aimi__infographics__info_description}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту
            </div>
          </div>
          <div className={styles.aimi__infographics__images}>
            <span>Графики 1</span>
            <div className={styles.aimi__infographics__images_container}>
              <div className={styles.aimi__infographics__images_image1} />
              <div className={styles.aimi__infographics__images_image2} />
            </div>
            <span>Графики 2</span>
            <div className={styles.aimi__infographics__images_container}>
              <div className={styles.aimi__infographics__images_image3} />
              <div className={styles.aimi__infographics__images_image4} />
            </div>
          </div>
        </div>
        {/* <Separator /> */}
        <div className={styles.aimi__firm}>
          <div className={styles.aimi__firm__info}>
            <div className={styles.aimi__firm__info_title}>
              фирменные носители
            </div>
            <div className={styles.aimi__firm__info_description}>
              Madaia – бренд одежды для повседневной жизни и спорта, идейным
              вдохновителем которого является бывшая побуждает ее творить
              красоту
            </div>
          </div>

          <div className={styles.aimi__firm__imageGridContainer}>
            <div className={styles.aimi__firm__imageGridContainer_image1} />
            <div className={styles.aimi__firm__imageGridContainer_image2} />
            <div className={styles.aimi__firm__imageGridContainer_image3} />
          </div>
        </div>
        {/* <Separator /> */}
        <div className={styles.aimi__typography}>
          <div className={styles.aimi__typography__info}>
            <div className={styles.aimi__typography__info_title}>
              фирменные носители
            </div>
            <div className={styles.aimi__typography__info__example}>
              <div className={styles.aimi__typography__info__example_title}>
                muller
              </div>
              <div className={styles.aimi__typography__info__example_letters}>
                <div
                  className={styles.aimi__typography__info__example_letters_rus}
                >
                  Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу
                  Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя
                </div>
                <div
                  className={styles.aimi__typography__info__example_letters_en}
                >
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Separator />  */}

        <div className={styles.aimi__smm}>
          <div className={styles.aimi__smm__info}>
            <div className={styles.aimi__smm__info_title}>smm</div>
            <div className={styles.aimi__smm__info__images}>
              <div className={styles.aimi__smm__info__images_image1} />
              <div className={styles.aimi__smm__info__images_image2} />
            </div>
          </div>
        </div>

        {/* <Separator /> */}

        <div className={styles.aimi__linkedin}>
          <div className={styles.aimi__linkedin_title}>linkedin</div>
          <div className={styles.aimi__linkedin__images}>
            <div className={styles.aimi__linkedin__images_image1} />
            <div className={styles.aimi__linkedin__images_image2} />
            <div className={styles.aimi__linkedin__images_image3} />
          </div>
        </div>

        <div className={styles.aimi__team}>
          <div className={styles.aimi__team_title}>Над проектом работали</div>
          {team.map((member) => (
            <React.Fragment key={member.name}>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aimi;
