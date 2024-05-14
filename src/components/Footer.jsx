import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import styled from "styled-components";

import {
  FaInstagram,
  FaFacebookF,
  FaDiscord,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 70vh;
  position: relative;
  background-color: #000;
  overflow: hidden;
  padding: 5rem 5rem 0 5rem;

  .text {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 12%;
    user-select: none;
    span {
      font-size: 13vw;
      /* color: #ffff; */

      .line {
        .word {
          .char {
            color: #fff;
          }
          &:nth-child(2) {
            font-style: italic;
          }
        }
      }
    }
  }

  .sticky {
    margin: 0 auto;
    width: 100%;
    height: 17vh;
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ffffff76;
    background-color: #000;

    .links {
      width: 20%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        width: fit-content;
        font-size: 1rem;
        color: #fff;
      }
    }

    .socials {
      display: flex;
      gap: 1.5rem;
    }

    .copyright {
      font-size: 1rem;
      color: #fff;
    }
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  .items {
    z-index: 40;
    ul {
      li {
        padding: 0.6rem 0;
        list-style: none;
        opacity: 1;
        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);

        a {
          font-size: 1.4rem;
          text-decoration: none;
          color: #fff;
        }
      }
      &:hover {
        li {
          &:is(:not(:hover)) {
            opacity: 0.5;
          }
        }
      }
    }
    &:nth-child(2) {
      text-align: right;
    }
  }
`;

const Footer = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const splitType = SplitType.create(textRef.current, {
      tagName: "span",
    });

    // gsap.fromTo(
    //   stickyRef.current,
    //   { yPercent: 10 },
    //   {
    //     yPercent: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top 80%",
    //       end: "bottom bottom",
    //       // markers: true,
    //       scrub: true,
    //     },
    //   }
    // );

    gsap.fromTo(
      splitType.chars,
      {
        yPercent: 55,
      },
      {
        yPercent: 8,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: splitType.chars,
          start: "top bottom",
          end: "50% 93%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <Container ref={containerRef}>
      <Content>
        <div className="items">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/aboutus">About</Link>
            </li>
            <li>
              <Link href="/ourteam">Our team</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="items">
          <ul>
            <li>
              <Link href="">Approach</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="">Clients</Link>
            </li>
            <li>
              <Link href="">Showreel</Link>
            </li>
            <li>
              <Link href="">Careers</Link>
            </li>
          </ul>
        </div>
      </Content>
      <div className="text">
        <span ref={textRef}>Clever Studio</span>
      </div>
      <div className="sticky" ref={stickyRef}>
        <div className="links">
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="socials">
          <a href="" className="social">
            <FaInstagram size={22} color="#fff" />
          </a>
          <a href="" className="social">
            <FaFacebookF size={22} color="#fff" />
          </a>
          <a href="" className="social">
            <FaDiscord size={22} color="#fff" />
          </a>
          <a href="" className="social">
            <FaLinkedinIn size={22} color="#fff" />
          </a>
          <a href="" className="social">
            <FaXTwitter size={22} color="#fff" />
          </a>
        </div>
        <div className="copyright">
          © 2024 Clever Studio. All rights reserved.
        </div>
      </div>
    </Container>
  );
};

export default Footer;
