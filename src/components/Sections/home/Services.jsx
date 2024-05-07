import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import styled from "styled-components";

import BG1 from "../../../assets/Images/bg1.png";
import BG2 from "../../../assets/Images/bg2.png";

const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-top: 5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 50%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    display: none;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    padding-bottom: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
    margin-bottom: 3rem;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      display: block;
      height: 40vh;
      object-fit: cover;
      border-radius: 2rem;
    }
    h1 {
      margin-top: 1.5rem;
      font-size: 2rem;
      padding-bottom: 0.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  height: 70%;
  width: 80%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  overflow: hidden;
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.div`
  border: 1px solid #000000b5;
  padding: 0.8rem 1.5rem;
  width: max-content;
  border-radius: 2rem;
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const servicesData = [
  {
    name: "Product shoot",
    info: "Elevate your products with our expert Product Shoot service. From gadgets to gourmet, we capture it all with flair. Let our team showcase your offerings in the best light possible.",
    image: "https://deveb.co/static/media/vim.2c5e9ce4.jpg",
    // image: BG1,
    url: "",
    backgroundColor: "#fdbbff",
  },
  {
    name: "Web Development",
    info: "Transform your online presence with our Web Development service. We craft sleek, user-friendly websites tailored to your brand. From design to deployment, we ensure your site stands out and delivers a seamless experience for your visitors.",
    image: "https://deveb.co/static/media/dopop2.3974e9e7.jpg",
    // image: BG2,

    url: "",
    backgroundColor: "#bcbbff",
  },
  {
    name: "Social media marketing",
    info: "TBoost your brand's online presence with our Social Media Marketing service. We craft tailored strategies to engage your audience and drive results. From content creation to analytics, we help you make a lasting impact in the digital sphere",
    image: "https://deveb.co/static/media/newdopegood.6e57b4b4.jpg",
    url: "",
    backgroundColor: "#ffbbbb",
  },
  {
    name: "Nft creation",
    info: "Dive into the world of digital assets with our NFT Creation service. We help you turn your ideas into unique, blockchain-based collectibles. From concept to minting, we guide you through the process, ensuring your NFTs stand out in the digital marketplace.",
    image: "https://deveb.co/static/media/vim.2c5e9ce4.jpg",
    url: "",
    backgroundColor: "#bcbbff",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    const images = gsap.utils.toArray(".image:not(:first-child)");

    mm.add("(min-width: 768px)", () => {
      gsap.set(images, { yPercent: 101 });

      const animation = gsap.to(images, {
        yPercent: 0,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageWrapperRef.current,
        scrub: true,
        animation: animation,
      });
    });
  });

  return (
    <Conatiner ref={containerRef}>
      <ContentWrapper>
        {servicesData.map((item, index) => (
          <Content key={index}>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <p>{item.info}</p>
            <Button>See More</Button>
          </Content>
        ))}
      </ContentWrapper>
      <RightContainer>
        <ImageWrapper ref={imageWrapperRef}>
          {servicesData.map((item, index) => (
            <Image key={index} className="image">
              <img src={item.image} alt="" />
            </Image>
          ))}
        </ImageWrapper>
      </RightContainer>
    </Conatiner>
  );
};

export default Services;