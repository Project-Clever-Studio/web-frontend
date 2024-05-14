import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useContextProvider } from "../../../utils/GlobleContextProvider";
import SplitType from "split-type";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 8rem;
  padding-top: 10rem;
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
    .title {
      text-align: left;
      grid-column: 4;
    }
    .btn {
      text-transform: capitalize;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
  @media (max-width: 1080px) {
    margin-top: 2rem;
  }
`;

const ProjectCard = styled.div`
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

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  a {
    background-color: #151515;
    color: #fff;
    padding: 0.8rem 1.3rem;
    border-radius: 2rem;
  }
`;

const projects = [
  {
    name: "Tech Bucket",
    src: "https://res.cloudinary.com/dzsocqtuc/image/upload/v1714649196/MacBook_Air_-_2_xxhjko.png",
    info: "Branding",
    year: "2023",
  },
  {
    name: "Demox Productions",
    src: "https://res.cloudinary.com/dzsocqtuc/image/upload/v1712916071/demoxPoster_juxvm0.jpg",
    info: "Branding",
    year: "2023",
  },
  {
    name: "Project 3",
    src: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Enibas/enibas-website.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707144175&s=b33de7522d0c6cd8dea562da13a57ea7",
    info: "Branding",
    year: "2023",
  },
  {
    name: "Project 4",
    src: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/sketch-website.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707141871&s=438e1e3662fb9fbb53df517ff93b4a4a",
    info: "Branding",
    year: "2023",
  },
];

const PortfolioMain = () => {
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
    <Container>
      <Title ref={titleRef}>
        <div className="main">
          <span>Creative</span>
          <span>Ventures</span>
        </div>
        <div className="sort">
          <div className="title">Sort by category</div>
          {categories.map((category, index) => (
            <div
              className={`btn ${activeCategory == index ? "active" : ""}`}
              onClick={() => {
                if (activeCategory == index) {
                  setActiveCategory(-1);
                  return;
                }
                setActiveCategory(index);
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </Title>
      <ProjectWrapper>
        {projects.map((item, index) => (
          <ProjectCard key={index}>
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
              <img src={item.src} alt="" />
            </ImageWrapper>
            <InfoWrapper>
              <div className="info">
                <p>{item.year}</p>•<p>{item.info}</p>
              </div>
              <h2>{item.name}</h2>
            </InfoWrapper>
          </ProjectCard>
        ))}
      </ProjectWrapper>
      <Button>
        <Link to="/portfolio">View All Projects</Link>
      </Button>
    </Container>
  );
};

export default PortfolioMain;
