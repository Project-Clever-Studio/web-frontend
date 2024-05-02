import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Container = styled.div`
  padding: 10rem 8rem;
  padding-bottom: 5rem;
`;

const Title = styled.div`
  width: 70%;
  h2 {
    font-size: 3rem;
    font-weight: 500;
    font-kerning: none;
    .line {
      overflow: hidden;
      width: fit-content;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  margin-left: auto;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  span {
    margin-right: 0.5rem;
  }
`;

const Info = styled.div`
  width: 35%;
  p {
    line-height: 1.4;
    font-size: 1.4rem;
  }
`;

const About = () => {
  const infoRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const infoSplit = SplitType.create(infoRef.current);
    const titleSplit = SplitType.create(titleRef.current);

    gsap.set(infoSplit.lines, {
      opacity: 0,
      y: 100,
    });

    gsap.set(titleSplit.words, {
      opacity: 0,
      y: 100,
    });

    gsap.to(infoSplit.lines, {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(titleSplit.words, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.01,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <Container>
      <Title>
        <h2 ref={titleRef}>
          We are a leading Creative Agency helps brands like yours to grow
          rapidly in this competitive world with our Highly skilled teams and
          Creative Directors.
        </h2>
      </Title>
      <Content>
        <Button>
          <span>About Us</span>
          <HiMiniArrowLongRight />
        </Button>
        <Info>
          <p ref={infoRef}>
            We’ve been helping brand's globally We are a leading Creative Agency
            helps brands like yours to grow rapidly in this competitive world
            with Creative Directors. our Highly skilled teams and Creative
            Directors We’ve been helping brand's globally We are a leading
            Creative Agency helps brands like yours to grow rapidly in this
            competitive world with Creative Directors. our Highly skilled teams
            and Creative Directors
          </p>
        </Info>
      </Content>
    </Container>
  );
};

export default About;
