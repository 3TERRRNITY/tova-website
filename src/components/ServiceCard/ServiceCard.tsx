import React from "react";
import { IService } from "../../constants/types";
import styles from "./ServiceCard.module.scss";
import { Separator } from "../Separator/Separator";

const ServiceCard = ({ title, description, points, href }: IService) => {
  return (
    <div className={styles.serviceCard} id={href}>
      <div className={styles.serviceCard__title}>{title}</div>
      <div className={styles.serviceCard__information}>
        <div className={styles.serviceCard__information_description}>
          {description}
        </div>
        <Separator />
        <ul className={styles.serviceCard__information_points}>
          {points.map((point) => (
            <React.Fragment key={point}>
              <li className={styles.serviceCard__information_point}>{point}</li>
              <Separator />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
