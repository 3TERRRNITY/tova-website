import React from "react";
import { IService } from "../../constants/types";
import styles from "./ServiceCard.module.scss";
import { Separator } from "../Separator/Separator";
import { PROJECTS } from "../../constants/constants";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import { textAnimation } from "../../common/animations";

const ServiceCard = ({ title, description, points, href }: IService) => {
  const filteredProjects = PROJECTS.filter((project) =>
    project.id.includes(href)
  );
  return (
    <motion.div
      className={styles.serviceCard}
      id={href}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div
        variants={textAnimation}
        custom={1}
        className={styles.serviceCard__title}
      >
        {title}
      </motion.div>
      <div className={styles.serviceCard__information}>
        <motion.div
          variants={textAnimation}
          custom={1}
          className={styles.serviceCard__information_description}
        >
          {description}
        </motion.div>
        <Separator />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className={styles.serviceCard__information_points}
        >
          {points.map((point, index) => (
            <React.Fragment key={`${point}-${index}`}>
              <motion.li
                variants={textAnimation}
                custom={index + 1}
                className={styles.serviceCard__information_point}
              >
                {point}
              </motion.li>
              <Separator />
            </React.Fragment>
          ))}
        </motion.ul>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={textAnimation}
        className={styles.serviceCard__information_projects}
      >
        {filteredProjects.map((project, index) => (
          <React.Fragment key={`${project.title}-${index}`}>
            <Card
              href={project.title.toLowerCase()}
              image={project.img}
              description={project.description}
              title={project.title}
            />
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
