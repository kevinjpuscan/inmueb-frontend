import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoBack from "../../components/btnGoBack";
import BtnMenu from "../../components/btnMenu";

export const SalesStyled = styled.div``;

function Sales() {
  return (
    <SalesStyled>
      <Header
        left={<BtnGoBack />}
        center={<h1>En Venta</h1>}
        rigth={<BtnMenu />}
      ></Header>
    </SalesStyled>
  );
}

export default Sales;
