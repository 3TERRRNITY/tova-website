import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Image src="/TOVA-logo.svg" alt="logo" fill />
      </div>
      <div className={styles.header__text}>
        tova
        <br />
        про дизайн
      </div>
    </div>
  );
};

export default Header;
