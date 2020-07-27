import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";

export const HeaderStyled = styled.div`
  background: var(--white);
  color: var(--primary);
  width: 100%;
  height: 65px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  position: fixed;
  .header-container {
    height: 100%;
    display: grid;
    grid-template-columns: 50px auto 50px;
  }
  .element-header {
    margin: auto;
  }
`;

function Header({ left, center, rigth }) {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header-container">
          <div className="element-header">{left}</div>
          <div className="element-header">{center}</div>
          <div className="element-header">{rigth}</div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
