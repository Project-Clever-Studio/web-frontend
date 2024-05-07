import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import BG1 from "../assets/Images/bg1.png";
import BG2 from "../assets/Images/bg2.png";
import BG3 from "../assets/Images/bg3.png";

const Container = styled.div`
  padding-top: 10rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 5rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 8rem;
  margin-bottom: 3rem;
  h2 {
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
    span {
      line-height: 1;
      display: block;
    }
  }
  p {
    width: 35%;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    h2 {
      font-size: 2.8rem;
    }
    p {
      width: 100%;
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
`;

const HorizontalWrapper = styled.div`
  width: max-content;
  display: flex;
  gap: 1rem;
  padding: 0 8rem;

  .card {
    opacity: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1.5rem;
    height: 60vh;
    width: 20vw;
    background-color: #f0f0f0;
    border-radius: 30px;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);

    .image {
      /* opacity: 0.3; */
      /* filter: blur(5px); */

      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .info {
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 95%;

      .tag {
        padding: 0.8rem 1.5rem;
        width: fit-content;
        background-color: #fff;
        border-radius: 20px;
        font-family: "Mona Sans";
        font-size: 0.9rem;
        font-weight: 500;
      }

      span {
        color: #f0f0f0;
        font-family: "Mona Sans";
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.4;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 0;
    .card {
      width: 80vw;
    }
  }
`;

const Cards = [
  {
    // image:
    //   "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: BG1,
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    // image:
    //   "https://images.unsplash.com/photo-1613575998061-0f59337425f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: BG2,
    service: "App Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    // image:
    //   "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: BG3,
    service: "Backend Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image: BG1,
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image: BG2,
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image: BG1,
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image: BG2,
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const horizontalSection = useRef(null);

  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.to(horizontalSection.current, {
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top -10%",
        pin: true,
        scrub: 0.6,
        end: "+=1200px",
      },
      x: -(horizontalSection.current.offsetWidth - window.innerWidth),
    });
  });

  const animateCards = (id) => {
    // const tl = gsap.timeline({
    //   defaults: {},
    // });
    if (!id) {
      gsap.to(cardsRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.05,
        ease: "expo.inOut",
      });
      return;
    } else {
      gsap.to(cardsRef.current, {
        opacity: 0.5,
        scale: 1,
        duration: 0.05,
        ease: "expo.inOut",
      });
      gsap.to(cardsRef.current[id], {
        opacity: 1,
        scale: 1.025,
        duration: 0.05,
        ease: "expo.inOut",
      });
    }
  };

  return (
    <Container ref={containerRef}>
      <Title>
        <h2>
          <span>Our</span> <span>Services</span>
        </h2>
        {/* <p>
          Clever Studio is your go-to destination for cutting-edge media
          services. Whether you're looking for branding, digital marketing, or
          creative content, we've got you covered.
        </p> */}
      </Title>
      <HorizontalWrapper ref={horizontalSection}>
        {Cards.map((item, index) => (
          <div
            className="card"
            key={index}
            ref={(element) => (cardsRef.current[index] = element)}
            onMouseEnter={() => animateCards(index)}
            onMouseLeave={() => animateCards(null)}
          >
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="info">
              <div className="tag">{item.service}</div>
              <span>{item.info}</span>
            </div>
          </div>
        ))}
      </HorizontalWrapper>
    </Container>
  );
};

export default Services;
