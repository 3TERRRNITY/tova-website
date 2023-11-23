"use client";

import React, { useState } from "react";
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
type Props = {};

const Projects = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>("all");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  const filteredProjects: IProjects[] =
    selectedOption === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.id === selectedOption);

  return (
    <div className={commonStyles.mainPageBody}>
      <Header />
      <div className={styles.projects}>
        <div className={styles.projects__title}>проекты</div>
        <div className={styles.projects__select}>
          {OPTIONS.map((option) => (
            <div
              key={option.title}
              className={`${styles.projects__select__option} ${
                selectedOption === option.id
                  ? styles.projects__select__option_active
                  : ""
              }`}
              id={option.id}
              onClick={() => handleOptionClick(option.id)}
            >
              {option.title}
            </div>
          ))}
        </div>
        <Separator />

        {filteredProjects &&
          filteredProjects.map((proj) => (
            <React.Fragment key={proj.title}>
              <div className={styles.projects__project}>
                <div className={styles.projects__project__container}>
                  <div className={styles.projects__project__title}>
                    {proj.title}
                  </div>
                  <div className={styles.projects_project__description}>
                    {proj.category}
                  </div>
                </div>
                <div className={styles.projects__project__cards}>
                  <Card
                    image={proj.img}
                    description={proj.description}
                    title={proj.title}
                  />
                  <Card
                    image={proj.img}
                    animation={false}
                    description={""}
                    title={""}
                  />
                </div>
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

      <Footer />
    </div>
  );
};

export default Projects;
