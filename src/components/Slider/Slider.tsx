import React from "react";
import { IMAGES } from "../../constants/constants";
import styles from "./Slider.module.scss";
import Marquee from "react-fast-marquee";

const SliderContainer = () => {
  const brandsContainer = IMAGES.map(({ img, key }) => (
    <div className={styles.carousel__item} key={`${img}-${key}`}>
      <img src={img} alt="brand" loading="lazy" />
    </div>
  ));

  return (
    <Marquee className={styles.carousel}>
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
      {brandsContainer}
    </Marquee>
  );
};

export default SliderContainer;
