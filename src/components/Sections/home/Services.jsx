import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import webDev from "../../../assets/Services/webDev.png";
import appDev from "../../../assets/Services/appDev.png";
import editingThumbnail from "../../../assets/Services/editingThumbnail.png";
import logoThumbnail from "../../../assets/Services/logoThumbnail.png";
import photoshootThumbnail from "../../../assets/Services/photoshootThumbnail.png";
import SMMThumbnail from "../../../assets/Services/SMMThumbnail.png";
import { Link } from "react-router-dom";

const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8rem;
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-top: 2rem;
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
  width: 80%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    display: none;
  }
  h1 {
    font-size: 4rem;
    font-weight: 500;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    padding-bottom: 1rem;
    line-height: 1.6;
  }
  .more_info {
    .info {
      display: flex;
      align-items: center;
      p {
        padding: 0;
        font-size: 1rem;
        padding-bottom: 0.7rem;
      }
      .service_add_info {
        padding-right: 0.5rem;
        font-weight: 600;
      }
    }
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
      font-size: 1.7rem;
      padding-bottom: 0.5rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.2;
    }
    .more_info {
      .info {
        display: block;
        p {
          padding-right: 0;
          &:last-child {
            padding-left: 0.6rem;
          }
        }
      }
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

const Button = styled(Link)`
  border: 1px solid #000000b5;
  padding: 0.8rem 1.5rem;
  width: max-content;
  border-radius: 2rem;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
  }
`;

const servicesData = [
  {
    name: "Website development ",
    info: "At Clever Studio, we specialize in creating high-performance, visually stunning websites that engage users and drive business growth. Whether you need a sleek, user-friendly design or a robust e-commerce platform, our expert team has the skills and experience to deliver exceptional results.",
    image: webDev,
    backgroundColor: "#DCAE96",
    addInfo: [
      {
        name: "Custom Website Design",
        info: "Tailored to your brand and business needs.",
      },
      {
        name: "E-commerce Solutions",
        info: "Secure, scalable, and optimized for sales.",
      },
      {
        name: "Responsive Design",
        info: "Ensuring a seamless experience across all devices.",
      },
      {
        name: "Content Management Systems",
        info: "Easy to manage and update.",
      },
      {
        name: "SEO Optimization",
        info: "Boost your visibility and ranking on search engines.",
      },
      {
        name: "Maintenance & Support",
        info: "Keeping your site updated and running smoothly.",
      },
    ],
    btnText: "Start Your Project",
  },
  {
    name: "App development",
    info: "Transform your online presence with our Web Development service. We craft sleek, user-friendly websites tailored to your brand. From design to deployment, we ensure your site stands out and delivers a seamless experience for your visitors.",
    image: appDev,
    backgroundColor: "#d4f3b7",
    addInfo: [
      {
        name: "iOS and Android Development",
        info: "Custom apps for all major platforms.",
      },
      {
        name: "UI/UX Design",
        info: "Beautiful and user-friendly interfaces.",
      },
      {
        name: "Cross-Platform Development",
        info: "Maximize your reach with apps that work on multiple devices.",
      },
      {
        name: "App Testing & QA",
        info: "Ensuring flawless performance.",
      },
      {
        name: "Post-Launch Support",
        info: "Continuous improvement and updates.",
      },
    ],
    btnText: "Learn More About Our Apps",
  },
  {
    name: "Video editing",
    info: "TBoost your brand's online presence with our Social Media Marketing service. We craft tailored strategies to engage your audience and drive results. From content creation to analytics, we help you make a lasting impact in the digital sphere",
    image: editingThumbnail,
    backgroundColor: "#DFC5FE",
    addInfo: [
      {
        name: "Promotional Videos",
        info: "Showcase your products and services.",
      },
      {
        name: "Corporate Videos",
        info: "Professional content for internal and external communications.",
      },
      {
        name: "Social Media Content",
        info: "Engaging videos for platforms like Instagram, Facebook, and YouTube.",
      },
      {
        name: "Event Highlights",
        info: "Capturing the best moments of your events.",
      },
      {
        name: "Animation & Effects",
        info: "Adding a creative touch to your videos.",
      },
    ],
    btnText: "Transform Your Videos",
  },
  {
    name: "Logo designing",
    info: "Dive into the world of digital assets with our NFT Creation service. We help you turn your ideas into unique, blockchain-based collectibles. From concept to minting, we guide you through the process, ensuring your NFTs stand out in the digital marketplace.",
    image: logoThumbnail,
    backgroundColor: "#A0D9EF",
    addInfo: [
      {
        name: "Custom Logo Design",
        info: "Unique and tailored to your brand.",
      },
      {
        name: "Brand Identity Development",
        info: "Cohesive designs that tell your story.",
      },
      {
        name: "Multiple Concepts & Revisions",
        info: "Ensuring you get the perfect design.",
      },
      {
        name: "High-Resolution Files",
        info: "For all your branding needs.",
      },
    ],
    btnText: "Get Your Custom Logo",
  },
  {
    name: "Social media management",
    info: "Elevate your products with our expert Product Shoot service. From gadgets to gourmet, we capture it all with flair. Let our team showcase your offerings in the best light possible. Elevate your products with our expert Product Shoot service. From gadgets to gourmet, we capture it all with flair. Let our team showcase your offerings in the best light possible",
    image: SMMThumbnail,
    backgroundColor: "#FDFD96",
    addInfo: [
      {
        name: "Content Creation",
        info: "High-quality posts, stories, and videos.",
      },
      {
        name: "Community Management",
        info: "Engaging with your audience and building relationships.",
      },
      {
        name: "Strategy Development",
        info: "Tailored social media strategies for your brand.",
      },
      {
        name: "Analytics & Reporting",
        info: "Measuring success and optimizing performance.",
      },
    ],
    btnText: "Boost Your Social Media",
  },
  {
    name: "Professional shoots",
    info: "Transform your online presence with our Web Development service. We craft sleek, user-friendly websites tailored to your brand. From design to deployment, we ensure your site stands out and delivers a seamless experience for your visitors.",
    image: photoshootThumbnail,
    backgroundColor: "#f4978e",
    addInfo: [
      {
        name: "Studio Photography",
        info: "Perfect lighting and settings for professional results.",
      },
      {
        name: "Lifestyle Photography",
        info: "Showcasing products in real-life scenarios.",
      },
      {
        name: "High-Resolution Images",
        info: "Ready for print and digital use.",
      },
      {
        name: "Post-Processing",
        info: "Enhancing images to perfection.",
      },
    ],
    btnText: "Book Your Product Shoot",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contents = [];

  useGSAP(() => {
    let mm = gsap.matchMedia();
    const images = gsap.utils.toArray(".image:not(:first-child)");
    const body = document.body;

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

    contents.forEach((element, index) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 30%",
        end: "bottom 30%",
        onEnter: () =>
          gsap.to(body, {
            backgroundColor: servicesData[index].backgroundColor,
          }),

        onLeave: () => {
          if (index === contents.length - 1) {
            gsap.to(body, {
              backgroundColor: "#fff",
            });
          }
        },
        onLeaveBack: () => {
          if (index === 0) {
            gsap.to(body, {
              backgroundColor: "#fff",
            });
          } else {
            gsap.to(body, {
              backgroundColor: servicesData[index - 1].backgroundColor,
            });
          }
        },
      });
    });
  });

  return (
    <Conatiner ref={containerRef}>
      <ContentWrapper>
        {servicesData.map((item, index) => (
          <Content key={index} ref={(element) => (contents[index] = element)}>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <p>{item.info}</p>
            <div className="more_info">
              {item.addInfo.map((item, index) => (
                <div className="info">
                  <p className="service_add_info">• {item.name}:</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
            <Button to="/quote">{item.btnText}</Button>
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
