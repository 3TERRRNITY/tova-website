import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.scss";

interface ICarousel {
  images: string[];
  width: number;
}

const Carousel = ({ images, width }: ICarousel) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <Swiper slidesPerView={"auto"} spaceBetween={20} loop>
          {images.map((image, index) => (
            <SwiperSlide
              style={{ width: `${width}px` }}
              className={styles.slider_slide}
              key={`${image.toLowerCase()}-${index}`}
            >
              <img src={image} alt={image} className={styles.slider_image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
