import React from "react";
import styled from "styled-components";

const LoadText = styled.text`
  font-family: "League Spartan";
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-transform: none;
  /* text-align: right; */
`;
const LoadDiv = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 40%;
`;
export const Loaderr = () => {
  return (
    <LoadDiv>
      <LoadText>Loading...</LoadText>
    </LoadDiv>
  );
};
