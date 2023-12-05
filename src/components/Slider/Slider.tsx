import React from "react";
import { IMAGES } from "../../constants/constants";
import styles from "./Slider.module.scss";
import Marquee from "react-fast-marquee";

const SliderContainer = () => {
  const brandsContainer = IMAGES.map(({ img, key }) => (
    <div className={styles.carousel__item} key={img}>
      <img src={img} alt="brand" />
    </div>
  ));

  return <Marquee>{brandsContainer}</Marquee>;
};

export default SliderContainer;
