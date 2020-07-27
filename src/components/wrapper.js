import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1312px;
  height: 100%;
  margin: auto;
  padding: ${props => (props.page ? "80px 1.2em" : "0 1.2em")};
`;

function Wrapper({ children, page }) {
  return <WrapperStyled page={page}>{children}</WrapperStyled>;
}

export default Wrapper;
