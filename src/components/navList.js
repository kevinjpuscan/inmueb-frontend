import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavListStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  .icon-navlink {
    display: flex;
    justify-content: center;
    color: var(--gray);

    i {
      font-size: 1.4em;
      margin: 5px;
    }
  }

  .description-navlink {
    font-size: 0.7em;
    font-weight: 700;
    color: var(--gray);
  }

  .navlink-active {
    color: var(--primary);

    .description-navlink,
    .icon-navlink {
      color: var(--primary);
    }
  }
`;

function NavList({ isLogin }) {
  return (
    <NavListStyled>
      <NavLink
        to="/home"
        className="navlink-element"
        activeClassName="navlink-active"
        isActive={(match, location) => {
          if (
            location.pathname.indexOf("home") > -1 ||
            location.pathname.indexOf("explorer") > -1
          ) {
            return true;
          }
          return false;
        }}
      >
        <div className="icon-navlink">
          <i className="fas fa-search"></i>
        </div>
        <div className="description-navlink">Explorar</div>
      </NavLink>

      <NavLink
        to="/favs"
        className="navlink-element"
        activeClassName="navlink-active"
      >
        <div className="icon-navlink">
          <i className="far fa-heart"></i>
        </div>
        <div className="description-navlink">Favoritos</div>
      </NavLink>
      {isLogin && (
        <NavLink
          to="/sales"
          className="navlink-element"
          activeClassName="navlink-active"
        >
          <div className="icon-navlink">
            <i className="fas fa-tag"></i>
          </div>
          <div className="description-navlink">Ventas</div>
        </NavLink>
      )}
      <NavLink
        to="/profile"
        className="navlink-element"
        activeClassName="navlink-active"
        isActive={(match, location) => {
          if (
            location.pathname.indexOf("login") > -1 ||
            location.pathname.indexOf("profile") > -1 ||
            location.pathname.indexOf("register") > -1
          ) {
            return true;
          }
          return false;
        }}
      >
        <div className="icon-navlink">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="description-navlink">Perfil</div>
      </NavLink>
    </NavListStyled>
  );
}

export default NavList;