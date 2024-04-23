"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import styles from "../../styles/video.module.scss";
import SplineAnim from "./spline";
import { motion, useAnimation } from "framer-motion";
import { Separator } from "../../components/Separator/Separator";
import commonStyles from "../../styles/common.module.scss";

const video = () => {
  const control = useAnimation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState("/telegram.png");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageUrl("/telegram_notification.png");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);
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
  const services = [
    {
      title: "реклама",
      href: "/video/ad.png",
      link: "/video#ad",
    },
    {
      title: "фильмы и телевидение",
      href: "/video/films.png",
      link: "/video#films",
    },
    {
      title: "музыкальные клипы",
      href: "/video/clips.png",
      link: "/video#clips",
    },
    {
      title: "всестороннее производство",
      href: "/video/prod.png",
      link: "/video#prod",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.hero}>
          <div className={commonStyles.telegramLogo}>
            <a href="https://t.me/tova_agency" target="_blank">
              <motion.img
                src={imageUrl}
                alt="telegram"
                loading="lazy"
                whileHover={{ rotate: isHovered ? -45 : 0 }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              />
            </a>
          </div>
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
        <Separator />
        <div className={styles.body}>
          <div className={styles.text}>
            мы предоставляем комплексные услуги видеопродакшна, охватывающие всё
            от съемки реклам и музыкальных клипов до создания сериалов и
            разнообразного видеоконтента. В нашей команде — профессионалы с
            глубокими знаниями и опытом в области рекламы, кинематографа и
            медиа-производства. Мы гордимся нашей способностью превращать
            творческие замыслы в реальность, создавая визуально захватывающие и
            эмоционально мощные произведения.
          </div>
          <div className={styles.services}>
            <div className={styles.services_title}>УСЛУГИ</div>
            <div className={styles.services_grid}>
              {services.map(({ title, href, link }) => (
                <HoverableTitle
                  href={href}
                  link={link}
                  title={title}
                  key={title}
                />
              ))}
            </div>
          </div>
          <div className={styles.slider}>
            <div className={styles.slider__text}>
              <div className={styles.slider__text_title}>реклама</div>
              <div className={styles.slider__text_description}>
                специализируемся на производстве рекламных роликов, которые
                выделяются на фоне традиционного контента. Создаем рекламу,
                ориентированную на конкретную целевую аудиторию, с акцентом на
                креативность и уникальный подход.
              </div>
            </div>
            <div className={styles.slider__video}>
              <video
                autoPlay
                muted={true}
                loop
                playsInline={true}
                ref={videoRef}
                preload="auto"
              >
                <source type="video/mp4" src="/video/ad_1.mp4" />
              </video>
            </div>
            <div className={styles.slider__grid}>
              <VideoPlayer src="/video/ad_1.mp4" />
              <VideoPlayer src="/video/ad_2.mp4" />
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

const HoverableTitle = ({
  title,
  href,
  link,
}: {
  title: string;
  href: string;
  link: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          height: "100%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ zIndex: "100", width: "217px" }}>{title}</div>

        {isHovered && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "20px",
              zIndex: "100",
              textDecoration: "underline",
              justifySelf: "end",
            }}
          >
            Перейти
          </motion.span>
        )}

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: `url(${href}) no-repeat center center`,
              backgroundSize: "contain",
              zIndex: "1",
              filter: "revert",
              opacity: "0.7",
            }}
          />
        )}
      </div>
    </a>
  );
};

const VideoPlayer = ({ src }: any) => {
  const videoRef = useRef<any>(null);

  const toggleFullScreen = () => {
    const videoElement = videoRef.current;

    if (videoElement?.requestFullscreen) {
      videoElement?.requestFullscreen();
    } else if (videoElement?.mozRequestFullScreen) {
      /* Firefox */
      videoElement?.mozRequestFullScreen();
    } else if (videoElement?.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      videoElement?.webkitRequestFullscreen();
    } else if (videoElement?.msRequestFullscreen) {
      /* IE/Edge */
      videoElement.msRequestFullscreen();
    }
  };

  return (
    <div className={styles.slider__grid_video} onClick={toggleFullScreen}>
      <video
        autoPlay
        muted={true}
        loop
        playsInline={true}
        ref={videoRef}
        preload="auto"
      >
        <source type="video/mp4" src={src} />
      </video>
      <a>перейти</a>
    </div>
  );
};
