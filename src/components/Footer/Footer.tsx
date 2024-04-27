import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import imageLoader from "../Loader/Loader";
interface IFooterProps {
  white?: boolean;
}
const Footer = ({ white }: IFooterProps) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__collab}>
        <div className={styles.footer__collaboration}>Сотрудничество</div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__contacts__number}>
            {white ? (
              <a href="tel:+74954100690" style={{ color: "#000" }}>
                <span>+</span>7 <span>(</span> 495 <span>)</span> 410-06-90
              </a>
            ) : (
              <a href="tel:+74954100690" style={{ color: "#fff" }}>
                <span>+</span>7 <span>(</span> 495 <span>)</span> 410-06-90
              </a>
            )}
          </div>
          {white ? (
            <a
              href="mailto:info@tova.agency"
              className={styles.footer__contacts__number}
              style={{ color: "#000" }}
            >
              info<span>@</span>tova.agency
            </a>
          ) : (
            <a
              href="mailto:info@tova.agency"
              className={styles.footer__contacts__number}
              style={{ color: "#fff" }}
            >
              info<span>@</span>tova.agency
            </a>
          )}
        </div>
      </div>

      <div className={styles.footer__icons}>
        <a
          href="https://t.me/tova_agency"
          target="_blank"
          className={styles.footer__icons_icon}
        >
          <Image
            src={white ? "/telegram-black.svg" : "/telegram.svg"}
            alt="telegram"
            fill
            loading="lazy"
          />
        </a>
        <a
          href=" https://vk.com/tova.agency"
          target="_blank"
          className={styles.footer__icons_icon}
        >
          <Image
            src={white ? "/vk-black.svg" : "/vk.svg"}
            alt="vk"
            fill
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/tova.agency/"
          target="_blank"
          className={styles.footer__icons_icon}
        >
          <Image
            src={white ? "/inst-black.svg" : "/inst.svg"}
            alt="instagram"
            fill
            loading="lazy"
          />
        </a>
      </div>
      <div className={styles.footer__addressContainer}>
        <div className={styles.footer__address}>Адрес</div>
        <div className={styles.footer__addressInfo}>
          121205, г. Москва, вн.тер.г. Муниципальный Округ <br /> Можайский, тер
          Инновационного Центра <br /> Сколково, ул Нобеля, д. 5
        </div>
      </div>
      <div className={styles.footer__iconsMobile}>
        <a
          href="https://t.me/tova_agency"
          target="_blank"
          className={styles.footer__iconsMobile_icon}
        >
          <Image
            src={white ? "/telegram-black.svg" : "/telegram.svg"}
            alt="telegram"
            fill
            loading="lazy"
          />
        </a>
        <a
          href=" https://vk.com/tova.agency"
          target="_blank"
          className={styles.footer__iconsMobile_icon}
        >
          <Image
            src={white ? "/vk-black.svg" : "/vk.svg"}
            alt="vk"
            fill
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/tova.agency/"
          target="_blank"
          className={styles.footer__iconsMobile_icon}
        >
          <Image
            src={white ? "/inst-black.svg" : "/inst.svg"}
            alt="instagram"
            fill
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
