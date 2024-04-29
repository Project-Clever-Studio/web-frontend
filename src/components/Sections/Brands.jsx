import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10rem 5rem;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-family: "Mona Sans";
  font-size: 3rem;
  font-weight: 600;
`;

const BrandsWrapper = styled.div`
  margin: 0 15rem;
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
      border: 1px solid #0000001c;
      img {
        width: 15rem;
        transition: 0.25s ease-in-out;
        &:hover {
          scale: 1.1;
        }
      }
    }
  }
`;

const Brands = () => {
  return (
    <Container>
      {/* <Title>Brands We've Elevated Together</Title> */}

      <BrandsWrapper>
        <ul>
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
          </li>
        </ul>
      </BrandsWrapper>
    </Container>
  );
};

export default Brands;
