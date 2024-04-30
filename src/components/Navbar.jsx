import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LogoImg from "../assets/Logo/Logo_dark.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useContextProvider } from "../utils/GlobleContextProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 3rem;
  /* 
  @media (max-width: 768px) {
    margin: 2rem 1rem;
  } */
`;

const Logo = styled(Link)`
  width: 6rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuBtn = styled.div`
  font-family: "Neue Montreal";
  height: 40px;
  width: 6rem;
  background-color: red;
  border-radius: 1.6rem;
  color: #fff;
  overflow: hidden;
  position: relative;
  top: 0;
  right: 0;
  z-index: 99999;
  cursor: pointer;
  .menu_slider {
    position: relative;
    height: 100%;
    width: 100%;
    .btn {
      height: 100%;
      width: 100%;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      user-select: none;
      &:nth-of-type(2) {
        position: absolute;
        top: 100%;
        background-color: #ffffff;
        color: #000;
      }
    }
  }
`;

const NavContainer = styled.div`
  position: absolute;
  background-color: #000000;
  top: 0;
  right: 0;
  height: 40px;
  width: 6rem;
  border-radius: 1.6rem;
  margin: 2rem 3rem;
  z-index: 99998;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 0;
  z-index: 9999;
`;

const Navlinks = styled.div`
  padding: 3rem;
  padding-top: 6rem;
  height: 100%;
  font-family: "Mona Sans";
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      list-style: none;
      a {
        font-size: 3rem;
        color: #fff;
      }
    }
  }
`;

const Links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/aboutus",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const { setCursorSettings } = useContextProvider();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);
  const containerRef = useRef(null);
  const backdropRef = useRef(null);
  const liRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    isOpen && toggleMenu();
  }, [location]);

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(isOpen);
    gsap.to(menuRef.current, {
      y: isOpen ? "-100%" : "0",
    });

    gsap.to(containerRef.current, {
      height: isOpen ? "80vh" : "40px",
      width: isOpen ? "30vw" : "6rem",
      top: isOpen ? "-20px" : "0",
      right: isOpen ? "-20px" : "0",
      delay: isOpen ? 0 : 0.4,
      duration: 0.6,
      ease: "power4.out",
      onComplete: () => setIsAnimating(false),
    });

    gsap.set(liRefs.current, {
      y: isOpen ? 100 : 0,
    });

    gsap.to(liRefs.current, {
      opacity: isOpen ? 1 : 0,
      y: 0,
      stagger: 0.05,
      duration: 0.75,
      delay: isOpen ? 0.25 : 0,
      ease: "power3.out",
    });

    gsap.to(backdropRef.current, {
      opacity: isOpen ? 1 : 0,
      display: isOpen ? "block" : "none",
      delay: isOpen ? 0 : 0.3,
      duration: 0.5,
    });
  }, [isOpen]);

  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={LogoImg} alt="Logo" />
        </Logo>
        <MenuBtn
          onClick={() => toggleMenu()}
          onMouseEnter={() =>
            setCursorSettings((prevSettings) => ({
              ...prevSettings,
              size: 1.5,
            }))
          }
          onMouseLeave={() => {
            setCursorSettings((prevSettings) => ({
              ...prevSettings,
              size: 1,
            }));
          }}
        >
          <div className="menu_slider" ref={menuRef}>
            <div className="btn">
              <p>Menu</p>
            </div>
            <div className="btn">
              <p>Close</p>
            </div>
          </div>
        </MenuBtn>

        <NavContainer ref={containerRef}>
          {/* {isOpen && ( */}
          <Navlinks>
            <ul>
              {Links.map((link, index) => (
                <li
                  key={index}
                  ref={(element) => (liRefs.current[index] = element)}
                >
                  <Link to={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </Navlinks>
          {/* )} */}
        </NavContainer>
      </Nav>

      <Backdrop ref={backdropRef} />
    </Container>
  );
};

export default Navbar;
