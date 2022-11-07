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

  const links = [
    {
      title: "Figma prototype for this website",
      link: "https://www.figma.com/proto/GNNngA54FhpkmK2ZLzjPXF/Sovtech?page-id=0%3A1&node-id=0%3A1&viewport=-617%2C463%2C0.67&scaling=scale-down",
      // icon: <FontAwesomeIcon icon="fa-brands fa-figma" />,
    },
    {
      title: "My Github",
      link: "https://github.com/mfundovala",
      // icon: <FontAwesomeIcon icon="fa-brands fa-figma" />,
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/mfundo-cele/",
      // icon: <FontAwesomeIcon icon="fa-brands fa-linkedin" />,
    },
  ];

  return (
    <SafeArea>
      <Content>
        <h1>What I do.</h1>
        <p>I design and build websites, apps and experiences</p>
        <br></br>
        <p>
          Skills: Web and cross platform mobile development, UI/UX Design,
          System design, 3D modelling
        </p>
        <h1>My Tools</h1>
        <p>Languages: Javascript, Java, Python, C#, SQL</p>
        <p>Frameworks: React, React Native, ThreeJS, Node, Spring</p>
        <p>Software: Figma, Firebase, Blender3D</p>

        <p> Links:</p>
        {links.map((link) => (
          <li>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </Content>
      <div className="threeDiv">
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
