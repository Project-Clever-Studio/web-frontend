import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MarqueeContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 12rem;
  background-color: #fff;
  margin-bottom: 6rem;
  @media (max-width: 768px) {
    height: 5rem;
    margin-bottom: 2.5rem;
  }
`;

const MarqueeContent = styled.div`
  display: inline-flex;
  white-space: nowrap;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10rem;
  font-weight: 600;
  color: #000;
  div {
    padding-right: 1rem;
  }
  span {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    color: transparent;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Marquee = () => {
  const marqueeRef = useRef(null);

  let lastScroll = 0;
  const currentScroll = window.scrollY;

  useEffect(() => {
    const contentWidth = marqueeRef.current.firstChild.offsetWidth; // Using firstChild for a single content's width

    const animation = gsap
      .timeline({ repeat: -1, paused: true })
      .to(marqueeRef.current, {
        x: `-=${contentWidth}`,
        duration: contentWidth / 200,
        ease: "none",
        modifiers: {
          x: (x) => {
            if (parseFloat(x) <= -contentWidth) {
              marqueeRef.current.appendChild(marqueeRef.current.firstChild);
              return (x % contentWidth) + contentWidth;
            }
            return x;
          },
        },
      });

    if (currentScroll > lastScroll) {
      animation.play();
      console.log("up");
    } else {
      console.log("down");
      animation.reverse();
    }
    console.log({ currentScroll: currentScroll, lastScroll: lastScroll });
    lastScroll = currentScroll;

    return () => animation && animation.kill();
  }, [currentScroll]);
  return (
    <MarqueeContainer>
      <MarqueeContent ref={marqueeRef}>
        <div>MODERN CREATIVE STUDIO</div>
        <div>MODERN CREATIVE STUDIO</div>
        <div>MODERN CREATIVE STUDIO</div>
        <div>MODERN CREATIVE STUDIO</div>
        <div>MODERN CREATIVE STUDIO</div>
        <div>MODERN CREATIVE STUDIO</div>
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;
