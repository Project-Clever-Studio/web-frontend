import React from "react";
import RouteTransition from "../components/RouteTransition";
import styled from "styled-components";

const Container = styled.div``;

const About = () => {
  return (
    <RouteTransition>
      <Container>About</Container>
    </RouteTransition>
  );
};

export default About;
