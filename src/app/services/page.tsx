"use client";
import React from "react";
import styles from "../../styles/services.module.scss";
import Header from "../../components/Header/Header";
import { SERVICE, SERVICES } from "../../constants/constants";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div className={styles.services}>
      <Header />
      <div className={styles.services__title}>услуги</div>
      <div className={styles.services__preview}>
        <div className={styles.services__preview__title}>превью</div>
        <ul className={styles.services__preview__links}>
          {SERVICES.map((serv) => (
            <li className={styles.services__preview__links_link}>
              <a href={`#${serv.href}`}>{serv.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.services__projects}>
        {SERVICE.map(({ title, description, points, href }) => (
          <ServiceCard
            key={title}
            title={title}
            description={description}
            points={points}
            href={href}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
