import React from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";
interface IButtonProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const Button = ({ isActive, setIsActive }: IButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    setIsActive(!isActive);
  };
  return (
    <a onClick={handleClick} className={styles.button}>
      <motion.div
        className={styles.button__slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
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
