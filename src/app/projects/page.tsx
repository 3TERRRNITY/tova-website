"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/projects.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Footer from "../../components/Footer/Footer";
import { OPTIONS, PROJECTS } from "../../constants/constants";
import { IProjects } from "../../constants/types";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import Lottie from "lottie-react";
import emptyAnimation from "../../../public/animations/empty.json";
import { motion } from "framer-motion";
import { textAnimation } from "../../common/animations";
import Form from "../../components/Form/Form";

const Projects = () => {
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
  const [selectedOption, setSelectedOption] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<IProjects[]>([]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  // Эффект, отслеживающий изменения selectedOption
  useEffect(() => {
    let newFilteredProjects: IProjects[] = [];

    if (selectedOption === "all") {
      newFilteredProjects = PROJECTS;
    } else {
      newFilteredProjects = PROJECTS.filter((project) =>
        project.id.includes(selectedOption)
      );
    }

    if (newFilteredProjects.length > 0) {
      const shuffledProjects = newFilteredProjects;
      setFilteredProjects(shuffledProjects);
    } else {
      setFilteredProjects(newFilteredProjects);
    }
  }, [selectedOption]);

  return (
    <>
      <div className={commonStyles.mainPageBody}>
        <Header />
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
        <div className={styles.projects}>
          <div className={styles.projects__title}>проекты</div>
          <div className={styles.projects__select}>
            {OPTIONS.map((option, index) => (
              <motion.div
                key={`${option.title}-${index}`}
                className={`${styles.projects__select__option} ${
                  selectedOption === option.id
                    ? styles.projects__select__option_active
                    : ""
                }`}
                onClick={() => handleOptionClick(option.id)}
                style={{ position: "relative" }}
              >
                <motion.div
                  initial={{
                    width: 0,
                    height: 0,
                    background: "white",
                    originX: 0,
                    originY: 1,
                  }}
                  animate={{
                    width: selectedOption === option.id ? "150%" : 0,
                    height: selectedOption === option.id ? "150%" : 0,
                    borderTopRightRadius: "90%",
                    transition: { duration: 0.5 },
                  }}
                  style={{ position: "absolute", left: 0, bottom: 0 }}
                />
                <p
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: selectedOption === option.id ? "black" : "white",
                  }}
                >
                  {option.title}
                </p>
              </motion.div>
            ))}
          </div>

          <Separator />

          {filteredProjects &&
            filteredProjects.map((proj, index) => (
              <React.Fragment key={`${proj.title}-${index}`}>
                <div className={styles.projects__project}>
                  <div className={styles.projects__project__container}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={textAnimation}
                      custom={1}
                      viewport={{ amount: 0.2, once: true }}
                      className={styles.projects__project__title}
                    >
                      {proj.title}
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={textAnimation}
                      custom={2}
                      viewport={{ amount: 0.2, once: true }}
                      className={styles.projects_project__description}
                    >
                      {proj.category}
                    </motion.div>
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={textAnimation}
                    viewport={{ once: true }}
                    className={styles.projects__project__cards}
                  >
                    <Card
                      href={proj.title.toLowerCase()}
                      image={proj.img}
                      year={proj.year}
                      description={proj.description}
                      isProject
                      title={proj.title}
                    />
                    <motion.div
                      className={styles.projects__project__cards_deskCard}
                      initial="hidden"
                      whileInView="visible"
                      variants={textAnimation}
                      viewport={{ once: true }}
                    >
                      <Card
                        href={proj.title.toLowerCase()}
                        secondImage={proj.secondImage}
                        image={proj.img}
                        animation={true}
                        year={proj.year}
                        isProject
                        description={""}
                        title={""}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                <Separator />
              </React.Fragment>
            ))}
          {filteredProjects.length === 0 && (
            <div className={styles.projects__emptyError}>
              Пока пусто...
              <Lottie
                className={styles.projects__emptyError_animation}
                animationData={emptyAnimation}
              />
            </div>
          )}
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Projects;
