import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import NavList from "./NavList";
import NavBuy from "./NavBuy";
import { useRouter } from "next/router";

function Nav({ isLogin }) {
  let router = useRouter();
  let [isShow, setIsShow] = useState(true);
  let [scroll, setScroll] = useState(0);

  const getNavForPath = () => {
    if (router.pathname.indexOf("property") > -1) {
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
    <div className="nav">
      <Wrapper>{getNavForPath()}</Wrapper>
      <style jsx>{`
        .nav {
          height: 65px;
          width: 100%;
          border-top: 1px solid var(--gray-ligth);
          position: fixed;
          bottom: ${isShow ? "0" : "-65px"};
          background: var(--white);
          animation-duration: 0.3s;
          animation-name: ${isShow ? "show" : "hidden"};
        }
      `}</style>
    </div>
  );
}

export default Nav;
