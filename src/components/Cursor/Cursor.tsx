"use client";

import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.scss";

import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={40}
      innerScale={2.5}
      innerStyle={{
        zIndex: "9999",
        mixBlendMode: "difference",
        backgroundColor: "#fff",
      }}
      outerStyle={{ display: "none" }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default Cursor;
