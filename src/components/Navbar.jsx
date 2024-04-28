import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/Logo/Logo_dark.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContextProvider } from "../utils/GlobleContextProvider";

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99999;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 3rem;

  @media (max-width: 768px) {
    margin: 2rem 1rem;
  }
`;

const Logo = styled(Link)`
  width: 6rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuBtn = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-family: "Neue Montreal";
  position: relative;
  p {
    font-size: 1.2rem;
    margin-right: 2rem;
  }
  svg {
    font-size: 1.5rem;
  }
`;

const Navbar = () => {
  const { setCursorSettings, updateBounds, resetBounds } = useContextProvider();

  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={LogoImg} alt="Logo" />
        </Logo>
        <MenuBtn
          to="/aboutus"
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
          <p>Menu</p>
          <div
            onMouseEnter={(e) => updateBounds(e.target)}
            onMouseLeave={() => resetBounds()}
            className="bounds"
          ></div>
          <BiMenuAltLeft />
        </MenuBtn>
      </Nav>
    </Container>
  );
};

export default Navbar;
