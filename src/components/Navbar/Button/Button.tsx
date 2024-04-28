import React, { useEffect, useState } from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";

interface IButtonProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const Button = ({ isActive, setIsActive }: IButtonProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <a onClick={handleClick} className={styles.button}>
      <motion.div
        className={styles.button__slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={
          !isSmallScreen ? { duration: 0.5, ease: [0.76, 0, 0.24, 1] } : {}
        }
      >
        <div className={styles.button__el}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={styles.button__el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </a>
  );
};

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

export default Button;
