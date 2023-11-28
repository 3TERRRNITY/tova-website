import React, { useEffect, useRef } from "react";
import { IMAGES } from "../../constants/constants";
import styles from "../../styles/hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Slider = () => {
  const firstContainer = useRef(null);
  const secondContainer = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "0",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent >= 0) {
      xPercent = -100;
    }
    gsap.set(firstContainer.current, { xPercent: xPercent });
    gsap.set(secondContainer.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };
  const brandsContainer = IMAGES.map(({ img, key }) => (
    <div className={styles.slider__item} key={key}>
      <img src={img} alt="brand" />
    </div>
  ));

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={slider}>
        <div className={styles.slider__container} ref={firstContainer}>
          {brandsContainer}
        </div>
        <div
          className={styles.slider__container_duplicate}
          ref={secondContainer}
        >
          {brandsContainer}
        </div>
      </div>
    </div>
  );
};

export default Slider;
