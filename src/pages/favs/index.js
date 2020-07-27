import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoBack from "../../components/btnGoBack";
import BtnGoHome from "../../components/btnGoHome";

export const FavsStyled = styled.div``;

function Favs() {
  return (
    <FavsStyled>
      <Header
        left={<BtnGoBack />}
        center={<h1>Favoritos</h1>}
        rigth={<BtnGoHome />}
      ></Header>
    </FavsStyled>
  );
}

export default Favs;
