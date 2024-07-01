import styled from "styled-components";
import RouteTransition from "../components/RouteTransition";
import Ritesh from "../../public/Images/ritesh.png";
import RiteshBlue from "../../public/Images/ritesh_light_purple.png";

//React icons
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaX } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [painting, setPainting] = useState({
    color: "#fff",
    backgroundColor: "#ffffff",
  });

  const Container = styled(motion.div)`
    padding: 10rem 6rem 4rem 6rem;
    @media (max-width: 1080px) {
      padding: 0 2rem;
      padding-top: 6rem;
    }
    @media (max-width: 768px) {
      padding: 1rem;
      padding-top: 6rem;
    }
  `;

  const InnerContent = styled.div`
    .divider {
      height: 1px;
      margin: 3rem 0;
      background-color: rgba(0, 0, 0, 0.1);
    }

    @media (width < 768px) {
      .divider {
        margin: 2rem 0;
      }
    }
  `;

  const Title = styled.div`
    .tags {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .tag {
        font-weight: 500;
        padding: 0.3rem 1rem;
        border-radius: 99px;
        border: 1px solid black;
      }
    }

    .heading {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;

      span {
        font-size: 3.5rem;
        font-weight: 600;
        line-height: 1;
      }
    }

    @media (width < 530px) {
      .heading {
        span {
          font-size: 3rem;
        }
      }
    }
    @media (width < 455px) {
      .tags {
        gap: 0.3rem;
        .tag {
          font-size: 0.7rem;
        }
      }

      .heading {
        span {
          font-size: 2.5rem;
        }
      }
    }
  `;

  const Description = styled.div`
    display: flex;
    gap: 4rem;

    .descriptiveHeading {
      display: flex;
      flex-direction: column;
      flex-basis: 40%;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .additional {
      font-size: 1.2rem;
      line-height: 1.4;
      flex-basis: 60%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (width < 768px) {
      flex-direction: column;
      gap: 1rem;
      .descriptiveHeading,
      .additional {
        flex-basis: auto;
      }
    }

    @media (width < 568px) {
      .descriptiveHeading {
        font-size: 1.1rem;
      }
      .additional {
        font-size: 1rem;
      }
    }
  `;

  const TeamSection = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    .member {
      position: relative;
      height: max-content;
      width: 100%;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50px 0 50px 0;
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1.5rem 0;
        transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        h1 {
          width: fit-content;
          font-size: 1.4rem;
          font-weight: 600;
          padding: 0.3rem 1rem;
          border-radius: 99px;
          border: 1px solid black;
        }

        p {
          font-size: 1.2rem;
        }

        @media (width < 568px) {
          align-items: center;
          padding: 0.5rem 1rem 1rem 1rem;

          h1 {
            font-size: 1.2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }

      .hover {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 50px 0 50px 0;
        background-color: black;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

        .upper {
          padding: 2rem;

          .socials {
            display: flex;
            gap: 0.8rem;
            .social {
              width: fit-content;
              display: flex;
              padding: 0.8rem;
              background-color: white;
              border-radius: 99px;
              transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
              cursor: pointer;

              &:hover {
                transform: scale(1.15);
              }
            }
          }

          .info {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 2rem;
            .quote {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              font-weight: 400;
              color: white;
            }
          }
        }

        .lower {
          .details {
            h1 {
              border: 1px solid white;
              color: white;
            }
            p {
              color: white;
            }
          }
        }

        @media (width < 300px) {
          .upper {
            padding: 1rem 1.25rem;

            .socials {
              gap: 0.5rem;

              .social {
                padding: 0.6rem;
              }
            }

            .info {
              padding-top: 1rem;

              .quote {
                font-size: 0.8rem;
              }
            }
          }
        }
      }

      @media (width > 568px) {
        &:hover {
          transform: scale(1.05);
        }
      }

      &:hover {
        .details {
          padding: 1.5rem 2rem;
        }
        .hover {
          opacity: 1;
        }
      }
    }

    @media (width < 568px) {
      gap: 1rem;
    }

    @media (width < 380px) {
      grid-template-columns: 1fr;
    }
  `;

  return (
    <RouteTransition>
      <Container>
        <InnerContent>
          <Title>
            <div className="tags">
              <div className="symb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1422 14.1421C10.3914 17.8929 5.30433 20 0 20C5.30433 20 10.3914 22.1071 14.1422 25.8579C17.8929 29.6086 20 34.6957 20 40C20 34.6957 22.1071 29.6086 25.8578 25.8579C29.6086 22.1071 34.6957 20 40 20C34.6957 20 29.6086 17.8929 25.8578 14.1421C22.1071 10.3914 20 5.30433 20 0C20 5.30433 17.8929 10.3914 14.1422 14.1421Z"
                    fill="#0c0c0c"
                  />
                </svg>
              </div>
              <div className="tag">WHO</div>
              <div className="tag">WE</div>
              <div className="tag">ARE</div>
            </div>
            <h1 className="heading">
              <span>A TEAM OF</span>
              <span>CREATIVE HEADS</span>
            </h1>
          </Title>
          <div className="divider"></div>
          <Description>
            <h1 className="descriptiveHeading">
              <span>
                CLEVER STUDIO STARTED AS A PROJECT
                <br />
                TO DELIVER CREATIVE GOODS ALL OVER INDIA.
              </span>
            </h1>
            <div className="additional">
              <span>
                We built advanced tooling to optimize validator management for
                teams of two. But, due to the sheer difficulty of installing and
                running nodes, our little VaaS company grew crazy fast.
              </span>
              <span>
                We quickly realized that VaaS can’t work for a network because
                it centralizes control. We turned our platform into a SaaS tool
                so that anyone could launch and run their own node with full
                control over where and on what infrastructure it runs. Now,
                network operators can run their own nodes; BlockJoy just takes
                the headaches away.
              </span>
            </div>
          </Description>
          <TeamSection>
            <div className="member">
              <img src={Ritesh} alt="a-man-in-suit" />
              <div className="details">
                <h1>Depressed Man</h1>
                <p>Destroyer & UFO</p>
              </div>
              <div className="hover">
                <div className="upper">
                  <div className="socials">
                    <div className="social">
                      <FaLinkedinIn />
                    </div>
                    <div className="social">
                      <FaXTwitter />
                    </div>
                    <div className="social">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="info">
                    <div className="quote">
                      <span>
                        It's better to regret something you have done than
                        something you haven't.
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        - Butthole Surfers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="details">
                    <h1>"Lundley!"</h1>
                    <p>Destroyer & UFO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="member">
              <img src={RiteshBlue} alt="a-man-in-suit" />
              <div className="details">
                <h1>Depressed Man</h1>
                <p>Destroyer & UFO</p>
              </div>
              <div className="hover">
                <div className="upper">
                  <div className="socials">
                    <div className="social">
                      <FaLinkedinIn />
                    </div>
                    <div className="social">
                      <FaXTwitter />
                    </div>
                    <div className="social">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="info">
                    <div className="quote">
                      <span>
                        It's better to regret something you have done than
                        something you haven't.
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        - Butthole Surfers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="details">
                    <h1>"Lundley!"</h1>
                    <p>Destroyer & UFO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a-man-in-suit"
              />
              <div className="details">
                <h1>Depressed Man</h1>
                <p>Destroyer & UFO</p>
              </div>
              <div className="hover">
                <div className="upper">
                  <div className="socials">
                    <div className="social">
                      <FaLinkedinIn />
                    </div>
                    <div className="social">
                      <FaXTwitter />
                    </div>
                    <div className="social">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="info">
                    <div className="quote">
                      <span>
                        It's better to regret something you have done than
                        something you haven't.
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        - Butthole Surfers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="details">
                    <h1>"Lundley!"</h1>
                    <p>Destroyer & UFO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a-man-in-suit"
              />
              <div className="details">
                <h1>Depressed Man</h1>
                <p>Destroyer & UFO</p>
              </div>
              <div className="hover">
                <div className="upper">
                  <div className="socials">
                    <div className="social">
                      <FaLinkedinIn />
                    </div>
                    <div className="social">
                      <FaXTwitter />
                    </div>
                    <div className="social">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="info">
                    <div className="quote">
                      <span>
                        It's better to regret something you have done than
                        something you haven't.
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        - Butthole Surfers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="details">
                    <h1>"Lundley!"</h1>
                    <p>Destroyer & UFO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a-man-in-suit"
              />
              <div className="details">
                <h1>Depressed Man</h1>
                <p>Destroyer & UFO</p>
              </div>
              <div className="hover">
                <div className="upper">
                  <div className="socials">
                    <div className="social">
                      <FaLinkedinIn />
                    </div>
                    <div className="social">
                      <FaXTwitter />
                    </div>
                    <div className="social">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="info">
                    <div className="quote">
                      <span>
                        It's better to regret something you have done than
                        something you haven't.
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        - Butthole Surfers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="details">
                    <h1>"Lundley!"</h1>
                    <p>Destroyer & UFO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a-man-in-suit"
              />
              <div className="details">
                <h1>Depressed Man</h1>
                <p>Destroyer & UFO</p>
              </div>
              <div className="hover">
                <div className="upper">
                  <div className="socials">
                    <div className="social">
                      <FaLinkedinIn />
                    </div>
                    <div className="social">
                      <FaXTwitter />
                    </div>
                    <div className="social">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="info">
                    <div className="quote">
                      <span>
                        It's better to regret something you have done than
                        something you haven't.
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        - Butthole Surfers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="details">
                    <h1>"Lundley!"</h1>
                    <p>Destroyer & UFO</p>
                  </div>
                </div>
              </div>
            </div>
          </TeamSection>
        </InnerContent>
      </Container>
    </RouteTransition>
  );
};
export default Team;
