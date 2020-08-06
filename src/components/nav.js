import React, { useEffect, useState } from "react";
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
  bottom: ${props => (props.isShow ? "0" : "-65px")};
  background: var(--white);
  animation-duration: 0.3s;
  animation-name: ${props => (props.isShow ? "show" : "hidden")};

  @keyframes show {
    from {
      bottom: -65px;
    }

    to {
      bottom: 0;
    }
  }
  @keyframes hidden {
    from {
      bottom: 0px;
    }

    to {
      bottom: -65px;
    }
  }
`;

function Nav({ isLogin }) {
  let location = useLocation();
  let [isShow, setIsShow] = useState(false);
  let [scroll, setScroll] = useState(0);

  const getNavForPath = () => {
    if (location.pathname.indexOf("property") > -1) {
      return <NavBuy />;
    }
    return <NavList isLogin={isLogin} />;
  };

  useEffect(() => {
    function onScroll() {
      if (isShow && scroll < window.scrollY) {
        setIsShow(false);
      }
      if (!isShow && scroll > window.scrollY) {
        setIsShow(true);
      }
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scroll, isShow]);
  return (
    <NavStyled isShow={isShow}>
      <Wrapper>{getNavForPath()}</Wrapper>
    </NavStyled>
  );
}

export default Nav;
