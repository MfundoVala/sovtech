import styled from "styled-components";

export const SafeArea = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100vh;

  .threeDiv {
    position: relative;
    margin: 0;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    z-index: 0;
    overflow: hidden;
    background: black;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .threeDiv {
      width: 100vw;
      height: 70vh;
    }
  }
`;
