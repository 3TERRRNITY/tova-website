"use client";

import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.scss";

import AnimatedCursor from "react-animated-cursor";
interface ICursor {
  bgColor?: string;
}
const Cursor = ({ bgColor }: ICursor) => {
  return (
    <div className={styles.cursor}>
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
    </div>
  );
};

export default Cursor;
