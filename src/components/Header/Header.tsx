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
            <Image src="/TOVA-logo-black.svg" alt="logo" fill />
          ) : (
            <Image src="/TOVA-logo.svg" alt="logo" fill />
          )}
        </div>
      </Link>

      <div className={styles.header__text}>
        tova
        <br />
        про дизайн
      </div>
    </div>
  );
};

export default Header;
