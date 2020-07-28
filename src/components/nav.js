import React from "react";
import styled from "styled-components";
import Wrapper from "../components/wrapper";
import NavList from "../components/navList";
import NavBuy from "../components/navBuy";
import { useLocation } from "react-router-dom";

export const NavStyled = styled.div`
  height: 65px;
  width: 100%;
  border-top: 1px solid var(--gray-ligth);
  position: fixed;
  bottom: 0;
  background: var(--white);
`;

function Nav({ isLogin }) {
  let location = useLocation();
  const getNavForPath = () => {
    if (location.pathname.indexOf("property") > -1) {
      return <NavBuy />;
    }
    return <NavList isLogin={isLogin} />;
  };
  return (
    <NavStyled>
      <Wrapper>{getNavForPath()}</Wrapper>
    </NavStyled>
  );
}

export default Nav;
