import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 8rem;
  padding: 0 3rem;
  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0 0.5rem;
  }
`;

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  border-radius: 2rem;
  padding: 5rem 4rem;
  height: 100%;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.div`
  font-size: 4rem;
  width: 60%;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.7rem;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 50vh;
  border-radius: 1.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 20vh;
  }
`;

const Content = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const InfoWrapper = styled.div`
  opacity: 0.4;
  margin-top: 3rem;
  &:first-child {
    margin-top: 0;
    opacity: 1;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    left: -1rem;
    top: -0.1rem;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    &:first-child {
      margin-top: 2rem;
      opacity: 1;
    }
    span {
      font-size: 0.8rem;
      left: -1rem;
      top: -0.1rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const content = [
  {
    title: "Approach",
    info: "We approach each partnership with a holistic mindset. Every choice is intentional, interconnected, and integrates into brand platforms.",
    image: "https://deveb.co/static/media/vim.2c5e9ce4.jpg",
  },
  {
    title: "Partnership",
    info: "We adapt to your needs with ease, enabling efficient workflows, and providing high-touch, high-quality partnerships for every client we work with.",
    image: "https://deveb.co/static/media/dopop2.3974e9e7.jpg",
  },
  {
    title: "Seamless experience",
    info: " We make the most of every partnership, turning complex challenges into deeply integrated, highly collaborative experiences.",
    image: "https://deveb.co/static/media/newdopegood.6e57b4b4.jpg",
  },
];

const Approch = () => {
  const titleRef = useRef(null);
  const contentRef = useRef([]);

  useGSAP(() => {
    const titleSplit = SplitType.create(titleRef.current, {
      types: "words",
    });

    gsap.set(titleSplit.words, {
      opacity: 0,
      filter: "blur(5px)",
      y: 100,
    });

    gsap.set(contentRef.current, {
      filter: "blur(5px)",
      y: 100,
    });

    const titleAnimation = gsap.to(titleSplit.words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.02,
      ease: "expo.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const contentAnimation = gsap.to(contentRef.current, {
      y: 0,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const animateTab = (index) => {
    if (index !== null) {
      gsap.to(contentRef.current, { opacity: 0.6 });
      gsap.to(contentRef.current[index], {
        opacity: 1,
      });
    } else {
      gsap.to(contentRef.current[0], {
        opacity: 1,
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title ref={titleRef}>
          We activate brands across global touchpoints, from campaigns to events
          and beyond.
        </Title>
        <ContentWrapper>
          <ImageWrapper>
            <img src={content[0].image} alt="" />
          </ImageWrapper>
          <Content>
            {content.map((item, index) => (
              <InfoWrapper
                key={index}
                ref={(element) => (contentRef.current[index] = element)}
                onMouseEnter={() => animateTab(index)}
                onMouseLeave={() => animateTab()}
              >
                <span>01</span>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </InfoWrapper>
            ))}
          </Content>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Approch;
