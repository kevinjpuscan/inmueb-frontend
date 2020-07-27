import React from "react";
import styled from "styled-components";

export const MenuStyled = styled.div`
  width: 230px;
  height: 200px;
  border-radius: 5px;
  background: var(--white);
  color: var(--gray);
  position: absolute;
  top: 80px;
  right: 15px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

function Menu({ children }) {
  return <MenuStyled>{children}</MenuStyled>;
}

export default Menu;
