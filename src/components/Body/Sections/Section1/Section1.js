import React from "react";
import "./assets/css/section1.css";
import { useSpring } from "react-spring";
import { motion } from "framer-motion";

import sideme from "./assets/images/side-me.svg";

export default function Section1() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 1 },
  };
  return (
    <div className="section1">
      <div className="side-image-container">
        <img src={sideme} alt="not found!" />
      </div>
      <div className="me-container">
        <div className="hello">
          <motion.div
            style={props}
            transition={{ duration: 1 }}
            className="intro"
          >
            Hello🖐
          </motion.div>
        </div>
        <div className="about-me">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1.5 }}
            className="intro text-color-red"
          >
            I'm
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 2.5 }}
            variants={variants}
            className="intro name text-color-red"
            whileHover={{ scale: 1.2, duration: 1.5 }}
          >
            Atul.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
