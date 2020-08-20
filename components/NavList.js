import React from "react";
import NavLink from "./NavLink";

function NavList({ isLogin }) {
  return (
    <div className="navlist">
      <NavLink href="/" routes={["/explorer"]} className="navlink-element">
        <div className="icon-navlink">
          <i aria-hidden className="fas fa-search"></i>
        </div>
        <div className="description-navlink">Explorar</div>
      </NavLink>

      <NavLink href="/favs" className="navlink-element">
        <div className="icon-navlink">
          <i aria-hidden className="far fa-heart"></i>
        </div>
        <div className="description-navlink">Favoritos</div>
      </NavLink>
      {isLogin && (
        <NavLink href="/sales" className="navlink-element">
          <div className="icon-navlink">
            <i aria-hidden className="fas fa-tag"></i>
          </div>
          <div className="description-navlink">Ventas</div>
        </NavLink>
      )}
      <NavLink
        href="/profile"
        routes={["/profile/login", "/profile/register"]}
        className="navlink-element"
      >
        <div className="icon-navlink">
          <i aria-hidden className="fas fa-user-circle"></i>
        </div>
        <div className="description-navlink">Perfil</div>
      </NavLink>

      <style jsx>
        {`
          .navlist {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
          }

          .icon-navlink {
            display: flex;
            justify-content: center;
            color: var(--gray);
          }

          .icon-navlink i {
            font-size: 1.4em;
            margin: 5px;
          }
          .description-navlink {
            font-size: 0.7em;
            font-weight: 700;
            color: var(--gray);
          }
        `}
      </style>
      <style jsx global>{`
        .navlink-active .icon-navlink,
        .navlink-active .description-navlink {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}

export default NavList;
