import React, { Suspense, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { SafeArea, Content, Loaderr } from "../components";
import { useStateContext } from "../context/ContextProvider";
import Logo from "../assets/mfundologo.svg";
import DownIcon from "../assets/down.svg";

const loading = styled.text`
  color: white;
  font-size: x-large;
`;

const SeeMore = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  margin-top: 20%;
`;

const Home = () => {
  const { loading, setLoading, activeButton, setActiveButton } =
    useStateContext();

  const loadOff = useEffect(() => {
    setLoading(true);
    setActiveButton("home");
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <SafeArea>
      <Content>
        <img src={Logo} />
        <div className="headerText">
          <h2>
            A PASSIONATE SOFTWARE DEVELOPER, FOCUSED ON CREATIVE AND EFFICIENT
            PRODUCTS THAT HELP IMPROVE THE WORLD AND EXPERIENCES PEOPLE LOVE.
          </h2>
        </div>
        <SeeMore>
          <img src={DownIcon}></img>
          <p>Scroll to See More</p>
        </SeeMore>
        <br></br>

        <div className="headerText">
          <h1>Who am I?</h1>
          <p>
            I'm an entrepreneur turned Software, programmer. I playfully call
            myself a digital swiss army knife due to my love for learning new
            languages, frameworks and softwares. I'm super inlove with the
            healthy environment I've found in the tech industry which is a huge
            contrast from my previous job.
          </p>
          <h1>Why Sovtech?</h1>
          <p>
            Sovtech is a diverse company with projects that span a range of
            different segments of the tech industry. This is a perfect fit for a
            swiss army knife. I'm excited to be a part of a company that is
            constantly growing and learning. this is a great opportunity for me
            to learn and grow as a developer and as a person. I'm also impressed
            with Sovtech's interview process which suggests a thoughtful company
            culture and leadership.
          </p>
        </div>
        <div className="headerText"></div>
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
