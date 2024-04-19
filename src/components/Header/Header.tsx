import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
interface IHeaderProps {
  white?: boolean;
}
const Header = ({ white }: IHeaderProps) => {
  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.header__link}>
        <div className={styles.header__logo}>
          {white ? (
            <Image src="/TOVA-logo-black.svg" alt="logo" fill loading="lazy" />
          ) : (
            <Image src="/TOVA-logo.svg" alt="logo" fill loading="lazy" />
          )}
        </div>
      </Link>

      <Link href={"https://t.me/tova_agency"} target="_blank">
        {white ? (
          <div className={styles.header__text_black}>
            tova
            <br />
            про дизайн
          </div>
        ) : (
          <div className={styles.header__text}>
            tova
            <br />
            про дизайн
          </div>
        )}
      </Link>
    </div>
  );
};

export default Header;
