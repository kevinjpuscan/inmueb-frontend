import React from "react";
import Nav from "./Nav";
import NavList from "./NavList";
import NavBuy from "./NavBuy";
import NavMainButton from "./NavMainButton";
import { useRouter } from "next/router";

function Layout({ children }) {
  let router = useRouter();
  const getNavForPath = () => {
    if (router.pathname.indexOf("property") > -1) {
      return <NavBuy />;
    }
    if (router.pathname.indexOf("sales") > -1) {
      return <NavMainButton text="Registrar Nuevo" route="/new" />;
    }
    return <NavList isLogin />;
  };

  return (
    <div>
      {children}
      <Nav>{getNavForPath()}</Nav>
    </div>
  );
}

export default Layout;
