import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ children, href, routes = [] }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={
          router.pathname === href ||
          routes.indexOf(router.pathname.split("/")[1]) >= 0
            ? "navlink-active"
            : ""
        }
      >
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
