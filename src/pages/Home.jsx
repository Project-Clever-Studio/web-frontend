import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import SplitType from "split-type";
import RouteTransition from "../components/RouteTransition";

const Container = styled.div``;

const Hero = styled.div`
  height: 200vh;
  position: relative;
  @media (max-width: 768px) {
    height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  padding: 0 3rem;
  padding-top: 6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1080px) {
    padding: 0 1rem;
    padding-top: 8rem;
    justify-content: unset;
    height: max-content;
  }
`;

const HeaderText = styled.h1`
  font-family: "Mona Sans";
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11.5vw;
  letter-spacing: -1px;
  width: 100%;
  white-space: nowrap;
  .line {
    overflow: hidden;
  }
`;

const Content = styled.div`
  display: flex;
  .info {
    width: 35%;
    padding-bottom: 2rem;
    font-family: "Mona Sans";
    h2 {
      font-size: 3rem;
      font-size: clamp(1.5rem, 3vw, 3rem);
      line-height: 1;
      padding-bottom: 1.8rem;
      font-weight: 500;
    }
    p {
      padding-bottom: 1.8rem;
      font-size: 1.2rem;
    }
    span {
      display: flex;
      align-items: center;
      width: fit-content;
      border: 1px solid #000000;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      svg {
        margin-left: 0.5rem;
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width: 1080px) {
    padding-top: 1rem;
    .info {
      width: 100%;
      padding-bottom: 1rem;
      h2 {
        line-height: 1.3;
        padding-bottom: 1rem;
      }
    }
  }
`;

const ShowReel = styled.div`
  z-index: 10;
  perspective-origin: 50%;
  transform-origin: 95% 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
  position: sticky;
  bottom: 0%;
  left: 0%;
  right: 0%;
  scale: 0.5;
  .videoWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    video {
      width: 100%;
      object-fit: contain;
    }
  }
  @media (max-width: 1080px) {
    position: unset;
    transform-origin: unset;
    height: fit-content;
    transform: none !important;
    .videoWrapper {
      display: block;
    }
  }
`;

const AboutSection = styled.div``;

const Home = () => {
  const showReelRef = useRef(null);
  const headerTextRef = useRef(null);

  useGSAP(() => {
    const headerTextSplit = SplitType.create(headerTextRef.current);

    gsap.to(showReelRef.current, {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: showReelRef.current,
        start: "top 50%",
        end: "bottom 10%",
        scrub: 0.5,
      },
    });

    gsap.set(headerTextSplit.chars, {
      yPercent: 100,
    });

    gsap.to(headerTextSplit.chars, {
      yPercent: 0,
      duration: 0.75,
      stagger: 0.03,
      ease: "power4.Out",
    });
  });

  return (
    <RouteTransition>
      <Container>
        <Hero>
          <ContentWrapper>
            <HeaderText ref={headerTextRef}>Clever Studio</HeaderText>
            <Content>
              <div className="info">
                <h2>
                  Clever Studio, your one-stop destination for cutting-edge
                  creative media solutions.
                </h2>
                <p>
                  Our team of talented designers, developers, and branding
                  experts work tirelessly to bring your vision to life. Whether
                  you're looking to create a stunning website that captures your
                  brand essence.
                </p>
                <span>
                  Reach us <FaArrowRight />
                </span>
              </div>
            </Content>
          </ContentWrapper>
          <ShowReel ref={showReelRef}>
            <div className="videoWrapper">
              <video
                src="https://video-previews.elements.envatousercontent.com/h264-video-previews/2aaa15f9-96db-4d86-8d47-cbc766cb8dfa/36822602.mp4"
                muted
                autoPlay
                playsInline
                loop
              ></video>
            </div>
          </ShowReel>
        </Hero>
        <AboutSection>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
          <h1>afasfasfasf</h1>
        </AboutSection>
      </Container>
    </RouteTransition>
  );
};

export default Home;
