import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useContextProvider } from "../utils/GlobleContextProvider";
import LogoAni from "../assets/video/clever_studio_logo_anim.mp4";

const Container = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100dvh;
  position: fixed;
  z-index: 9999999;
  color: #fff;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
  }

  @media (max-width: 768px) {
    .logo {
      margin: 2rem 1.2rem;
      font-size: 1rem;
    }
    .qoute {
      max-width: 70%;
      top: 70px;
      left: 20px;
      font-size: 1.5rem;
    }
    .loading {
      left: 20px;
    }
    .counter {
      position: fixed;
      right: 20px;
      bottom: 20px;
      display: flex;
      height: 80px;
      font-size: 80px;
    }
  }
`;

const Loader = styled.div`
  background-color: #ffffff39;
  border-radius: 0.5rem;
  height: 4px;
  width: 30%;
  position: absolute;
  top: 56%;
  left: 50%;
  overflow: hidden;
  transform: translateX(-50%);
  .loader_bar {
    width: 0%;
    height: 100%;
    background-color: #c5c5c5;
  }
`;

const Preloader = () => {
  const { setPreloader } = useContextProvider();
  const containerRef = useRef(null);
  const vidRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      vidRef.current.play();

      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.5,
        delay: 2,
        ease: "power2.inOut",
        onUpdate: function () {
          var progress = this.progress();
          if (progress >= 0.5) {
            setPreloader(false);
          }
        },
      });
    }, 2000);
  }, []);

  return (
    <Container ref={containerRef}>
      <video ref={vidRef} src={LogoAni} muted></video>
    </Container>
  );
};

export default Preloader;
