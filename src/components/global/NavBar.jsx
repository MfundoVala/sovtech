import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const pages = [
  {
    title: "Home",
    link: "home",
    // icon: <FiShoppingBag />
  },
  {
    title: "My Work",
    link: "mywork",
    // icon: <FiShoppingBag />,
  },
];

const Nav = styled.div`
  display: flex;
  align-items: flex-end;
  /* justify-content: space-around; */
  gap: 30px;
  flex-direction: row;
  padding: 0.5rem;
  padding: 40px;
  position: fixed;
  z-index: 999999;
  width: 40vw;
  height: 20px;
  .linkTitle {
    text-transform: uppercase;
    margin-left: 5;
    color: white;
    /* :hover {
      color: black;
    } */
  }
  .NavButton {
    background: black;
    padding: 10px;
    border: 1px solid black;
    :hover {
      background: white;
      .linkTitle {
        color: black;
      }
    }
  }
`;

const NavButton = styled.div`
  position: relative;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  color: white;
  /* border-radius: 9999px; */
  :hover {
    background-color: rgb(247 247 247);
  }
`;

const NavBar = () => {
  return (
    <Nav>
      {pages.map((item) => (
        <NavLink
          to={`/${item.link}`}
          key={`/${item.name}`}
          // onClick={handleCloseSideBar}
        >
          <div className="NavButton" key={item.title}>
            {/* {item.icon} */}
            <span className="linkTitle">{item.link}</span>
          </div>
        </NavLink>
      ))}
    </Nav>
  );
};

export default NavBar;
