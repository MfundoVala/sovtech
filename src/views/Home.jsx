import React, { Suspense, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { SafeArea, Content, Loaderr } from "../components";
import { useStateContext } from "../context/ContextProvider";

const loading = styled.text`
  color: white;
  font-size: x-large;
`;

const Home = () => {
  const { loading, setLoading } = useStateContext();

  const loadOff = useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <SafeArea>
      <Content>
        <h1>HELLO! I'M MFUNDO</h1>
        <p>
          A PASSIONATE SOFTWARE DEVELOPER, FOCUSED ON CREATIVE AND EFFICIENT
          PRODUCTS THAT HELP IMPROVE THE WORLD AND EXPERIENCES PEOPLE LOVE.
        </p>
      </Content>
      <div className="threeDiv">
        <div>{loading && <Loaderr />}</div>
        <Suspense
          fallback={
            <div>
              <Loaderr />
            </div>
          }
        >
          <Spline
            onLoad={() => {
              setLoading(false);
            }}
            scene="https://prod.spline.design/h3Tcf2spfNdby1bt/scene.splinecode"
          />
        </Suspense>
      </div>
    </SafeArea>
  );
};

export default Home;
