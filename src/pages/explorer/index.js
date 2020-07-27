import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoBack from "../../components/btnGoBack";
import BtnGoHome from "../../components/btnGoHome";
import InputSearch from "../../components/inputSearch";

export const ExplorerStyled = styled.div``;

function Explorer() {
  return (
    <ExplorerStyled>
      <Header
        left={<BtnGoBack />}
        center={<InputSearch />}
        rigth={<BtnGoHome />}
      ></Header>
    </ExplorerStyled>
  );
}

export default Explorer;
