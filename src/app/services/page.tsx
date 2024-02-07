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
import Footer from "../../components/Footer/Footer";
import Cursor from "../../components/Cursor/Cursor";

const Services = () => {
  return (
    <>
      <Header white />
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

          <Separator />
          <div className={styles.services__projects}>
            {SERVICE.map(({ title, description, points, href }, index) => (
              <React.Fragment key={`${title}-${index}`}>
                <ServiceCard
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
        <Footer white />
      </div>
    </>
  );
};

export default Services;
