import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const pages = [
  {
    title: "Home",
    links: [
      {
        name: "home",
        // icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: "My Work",
    links: [
      {
        name: "mywork",
        // icon: <FiShoppingBag />,
      },
    ],
  },
];

const Nav = styled.div`
  display: flex;
  /* justify-content: space-around; */
  gap: 30px;
  flex-direction: row;
  padding: 0.5rem;
  height: 200px;
  position: fixed;
  z-index: 999999;
  width: 100vw;
  height: 100px;
  .linkTitle {
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 5;
    .span {
      text-decoration: none;
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
        <div key={item.title}>
          {item.links.map((link) => (
            <NavLink
              to={`/${link.name}`}
              key={`/${link.name}`}
              // onClick={handleCloseSideBar}
            >
              {link.icon}
              <span className="linkTitle">{link.name}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </Nav>
  );
};

export default NavBar;
