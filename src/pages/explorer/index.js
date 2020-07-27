import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoHome from "../../components/btnGoHome";
import InputSearch from "../../components/inputSearch";

export const ExplorerStyled = styled.div``;

function Explorer() {
  return (
    <ExplorerStyled>
      <Header left={<BtnGoHome />} center={<InputSearch />}></Header>
    </ExplorerStyled>
  );
}

export default Explorer;
