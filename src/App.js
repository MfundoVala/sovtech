import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyWork from "./views/MyWork";
import Home from "./views/Home";
import NavBar from "./components/NavBar";

const main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;
export default function App() {
  return (
    <MainArea>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mywork" element={<MyWork />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MainArea>
  );
}

export const MainArea = styled.div`
  font-family: "Spline-Sans", sans-serif;
  font-size: 16 px;
  width: 100vw;
  height: 100vh;
`;
