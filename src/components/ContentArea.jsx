import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  padding: 40px;
  color: #000;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 999999;
  margin-top: 10vh;
  height: 100vw;
  width: 40vw;

  h1 {
    font-family: "League Spartan";
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
    text-transform: none;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
  }

  P {
    font-family: "Source Sans Pro";
    font-weight: normal;
    /* max-width: 400px; */
    font-weight: normal;
    line-height: 150%;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    /* padding-left: 100px; */
    margin-top: 40px !important;
    @media (max-width: 800px) {
      width: 40vw;
    }
  }

  h1,
  p {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }

    @media (min-width: 600px) {
      /* padding-top: 250px; */
      text-align: right;
      align-self: right;
    }
  }
`;
