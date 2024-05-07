import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useContextProvider } from "../utils/GlobleContextProvider";

const Container = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100dvh;
  position: fixed;
  z-index: 9999999;
  color: #fff;

  .counter {
    position: fixed;
    left: 50px;
    bottom: 130px;
    display: flex;
    height: 100px;
    font-size: 100px;
    line-height: 102px;
    clip-path: polygon(0 0, 100% 0, 100% 100px, 0 100px);
    font-weight: 400;
    font-weight: 500;
  }

  .digit,
  .num1offset1,
  .num1offset2 {
    position: relative;
  }

  .digit {
    top: -12px;
  }

  .num1offset1 {
    right: -12px;
  }

  .num1offset2 {
    right: -10px;
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
  /* border-radius: 0.5rem; */
  height: 4rem;
  width: 95%;
  position: absolute;
  bottom: 5%;
  left: 50%;
  /* overflow: hidden; */
  transform: translateX(-50%);
  .loader_bar {
    width: 0%;
    height: 100%;
    background-color: #fff;
  }
`;

const Preloader = () => {
  const { setPreloader } = useContextProvider();
  const loaderRef = useRef(null);
  const containerRef = useRef(null);
  const counter1 = useRef(null);
  const counter2 = useRef(null);
  const counter3 = useRef(null);

  const count3Num = Array.from({ length: 29 }, (_, i) => i % 10);
  count3Num.push(0);

  useEffect(() => {
    const tl = gsap.timeline();
    function animate(counter, duration, delay = 0) {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    }

    animate(counter3.current, 5);
    animate(counter2.current, 6);
    animate(counter1.current, 2, 4);

    tl.to(loaderRef.current.querySelector(".loader_bar"), {
      width: "100%",
      duration: 5,
      ease: "power2.inOut",
    })
      .to(".digit", {
        top: "-150px",
        stagger: {
          amount: 0.25,
        },
        delay: 1,
        duration: 1,
        ease: "power4.inOut",
      })
      .to(
        loaderRef.current,
        {
          opacity: 0,
        },
        "<.5"
      )
      .to(containerRef.current, {
        yPercent: -100,
        onComplete: () => setPreloader(false),
      });
  }, []);

  return (
    <Container ref={containerRef}>
      <Loader ref={loaderRef}>
        <div className="loader_bar"></div>
      </Loader>
      <div className="counter">
        <div ref={counter1} className="digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div ref={counter2} className="digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div ref={counter3} className="digit">
          {count3Num.map((number, index) => (
            <div key={index} className="num">
              {number}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Preloader;
