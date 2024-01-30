import React from "react";
import styles from "../../styles/aimi.module.scss";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export const SplineAimi = () => (
  <div className={styles.aimi__hero_animations}>
    <div className={styles.aimi__hero_animationTop}>
      <Spline scene="https://prod.spline.design/rKbeR53cVfCP0iYN/scene.splinecode" />
    </div>
    <div className={styles.aimi__hero_animation}>
      <Spline scene="https://prod.spline.design/rKbeR53cVfCP0iYN/scene.splinecode" />
    </div>
  </div>
);
