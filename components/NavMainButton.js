import React from "react";
import Link from "next/link";

function NavMainButton({ text, route }) {
  return (
    <div className="nav-buy">
      <div className="content-action">
        <Link href={route}>
          <a>
            <button className="btn btn-primary">{text}</button>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .nav-buy {
          display: flex;
          flex-direction: row;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default NavMainButton;
