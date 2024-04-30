import React from "react";
import styled from "styled-components";
import PortfolioSection from "../components/Sections/home/PortfolioSection";
import RouteTransition from "../components/RouteTransition";

const Container = styled.div``;

const Portfolio = () => {
  return (
    <RouteTransition>
      <Container>
        <PortfolioSection />
      </Container>
    </RouteTransition>
  );
};

export default Portfolio;
