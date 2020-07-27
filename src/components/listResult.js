import React from "react";
import styled from "styled-components";

export const ListResultStyled = styled.div`
  padding: 20px 0;
  display: grid;
  grid-row-gap: 30px;
`;

function ListResult({ children }) {
  return <ListResultStyled>{children}</ListResultStyled>;
}

export default ListResult;
