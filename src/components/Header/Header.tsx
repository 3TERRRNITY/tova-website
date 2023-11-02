import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <div className={styles.header__logo}>
          <Image src="/TOVA-logo.svg" alt="logo" fill />
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
