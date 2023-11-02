import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__collab}>
        <div className={styles.footer__collaboration}>Сотрудничество</div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__contacts__number}>
            +7 925 400-01-34
          </div>
          <div className={styles.footer__contacts__number}>info@tov-a.ru</div>
        </div>
      </div>

      <div className={styles.footer__icons}>
        <div className={styles.footer__icons_icon}>
          <Image src="/telegram.svg" alt="telegram" fill />
        </div>
        <div className={styles.footer__icons_icon}>
          <Image src="/whatsup.svg" alt="telegram" fill />
        </div>
        <div className={styles.footer__icons_icon}>
          <Image src="/inst.svg" alt="telegram" fill />
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
