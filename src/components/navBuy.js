import React from "react";
import styled from "styled-components";

export const NavBuyStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 900;
    color: var(--primary);
  }
`;

function NavBuy() {
  return (
    <NavBuyStyled>
      <div>
        <span>S/.140* m2</span>
      </div>
      <div className="content-action">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </NavBuyStyled>
  );
}

export default NavBuy;
