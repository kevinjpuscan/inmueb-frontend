import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoHome from "../../components/btnGoHome";

export const LandingStyled = styled.div`
  color: gray;
  .test {
    height: 100vh;
    border: solid 1px gray;
  }
`;

function Landing() {
  return (
    <LandingStyled>
      <Header left={<BtnGoHome />} center={<h1>Inmueb</h1>} />
    </LandingStyled>
  );
}

export default Landing;
