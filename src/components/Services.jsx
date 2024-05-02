import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 10rem;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 8rem;

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
`;

const HorizontalWrapper = styled.div`
  width: max-content;
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  padding: 0 8rem;

  .card {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    height: 60vh;
    width: 20vw;
    background-color: #f0f0f0;
    border-radius: 30px;
    overflow: hidden;

    .image {
      opacity: 0.3;
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

    .tag {
      z-index: 2;
      padding: 0.8rem 1.5rem;
      width: fit-content;
      background-color: #fff;
      border-radius: 20px;
    }

    .info {
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 90%;
      span {
        line-height: 1.3;
      }

      .visit {
        position: relative;
        padding: 1rem 1.2rem;
        width: 10%;
        display: flex;
        gap: 1.5rem;
        min-width: fit-content;
        background-color: #fff;
        border-radius: 99px;

        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);

        svg {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
      }
    }

    &:hover {
      .image {
        opacity: 1;
      }
      .visit {
        width: 100%;

        svg {
          transform: rotate(45deg);
        }
      }
    }
  }
`;

const Cards = [
  {
    image:
      "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613575998061-0f59337425f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service: "App Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service: "Backend Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service: "Web Dev",
    info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const horizontalSection = useRef(null);

  useGSAP(() => {
    gsap.to(horizontalSection.current, {
      duration: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top -10%",
        pin: true,
        scrub: 0.01,
        end: "+=2000px",
      },
      x: -(horizontalSection.current.offsetWidth - window.innerWidth),
    });
  });

  return (
    <Container ref={containerRef}>
      <Title>
        <h2>
          <span>Our</span> <span>Services</span>
        </h2>
        <p>
          Clever Studio is your go-to destination for cutting-edge media
          services. Whether you're looking for branding, digital marketing, or
          creative content, we've got you covered.
        </p>
      </Title>
      <HorizontalWrapper ref={horizontalSection}>
        {Cards.map((item, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="tag">{item.service}</div>
            <div className="info">
              <span>{item.info}</span>
              <div className="visit">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3211 1.92894C16.3211 1.23858 15.7614 0.67894 15.0711 0.67894H3.82109C3.13073 0.67894 2.57109 1.23858 2.57109 1.92894C2.57109 2.6193 3.13073 3.17894 3.82109 3.17894H13.8211V13.1789C13.8211 13.8693 14.3807 14.4289 15.0711 14.4289C15.7614 14.4289 16.3211 13.8693 16.3211 13.1789V1.92894ZM1.81284 16.955L15.955 2.81282L14.1872 1.04506L0.0450716 15.1872L1.81284 16.955Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </HorizontalWrapper>
    </Container>
  );
};

export default Services;
