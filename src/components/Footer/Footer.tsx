import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
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
            <span>+</span>7 925 400-01-34
          </div>
          <div className={styles.footer__contacts__number}>
            info<span>@</span>tov-a.ru
          </div>
        </div>
      </div>

      <div className={styles.footer__icons}>
        <div className={styles.footer__icons_icon}>
          <Image
            src={white ? "/telegram-black.svg" : "/telegram.svg"}
            alt="telegram"
            fill
          />
        </div>
        <div className={styles.footer__icons_icon}>
          <Image
            src={white ? "/whatsup-black.svg" : "/whatsup.svg"}
            alt="whatsup"
            fill
          />
        </div>
        <div className={styles.footer__icons_icon}>
          <Image
            src={white ? "/inst-black.svg" : "/inst.svg"}
            alt="instagram"
            fill
          />
        </div>
      </div>
      <div className={styles.footer__addressContainer}>
        <div className={styles.footer__address}>Адрес</div>
        <div className={styles.footer__addressInfo}>
          121205, Г.Москва, вн.тер.г. Муниципальный Округ <br /> Можайский, тер
          Инновационного Центра <br /> Сколково, ул Нобеля, д. 5
        </div>
      </div>
    </div>
  );
};

export default Footer;
