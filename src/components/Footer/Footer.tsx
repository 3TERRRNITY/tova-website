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
            {white ? (
              <a href="tel: +79254000134" style={{ color: "#000" }}>
                <span>+</span>7 925 400-01-34
              </a>
            ) : (
              <a href="tel: +79254000134" style={{ color: "#fff" }}>
                <span>+</span>7 925 400-01-34
              </a>
            )}
          </div>
          <div className={styles.footer__contacts__number}>
            info<span>@</span>tova.agency
          </div>
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
          />
        </a>
        <a
          href=" https://vk.com/tova.agency"
          target="_blank"
          className={styles.footer__icons_icon}
        >
          <Image src={white ? "/vk-black.svg" : "/vk.svg"} alt="vk" fill />
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
          />
        </a>
      </div>
      <div className={styles.footer__addressContainer}>
        <div className={styles.footer__address}>Адрес</div>
        <div className={styles.footer__addressInfo}>
          121205, г.Москва, вн.тер.г. Муниципальный Округ <br /> Можайский, тер
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
          />
        </a>
        <a
          href=" https://vk.com/tova.agency"
          target="_blank"
          className={styles.footer__iconsMobile_icon}
        >
          <Image src={white ? "/vk-black.svg" : "/vk.svg"} alt="vk" fill />
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
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
