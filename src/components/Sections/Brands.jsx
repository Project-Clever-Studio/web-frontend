import React, { useState } from "react";
import styled from "styled-components";
import { useContextProvider } from "../../utils/GlobleContextProvider";
import { color } from "framer-motion";

const Container = styled.div`
  padding: 10rem 5rem;
  @media (max-width: 1080px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  font-family: "Mona Sans";
  font-size: 3rem;
  font-weight: 600;
`;

const BrandsWrapper = styled.div`
  margin: 0 8vw;
  overflow: hidden;
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
    margin-left: 12px;
    margin-top: -2px;
    li {
      width: 20%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -2px;
      margin-bottom: -2px;
      border-width: 0 0 1px 1px;
      border-style: solid;
      border: 1px solid #00000014;
      img {
        width: 15rem;
        transition: 0.25s ease-in-out;
        &:hover {
          scale: 1.1;
        }
      }
    }
  }

  @media (max-width: 1080px) {
    margin: 0 2rem;
    ul {
      li {
        width: 50%;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 0rem;

    ul {
      margin: 0;
      li {
        margin: 0;
        width: 50%;
      }
    }
  }
`;

const Brands = () => {
  const { setCursorSettings, updateBounds, resetBounds } = useContextProvider();
  const [brands, setBrands] = useState([
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-1-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-2-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-3-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-4-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-5-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-6-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-7-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-8-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-9-dark.png",
    },
    {
      url: "https://demo.themetorium.net/html/nui/assets/img/clients/client-10-dark.png",
    },
  ]);

  return (
    <Container>
      {/* <Title>Brands We've Elevated Together</Title> */}

      <BrandsWrapper>
        <ul>
          {brands.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={() =>
                  setCursorSettings((prevSettings) => ({
                    ...prevSettings,
                    size: 2,
                    color: "#00000022",
                    border: "transparent",
                  }))
                }
                onMouseLeave={() => {
                  setCursorSettings((prevSettings) => ({
                    ...prevSettings,
                    size: 1,
                    color: "transparent",
                    border: "#00000057",
                  }));
                }}
              >
                <img src={item.url} alt="" />
              </li>
            );
          })}
          {/* <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-2-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-3-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-10-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-1-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-3-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-3-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-10-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-1-dark.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://demo.themetorium.net/html/nui/assets/img/clients/client-2-dark.png"
              alt=""
            />
          </li> */}
        </ul>
      </BrandsWrapper>
    </Container>
  );
};

export default Brands;
