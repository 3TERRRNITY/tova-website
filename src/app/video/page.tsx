"use client";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import styles from "../../styles/video.module.scss";
import SplineAnim from "./spline";
import { motion, useAnimation } from "framer-motion";

const video = () => {
  const control = useAnimation();
  const underlineVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };
  const Underline = () => (
    <motion.div
      style={{
        width: "0%",
        height: "2px",
        backgroundColor: "white",
        position: "absolute",
        bottom: "-2px",
      }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 1, delay: 7 }}
    />
  );

  useEffect(() => {
    const animateWords = async () => {
      await control.start({ y: 0 });
    };

    animateWords();
  }, []);
  return (
    <>
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.hero}>
          <div className={styles.title}>
            <div className={styles.firstLine}>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                МЫ
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                СНИМАЕМ
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              СЮЖЕТЫ
            </motion.div>
          </div>

          <div className={styles.animation}>
            <SplineAnim />
          </div>
          <div className={styles.subtitle}>
            <div>
              <div className={styles.line}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  КОТОРЫЕ
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 4 }}
                >
                  ДЕРЖАТ
                </motion.div>
              </div>

              <div className={styles.line}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 5 }}
                >
                  В
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 6 }}
                >
                  <motion.span
                    style={{ textDecoration: "none", position: "relative" }}
                    variants={underlineVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 6.5, type: "tween" }}
                  >
                    ФОКУСЕ
                    <Underline />
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whitePageContainer}>
        <Form />
        <Footer white />
      </div>
    </>
  );
};

export default video;
