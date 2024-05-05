import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 8rem;
  padding-top: 15rem;
  height: 100svh;
`;

const Title = styled.div`
  font-size: 4rem;
  width: 60%;
  font-weight: 500;
`;

const ContentWrapper = styled.div`
  width: 45%;
  margin-left: auto;
  margin-top: 5rem;
`;

const Content = styled.div`
  margin-top: 3rem;
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
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const content = [
  {
    title: "Approach",
    info: "We approach each partnership with a holistic mindset. Every choice is intentional, interconnected, and integrates into brand platforms.",
  },
  {
    title: "Partnership",
    info: "We adapt to your needs with ease, enabling efficient workflows, and providing high-touch, high-quality partnerships for every client we work with.",
  },
  {
    title: "Seamless experience",
    info: " We make the most of every partnership, turning complex challenges into deeply integrated, highly collaborative experiences.",
  },
];

const Approch = () => {
  const titleRef = useRef(null);
  const contentRef = useRef([]);

  useEffect(() => {
    const titleSplit = SplitType.create(titleRef.current, {
      types: "words",
    });

    gsap.set(titleSplit.words, {
      opacity: 0,
      filter: "blur(5px)",
      y: 100,
    });

    gsap.set(contentRef.current, {
      opacity: 0,
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
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Container>
      <Title ref={titleRef}>
        We activate brands across global touchpoints, from campaigns to events
        and beyond.
      </Title>
      <ContentWrapper>
        {content.map((item, index) => (
          <Content
            key={index}
            ref={(element) => (contentRef.current[index] = element)}
          >
            <span>01</span>
            <h3>{item.title}</h3>
            <p>{item.info}</p>
          </Content>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default Approch;
