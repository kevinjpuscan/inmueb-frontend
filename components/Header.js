import React from "react";

import Wrapper from "./Wrapper";

function Header({ left, center, rigth }) {
  return (
    <div className="header">
      <Wrapper>
        <div className="header-container">
          <div className="element-header">{left}</div>
          <div className="element-header">{center}</div>
          <div className="element-header">{rigth}</div>
        </div>
      </Wrapper>
      <style jsx>
        {`
          .header {
            background: var(--white);
            color: var(--primary);
            width: 100%;
            height: 65px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
            position: fixed;
            top: 0;
            z-index: 999;
          }

          .header-container {
            height: 100%;
            display: grid;
            grid-template-columns: 50px auto 50px;
          }
          .element-header {
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}

export default Header;
