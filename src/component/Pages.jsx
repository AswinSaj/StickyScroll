"use client";
import React, { useRef, useEffect, useState } from "react";

import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import s7 from "../images/s7.jpg";
import s8 from "../images/s8.jpg";
import s9 from "../images/s9.jpg";
import s10 from "../images/s10.jpg";

import Column from "./Column";
import styles from "../component/Column.module.css";
import { useTransform, useScroll } from "framer-motion";

const images = [s2, s3, s4, s5, s6, s7, s8, s9, s10];

const Pages = () => {
  const container = useRef(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.7]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.5]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.spacer}></div>
        <div ref={container} className={styles.gallery}>
          <Column
            images={[images[0], images[1], images[2], images[5], images[5]]}
            y={y1}
          />
          <Column
            images={[
              images[3],
              images[4],
              images[5],
              images[5],
              images[4],
              images[5],
            ]}
            y={y2}
          />
          <Column
            images={[images[6], images[7], images[8], images[4]]}
            y={y3}
          />
          <Column
            images={[
              images[6],
              images[7],
              images[8],
              images[5],
              images[4],
              images[5],
            ]}
            y={y4}
          />
        </div>
        <div className={styles.spacer}></div>
      </div>
    </>
  );
};

export default Pages;
