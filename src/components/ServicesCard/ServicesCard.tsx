import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "../../constants/constants";
import styles from "./ServicesCard.module.scss";
import heroStyles from "../../styles/hero.module.scss";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { motion, useAnimation } from "framer-motion";

const ServicesComponent = () => {
  return (
    <div className={heroStyles.services__serviceGrid}>
      {SERVICES.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
};

const ServiceCard = ({ service }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardControls = useAnimation();
  const descriptionControls = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
    cardControls.start({ x: 60, y: 60 });
    descriptionControls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    cardControls.start({ x: 0, y: 0 });
    descriptionControls.start({ opacity: 0 });
  };

  return (
    <Link href={`${service.href}`}>
      <GlowCapture size={700}>
        <Glow color="white">
          <div
            className={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={heroStyles.services__card__info}>
              <div className={heroStyles.services__card__info_title}>
                <span>{service.title}</span>
              </div>
              <motion.div
                className={heroStyles.services__card__info_description}
                initial={{ opacity: 0 }}
                animate={descriptionControls}
                transition={{ duration: 0.2 }}
              >
                {service.description}
              </motion.div>
              <span className={heroStyles.services__card__price}>
                {service.price}
              </span>
            </div>
            <motion.img
              src={service.image}
              alt="service image"
              className={heroStyles.services__card__image}
              initial={{ x: 0, y: 0 }}
              animate={cardControls}
              transition={{ duration: 0.2 }}
              loading="lazy"
            />
          </div>
        </Glow>
      </GlowCapture>
    </Link>
  );
};

export default ServicesComponent;
