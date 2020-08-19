import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BtnGoHome from "../../components/BtnGoHome";
import Wrapper from "../../components/Wrapper";
import InputSearch from "../../components/InputSearch";

export const LandingStyled = styled.div`
  color: gray;
  .test {
    height: 100vh;
    border: solid 1px gray;
  }

  .landing-search {
    display: flex;
    justify-content: center;
  }
`;

function Landing() {
  return (
    <LandingStyled>
      <Header left={<BtnGoHome />} center={<h1>Inmueb</h1>} />
      <Wrapper page>
        <div className="landing-search">
          <InputSearch />
        </div>
      </Wrapper>
    </LandingStyled>
  );
}

export default Landing;
