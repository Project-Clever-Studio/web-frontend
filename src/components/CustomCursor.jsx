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
  border: 1px solid;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9995;
  /* @media (pointer: coarse) {
    display: none;
  } */
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
    color: cursorColor,
    isBlending: cursorBlending,
    text: cursorText,
    border: borderColor,
    blur,
  } = cursorSettings;

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX - 20,
        y: clientY - 20,
        scale: cursorSize,
        borderColor: borderColor,
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
      <CustomCursor
        style={{ backdropFilter: blur ? "blur(5px)" : "unset" }}
        ref={cursorRef}
      ></CustomCursor>
      <CursorText ref={textRef}>View</CursorText>
    </>
  );
};
export default Cursor;
