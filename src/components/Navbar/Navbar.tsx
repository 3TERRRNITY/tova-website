import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__top}>
        <div className={styles.navbar__top__moreLinks}>
          <div className={styles.navbar__top__col}>
            <div className={styles.navbar__top__link}>
              <Link href="/about">о нас</Link>
            </div>
            <div className={styles.navbar__top__link}>
              <Link href="/services">услуги</Link>
            </div>
            <div className={styles.navbar__top__link}>
              <Link href="/projects">проекты</Link>
            </div>
            <div className={styles.navbar__top__link}>
              <Link href="/contacts">контакты</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navbar__bottom}>
        <div className={styles.navbar__bottom__home}>
          <div className={styles.navbar__bottom__hamburger}>Menu</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
