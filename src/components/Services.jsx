import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div``;

const HorizontalWrapper = styled.div``;

const Services = () => {
  const horizontalSection = useRef(null);

  return (
    <Container>
      <HorizontalWrapper ref={horizontalSection}></HorizontalWrapper>
    </Container>
  );
};

export default Services;
