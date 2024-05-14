import React from "react";
import styled from "styled-components";
import PortfolioSection from "../components/Sections/home/PortfolioSection";
import RouteTransition from "../components/RouteTransition";
import PortfolioMain from "../components/Sections/portfolio/main";

const Container = styled.div``;

const Portfolio = () => {
  return (
    <RouteTransition>
      <Container>
        <PortfolioMain />
      </Container>
    </RouteTransition>
  );
};

export default Portfolio;
