import React from "react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      {children}
      <Nav isLogin />
    </div>
  );
}

export default Layout;
