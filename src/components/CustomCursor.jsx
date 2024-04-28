import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useContextProvider } from "../utils/GlobleContextProvider";
import styled from "styled-components";

const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1px solid #0000005e;
  border-radius: 50%;
  z-index: 9995;
  opacity: 1;
  pointer-events: none;
  @media (pointer: coarse) {
    display: none;
  }
`;

const CursorText = styled.p`
  font-family: "Manrope", sans-serif;
  color: #fff;
  position: fixed;
  z-index: 9996;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Cursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const { cursorSettings, bounds } = useContextProvider();

  const {
    size: cursorSize,
    isSticky: stickyCursor,
    color: cursorColor,
    isBlending: cursorBlending,
    text: cursorText,
  } = cursorSettings;

  //   const rotate = (distance) => {
  //     const angle = Math.atan2(distance.y, distance.x);
  //     gsap.to(cursorRef.current, {
  //       rotation: angle + "rad",
  //       duration: 0,
  //     });
  //   };

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = bounds;
      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };

      if (stickyCursor) {
        // rotate(distance);
        const absDistance = Math.max(
          Math.abs(distance.x),
          Math.abs(distance.y)
        );
        const newScaleX = gsap.utils.mapRange(
          0,
          width / 1,
          cursorSize,
          6,
          absDistance
        );
        const newScaleY = gsap.utils.mapRange(
          0,
          height / 1,
          cursorSize,
          5,
          absDistance
        );
        gsap.to(cursor, {
          x: center.x - cursorSize / 1 + distance.x * 0.1,
          y: center.y - cursorSize / 1 + distance.y * 0.1,
          scaleX: newScaleX,
          scaleY: newScaleY,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(cursor, {
          rotation: 0,
          x: clientX - 20,
          y: clientY - 20,
          scale: cursorSize,
          backgroundColor: cursorColor,
          mixBlendMode: cursorBlending ? "difference" : "normal",
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(textRef.current, {
          x: clientX - 15,
          y: clientY - 10,
          opacity: cursorText ? 1 : 0,
          scale: cursorText ? 1 : 0,
          duration: 0.44,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.25,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: cursorSize,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorSize]);

  return (
    <>
      <CustomCursor ref={cursorRef}></CustomCursor>
      <CursorText ref={textRef}>View</CursorText>
    </>
  );
};
export default Cursor;
