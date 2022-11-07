import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import { Content, SafeArea, Loaderr } from "../components";
import { useStateContext } from "../context/ContextProvider";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const MyWork = () => {
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
        <h1>What I do</h1>
      </Content>
      <div className="threeDiv" bgColor={""}>
        {loading && <Loaderr />}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Spline
            onLoad={() => setLoading(false)}
            scene="https://prod.spline.design/83ZQL9Bvb-t5kEKN/scene.splinecode"
          />
        </Suspense>
      </div>
    </SafeArea>
  );
};

export default MyWork;
