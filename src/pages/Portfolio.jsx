import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useContextProvider } from "../utils/GlobleContextProvider";
import RouteTransition from "../components/RouteTransition";

import TechBucket from "../assets/portfolio/techbucket.png";
import interLude from "../assets/portfolio/interlude.png";
import Vasma3D from "../assets/portfolio/Vasma3D.png";
import BMPS from "../assets/portfolio/bmps.png";
import Demox from "../assets/portfolio/demox.png";
import Chemin from "../assets/portfolio/chemin.png";
import igloaded from "../assets/portfolio/igloaded.png";

const Container = styled.div`
  padding: 10rem 3rem 4rem 3rem;
  @media (max-width: 1080px) {
    padding: 0 2rem;
    padding-top: 6rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 4rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .main {
    display: flex !important;
    flex-direction: column;

    span {
      font-size: 7rem;
      font-weight: 600;
      text-transform: uppercase;
      display: block;
      line-height: 1;
      /* &:last-child {
        padding-left: 15rem;
      } */
    }
  }
  .sort {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .btn {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 2rem;
      border: 1px solid #000;
      border-radius: 99px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0, 0.55, 0.45, 1);
    }
    .active {
      background-color: #000;
      color: #fff;
    }
  }
  @media (max-width: 1080px) {
    font-size: 4rem;
    span {
      &:last-child {
        padding-left: 8rem;
      }
    }
  }
  @media (max-width: 768px) {
    font-size: 2.8rem;
    span {
      &:last-child {
        padding-left: 5rem;
      }
    }
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;

  .animateWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (max-width: 1080px) {
    margin-top: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  width: calc(50% - 1rem);
  height: fit-content;
  &:nth-child(even) {
    margin-top: 6rem;
  }
  @media (max-width: 1080px) {
    width: calc(50% - 0.8rem);
    &:nth-child(even) {
      margin-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    &:nth-child(even) {
      margin-top: 0;
    }
    margin-bottom: 2rem;
    &:last-child {
      margin: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 1.3rem;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    transition: 0.4s scale ease-in-out;
  }
  &:hover {
    img {
      scale: 1.03;
    }
  }
`;

const InfoWrapper = styled.div`
  margin-top: 1.3rem;
  .info {
    display: flex;
    padding: 0.5rem 0;
    p {
      padding: 0 0.3rem;
      font-size: 1rem;
      font-weight: 400;
      &:first-child {
        padding-left: 0;
      }
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  @media (max-width: 1080px) {
    margin-top: 0.5rem;
    .info {
      padding: 0.3rem 0;
      p {
        padding: 0 0.3rem;
        font-size: 1rem;
        font-weight: 400;
        &:first-child {
          padding-left: 0;
        }
      }
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;

const projects = [
  {
    name: "InterLude",
    src: interLude,
    info: "Video Shoot / Edit",
    year: "2024",
    url: "https://www.youtube.com/watch?v=ch0fTOwQD30&t=3s",
  },

  {
    name: "3D Gaming Room",
    src: Vasma3D,
    info: "3D Production",
    year: "2023",
    url: "https://www.instagram.com/p/C5Rh6qwSAtz/?img_index=1",
  },
  {
    name: "BMPS Lan Event",
    src: BMPS,
    info: "Video Shoot / Edit",
    year: "2023",
    category: 1,
    url: "https://www.youtube.com/watch?v=hw1lp4vJX-8&t=12s",
  },
  {
    name: "Demox Productions",
    src: Demox,
    info: "Web Development",
    year: "2023",
    category: 6,
    url: "https://www.demoxproductions.com/",
  },
  {
    name: "Tech Bucket",
    src: TechBucket,
    info: "Web Development",
    year: "2024",
    category: 1,
    url: "https://techbucket.ca/",
  },
  {
    name: "igloaded",
    src: igloaded,
    info: "Web Development",
    year: "2023",
    url: "https://igloaded.com/",
  },
  {
    name: "Chemin Esports",
    src: Chemin,
    info: "Web Development",
    year: "2023",
    category: 6,
    url: "http://cheminesports.com/",
  },
];

const Portfolio = () => {
  const { setCursorSettings } = useContextProvider();

  const categories = [
    "Web",
    "App",
    "Video Edits",
    "Logos",
    "3d / 2d",
    "Gfx / Vfx",
    "Marketing",
    "Contract",
  ];

  const [activeCategory, setActiveCategory] = useState(-1);

  const titleRef = useRef(null);

  useEffect(() => {
    const splitTitle = SplitType.create(
      titleRef.current.querySelector(".main"),
      {
        types: "chars",
      }
    );

    gsap.set(splitTitle.chars, {
      opacity: 0,
      filter: "blur(5px)",
      y: 100,
    });

    gsap.to(splitTitle.chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.02,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: titleRef.current.querySelector(".main"),
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <RouteTransition>
      <Container>
        <Title ref={titleRef}>
          <div className="main">
            <span>Creative</span>
            <span>Ventures</span>
          </div>
          <div className="sort">
            {categories.map((category, index) => (
              <div
                className={`btn ${activeCategory == index + 1 ? "active" : ""}`}
                onClick={() => {
                  if (activeCategory == index + 1) {
                    setActiveCategory(-1);
                    return;
                  }
                  setActiveCategory(index + 1);
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </Title>
        <ProjectWrapper>
          <div className="animateWrapper">
            {projects
              .filter((project) =>
                activeCategory == -1
                  ? project
                  : project.category == activeCategory
              )
              .map((item) => (
                <ProjectCard key={item.src}>
                  <ImageWrapper
                    onMouseEnter={() =>
                      setCursorSettings((prevSettings) => ({
                        ...prevSettings,
                        size: 2,
                        color: "#00000021",
                        border: "transparent",
                        text: "View",
                        isBlending: false,
                        blur: true,
                      }))
                    }
                    onMouseLeave={() => {
                      setCursorSettings((prevSettings) => ({
                        ...prevSettings,
                        size: 1,
                        color: "transparent",
                        border: "#00000057",
                        text: "",
                        isBlending: true,
                        blur: false,
                      }));
                    }}
                  >
                    <a href={item.url} target="_blank">
                      <img src={item.src} alt="" />
                    </a>
                  </ImageWrapper>
                  <InfoWrapper>
                    <div className="info">
                      <p>{item.year}</p>•<p>{item.info}</p>
                    </div>
                    <h2>{item.name}</h2>
                  </InfoWrapper>
                </ProjectCard>
              ))}
          </div>
        </ProjectWrapper>
      </Container>
    </RouteTransition>
  );
};

export default Portfolio;
