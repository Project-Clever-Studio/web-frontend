import React from "react";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa6";

const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 5rem 9%;

  @media (max-width: 1080px) {
    padding: 2rem 10%;
    flex-direction: column;
    gap: 2.5rem;
  }

  @media (max-width: 1200px) {
    padding: 2rem 2%;
  }

  @media (max-width: 1500px) {
    padding: 2rem 5%;
  }
`;

const InfoWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    font-size: calc(21px + 0.2vw);
    font-weight: bold;
    font-weight: 500;
    margin: 0 0 1rem 0;
    color: #585858;
  }

  p:nth-child(2) {
    font-size: 5.5rem;
    font-weight: 600;
    max-width: 40%;
    margin: 0 0 2rem 0;
  }

  p:nth-child(3) {
    font-size: 1.7rem;
    font-weight: 500;
    max-width: 75%;
    line-height: 1.5;
    color: #333333;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1%.5;
    }

    p:nth-child(2) {
      max-width: 100%;
      font-size: 2rem;
      margin: 0 0 1rem 0;
    }

    p:nth-child(3) {
      max-width: 100%;
      font-size: 1.5rem;
      margin: 0;
    }
  }

  @media (max-width: 1080px) {
    width: 100%;
    align-items: flex-start;
    text-align: left;

    p:nth-child(2) {
      font-size: 4rem;
    }

    p:nth-child(3) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1500px) {
    p:nth-child(2) {
      font-size: 4rem;
    }

    p:nth-child(3) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1200px) {
    p:nth-child(2) {
      font-size: 3rem;
    }

    p:nth-child(3) {
      font-size: 1.5rem;
    }
  }
`;

const AccordianWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: calc(21px + 0.2vw);
    font-weight: bold;
    font-weight: 500;
  }

  & > * {
    &:nth-child(n) {
      border-top: 1px solid #00000067;
    }

    &:last-child {
      border-bottom: 1px solid #00000067;
    }
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Accordian = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #333333;
  }

  svg {
    font-size: 2rem;
    margin: 0 1rem 0 0;
    color: #1e1e1e;
  }

  @media (max-width: 768px) {
    height: 6rem;

    h2 {
      font-size: 1.45rem;
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;

const Services = () => {
  return (
    <Container>
      <InfoWrapper>
        <h2>Our Services</h2>
        <p>Digital Innovation</p>
        <p>
          When passion, courage, and craftsmanship are put into something,
          positive things will happen.
        </p>
      </InfoWrapper>
      <AccordianWrapper>
        <Accordian>
          <h2>Web Development</h2>
          <FaArrowDown />
        </Accordian>
        <Accordian>
          <h2>Digital Strategy</h2>
          <FaArrowDown />
        </Accordian>
        <Accordian>
          <h2>Branding & Identity</h2>
          <FaArrowDown />
        </Accordian>
        <Accordian>
          <h2>Content Production</h2>
          <FaArrowDown />
        </Accordian>
      </AccordianWrapper>
    </Container>
  );
};

export default Services;
