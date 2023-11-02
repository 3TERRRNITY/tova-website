import React, { Ref, forwardRef } from "react";
import styles from "./Separator.module.scss";
import { motion } from "framer-motion";
import { lineAnimation } from "../../common/animations";

export const Separator = () => {
  return <motion.div variants={lineAnimation} className={styles.separator} />;
};
