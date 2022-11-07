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
  overflow-y: visible;
  overflow-y: scroll;
  height: 100vh;

  .Logo {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5vh;
    width: 100vw;
  }

  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
    text-transform: uppercase;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
  }

  .headerText {
    margin-top: 10vh;
    @media (min-width: 600px) {
      /* padding-top: 250px; */
      /* text-align: right;
      align-self: right; */
      margin-top: 20vh !important;
    }
  }

  h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: normal;
    font-size: 1.65rem;
    font-weight: bold;
    line-height: 150%;
    pointer-events: auto;
    /* text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); */
    /* padding-left: 100px; */
    @media (max-width: 800px) {
      width: 80vw;
      font-size: 1.15rem;
      font-weight: 600;
    }
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 150%;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    /* padding-left: 100px; */
    @media (max-width: 800px) {
      width: 80vw;
      font-size: 1.15rem;
      font-weight: 600;
    }
  }

  h1,
  h2 {
    /* margin: 0 30px 0 100px; */

    @media (max-width: 1024px) {
      /* margin: 0 30px; */
    }

    @media (min-width: 600px) {
      /* padding-top: 250px; */
      /* text-align: right;
      align-self: right; */
      max-width: 500px;
    }
  }
`;
