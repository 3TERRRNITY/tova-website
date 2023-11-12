"use client";

import React from "react";
import styles from "../../styles/services.module.scss";
import Header from "../../components/Header/Header";
import { SERVICE, SERVICES } from "../../constants/constants";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Separator } from "../../components/Separator/Separator";

const Services = () => {
  return (
    <>
      <Header />
      <div className={styles.services}>
        <div className={styles.services__title}>услуги</div>
        <Separator />
        <div className={styles.services__preview}>
          <div className={styles.services__preview__title}>превью</div>
          <ul className={styles.services__preview__links}>
            <li className={styles.services__preview__links_title}>
              название услуги
            </li>
            <Separator />
            {SERVICES.map((serv) => (
              <React.Fragment key={serv.title}>
                <li className={styles.services__preview__links_link}>
                  <a href={`#${serv.href}`}>{serv.title}</a>
                </li>
                <Separator />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <Separator />
        <div className={styles.services__projects}>
          {SERVICE.map(({ title, description, points, href }) => (
            <React.Fragment key={title}>
              <ServiceCard
                key={title}
                title={title}
                description={description}
                points={points}
                href={href}
              />
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
