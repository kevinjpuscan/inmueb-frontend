import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoBack from "../../components/btnGoBack";
import BtnGoHome from "../../components/btnGoHome";

export const ExplorerStyled = styled.div``;

function Explorer() {
  return (
    <ExplorerStyled>
      <Header
        left={<BtnGoBack />}
        center={<h1>Buscador</h1>}
        rigth={<BtnGoHome />}
      ></Header>
    </ExplorerStyled>
  );
}

export default Explorer;
