import React from "react";
import styles from "../component/Column.module.css";
import { motion } from "framer-motion";
const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((image, index) => (
        <div className="imgs">
          <img
            className={styles.imageContainer}
            key={index}
            src={image}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Column;
