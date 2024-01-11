import styles from "../../styles/hero.module.scss";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "../../constants/constants";

const Card = ({ service, onMouseMove }) => {
  const variants = {
    default: {
      x: service.mousePosition.x - 200,
      y: service.mousePosition.y - 300,
    },
  };

  return (
    <Link href={`/services#${service.href}`}>
      <motion.div
        className={styles.services__card}
        style={{ position: "relative" }}
        onMouseMove={onMouseMove}
      >
        <div className={styles.services__card__info}>
          <div className={styles.services__card__info_title}>
            {service.title}
          </div>

          <motion.div
            className={styles.services__card__cursor}
            variants={variants}
            animate="default"
          ></motion.div>
        </div>
        <span className={styles.services__card__price}>{service.price}</span>
        <img
          src={service.image}
          alt="service image"
          className={styles.services__card__image}
        />
      </motion.div>
    </Link>
  );
};

export const ServicesCard = () => {
  const [services, setServices] = useState(
    SERVICES.map((service) => ({
      ...service,
      mousePosition: { x: 0, y: 0 },
    }))
  );

  const handleMouseMove = (index, e) => {
    const updatedServices = [...services];
    updatedServices[index].mousePosition = {
      x: e.clientX,
      y: e.clientY,
    };
    setServices(updatedServices);
  };

  return (
    <div className={styles.services__serviceGrid}>
      {services.map((service, index) => (
        <Card
          key={service.title}
          service={service}
          onMouseMove={(e) => handleMouseMove(index, e)}
        />
      ))}
    </div>
  );
};
