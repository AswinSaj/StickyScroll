import hoverEffect from "hover-effect";
import React, { useEffect, useRef, useState } from "react";
import s7 from "../images/s7.jpg";
import s3 from "../images/s3.jpg";

import styles from "../component/Distort.module.css";

const Distort = () => {
  const wrapperRef = useRef(null);
  const [hoverDistort, setHoverDistort] = useState("");

  useEffect(() => {
    if (wrapperRef.current) {
      setHoverDistort(
        new hoverEffect({
          parent: wrapperRef.current,
          intensity: 0.5,
          image1: s3,
          image2: s7,
          displacementImage: s7,
        })
      );
    }
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper} ref={wrapperRef}></div>
    </div>
  );
};

export default Distort;
