"use client";

import React from "react";
import styles from "../../styles/services.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Header from "../../components/Header/Header";
import { SERVICE, SERVICES } from "../../constants/constants";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Separator } from "../../components/Separator/Separator";
import { motion } from "framer-motion";
import { textAnimation } from "../../common/animations";
import Navbar from "../../components/Navbar/Navbar";

const Services = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={commonStyles.otherPageBody}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className={styles.services}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={textAnimation}
            custom={1}
            className={styles.services__title}
          >
            услуги
          </motion.div>
          <Separator />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.services__preview}
          >
            <motion.div
              variants={textAnimation}
              custom={1}
              className={styles.services__preview__title}
            >
              превью
            </motion.div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={styles.services__preview__links}
            >
              <motion.li
                variants={textAnimation}
                custom={2}
                className={styles.services__preview__links_title}
              >
                название услуги
              </motion.li>
              <Separator />
              {SERVICES.map((serv, index) => (
                <React.Fragment key={serv.title}>
                  <motion.li
                    variants={textAnimation}
                    custom={index + 2}
                    className={styles.services__preview__links_link}
                  >
                    <a href={`#${serv.href}`}>{serv.title}</a>
                  </motion.li>
                  <Separator />
                </React.Fragment>
              ))}
            </motion.ul>
          </motion.div>
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
        </motion.div>
      </div>
    </>
  );
};

export default Services;
