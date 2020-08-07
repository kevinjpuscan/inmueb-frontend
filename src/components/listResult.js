import React from "react";
import styled from "styled-components";

export const ListResultStyled = styled.div`
  padding: 20px 0;
  display: grid;
  grid-row-gap: 30px;

  @media (min-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
  }
`;

function ListResult({ children }) {
  return <ListResultStyled>{children}</ListResultStyled>;
}

export default ListResult;
