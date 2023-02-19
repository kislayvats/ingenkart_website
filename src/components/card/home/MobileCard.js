import React from "react";
import { motion } from "framer-motion";
import { MobileWrapper } from "./Style";
import { ImageList } from "../../../config/ImageList";

const MobileCard = () => {
  const Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 25,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.3,
      },
    },
    onscreenMobile: {
      y: 25,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 0.08,
      },
    },
  };
  return (
    <MobileWrapper className="flexCenter mt2">
      <motion.div
        style={{ position: "relative", right: -78 }}
        whileHover={{ translateY: -6, scale: 1.043 }}
        variants={Variants}
        initial="offscreen"
        whileInView="onscreenMobile"
        viewport={{ once: true, amount: 0.8 }}>
        <img
          src={ImageList.Mobile_Left}
          loading="lazy"
          alt="mobile layout"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </motion.div>
      <motion.div
        style={{ zIndex: 2, top: -20, position: "relative" }}
        whileHover={{ scale: 1.02 }}
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <img
          src={ImageList.Mobile_Center}
          alt="mobile layout"
          loading="lazy"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </motion.div>{" "}
      <motion.div
        style={{ position: "relative", left: -78, zIndex: 1 }}
        whileHover={{ translateY: -6, scale: 1.043 }}
        variants={Variants}
        initial="offscreen"
        whileInView="onscreenMobile"
        viewport={{ once: true, amount: 0.8 }}>
        <img
          src={ImageList.Mobile_Right}
          alt="mobile layout"
          loading="lazy"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </motion.div>
    </MobileWrapper>
  );
};

export default MobileCard;
