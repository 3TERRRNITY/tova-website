import React from "react";
import Link from "next/link";
import { SERVICES } from "../../constants/constants";
import styles from "./ServicesCard.module.scss";
import heroStyles from "../../styles/hero.module.scss";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const ServicesComponent = () => {
  return (
    <div className={heroStyles.services__serviceGrid}>
      <Link key={SERVICES[0].title} href={`/services#${SERVICES[0].href}`}>
        <GlowCapture>
          <Glow color="white">
            <div className={styles.card}>
              <div className={heroStyles.services__card__info}>
                <div className={heroStyles.services__card__info_title}>
                  {SERVICES[0].title}
                </div>

                <span className={heroStyles.services__card__price}>
                  {SERVICES[0].price}
                </span>
              </div>
              <img
                src={SERVICES[0].image}
                alt="service image"
                className={heroStyles.services__card__image}
              />
            </div>
          </Glow>
        </GlowCapture>
      </Link>

      <Link key={SERVICES[1].title} href={`/services#${SERVICES[1].href}`}>
        <GlowCapture>
          <Glow color="white">
            <div className={styles.card}>
              <div className={heroStyles.services__card__info}>
                <div className={heroStyles.services__card__info_title}>
                  {SERVICES[1].title}
                </div>

                <span className={heroStyles.services__card__price}>
                  {SERVICES[1].price}
                </span>
              </div>
              <img
                src={SERVICES[1].image}
                alt="service image"
                className={heroStyles.services__card__image}
              />
            </div>
          </Glow>
        </GlowCapture>
      </Link>
      <Link key={SERVICES[2].title} href={`/services#${SERVICES[2].href}`}>
        <GlowCapture>
          <Glow color="white">
            <div className={styles.card}>
              <div className={heroStyles.services__card__info}>
                <div className={heroStyles.services__card__info_title}>
                  {SERVICES[2].title}
                </div>

                <span className={heroStyles.services__card__price}>
                  {SERVICES[2].price}
                </span>
              </div>
              <img
                src={SERVICES[2].image}
                alt="service image"
                className={heroStyles.services__card__image}
              />
            </div>
          </Glow>
        </GlowCapture>
      </Link>

      <Link key={SERVICES[3].title} href={`/services#${SERVICES[3].href}`}>
        <GlowCapture>
          <Glow color="white">
            <div className={styles.card}>
              <div className={heroStyles.services__card__info}>
                <div className={heroStyles.services__card__info_title}>
                  {SERVICES[3].title}
                </div>

                <span className={heroStyles.services__card__price}>
                  {SERVICES[3].price}
                </span>
              </div>
              <img
                src={SERVICES[3].image}
                alt="service image"
                className={heroStyles.services__card__image}
              />
            </div>
          </Glow>
        </GlowCapture>
      </Link>

      <Link key={SERVICES[4].title} href={`/services#${SERVICES[4].href}`}>
        <GlowCapture>
          <Glow color="white">
            <div className={styles.card}>
              <div className={heroStyles.services__card__info}>
                <div className={heroStyles.services__card__info_title}>
                  {SERVICES[4].title}
                </div>

                <span className={heroStyles.services__card__price}>
                  {SERVICES[4].price}
                </span>
              </div>
              <img
                src={SERVICES[4].image}
                alt="service image"
                className={heroStyles.services__card__image}
              />
            </div>
          </Glow>
        </GlowCapture>
      </Link>

      <Link key={SERVICES[5].title} href={`/services#${SERVICES[5].href}`}>
        <GlowCapture>
          <Glow color="white">
            <div className={styles.card}>
              <div className={heroStyles.services__card__info}>
                <div className={heroStyles.services__card__info_title}>
                  {SERVICES[5].title}
                </div>

                <span className={heroStyles.services__card__price}>
                  {SERVICES[5].price}
                </span>
              </div>
              <img
                src={SERVICES[5].image}
                alt="service image"
                className={heroStyles.services__card__image}
              />
            </div>
          </Glow>
        </GlowCapture>
      </Link>
    </div>
  );
};

export default ServicesComponent;
