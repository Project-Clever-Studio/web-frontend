import React from "react";
import RouteTransition from "../components/RouteTransition";
import styled from "styled-components";

const Contact = () => {
  const Container = styled.div`
    padding: 0 3rem;
    padding-top: 8rem;
  `;

  const Header = styled.div`
    font-family: "Mona Sans";
    h1 {
      color: #585858;
      font-size: 2rem;
      font-weight: 500;
    }

    p {
      width: 35%;
      font-size: 3rem;
      margin-top: 0.8rem;
      font-weight: 600;
    }
  `;

  const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 4rem;
    width: 70%;

    div {
      display: flex;
      gap: 1rem;
      span {
        font-size: 1.5rem;
        font-family: "Mona Sans";
        .highlighted {
          color: #ff3c3c;
        }
      }
      .input {
        width: 35%;
        border-bottom: 2px solid #a0a0a0;
      }
    }
  `;

  return (
    <RouteTransition>
      <Container>
        <Header>
          <h1>Contact Us</h1>
          <p>Reach out to us for innovative media solutions.</p>
        </Header>
        <Form>
          <div>
            <span>
              My name is<span className="highlighted">*</span>
            </span>
            <div className="input"></div>
            <span>and i work for</span>
            <div className="input"></div>
          </div>
          <div>
            <span>
              My name is<span className="highlighted">*</span>
            </span>
            <div className="input"></div>
            <span>and i work for</span>
            <div className="input"></div>
          </div>
          <div>
            <span>
              My name is<span className="highlighted">*</span>
            </span>
            <div className="input"></div>
            <span>and i work for</span>
            <div className="input"></div>
          </div>
          <div>
            <span>
              My name is<span className="highlighted">*</span>
            </span>
            <div className="input"></div>
            <span>and i work for</span>
            <div className="input"></div>
          </div>
        </Form>
      </Container>
    </RouteTransition>
  );
};
export default Contact;
