import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";

const Marquee = () => {
  const marqueeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["-30% end", "end start"],
  });

  const xPosition = useTransform(scrollYProgress, [0, 1], ["-5%", "-20%"]);
  const xPositionInv = useTransform(scrollYProgress, [0, 1], ["-20%", "-5%"]);

  scrollYProgress.on("change", (value) => {
    // console.log(value);
  });

  return (
    <MarqueeContainer>
      <MarqueeContent ref={marqueeRef}>
        <motion.div
          style={{ x: xPosition }}
          transition={{
            type: "spring",
            damping: 15,
            mass: 0.27,
            stiffness: 55,
          }}
        >
          <span>WELCOME TO CLEVER STUDIO, AAPKA SWAGAT HAI!</span>
        </motion.div>
        <motion.div
          style={{ x: xPositionInv }}
          transition={{
            type: "spring",
            damping: 15,
            mass: 0.27,
            stiffness: 55,
          }}
        >
          <span>WELCOME TO CLEVER STUDIO, AAPKA SWAGAT HAI!</span>
        </motion.div>
      </MarqueeContent>
    </MarqueeContainer>
  );
};

const MarqueeContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: max-content;
  background-color: #fff;
  margin-bottom: 6rem;
  @media (max-width: 768px) {
    height: 5rem;
    margin-bottom: 2.5rem;
  }
`;

const MarqueeContent = styled.div`
  white-space: nowrap;
  font-size: 8rem;
  font-weight: 600;
  color: #000;
  div {
    span {
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #000;
      color: transparent;
    }

    &:nth-child(2) {
      span {
        color: black;
      }
    }
  }
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export default Marquee;
