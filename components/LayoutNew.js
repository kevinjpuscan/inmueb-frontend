import React from "react";
import Nav from "./Nav";
import NavMainButton from "./NavMainButton";
import Header from "./Header";
import BtnGoBack from "./BtnGoBack";
import BtnGoHome from "./BtnGoHome";
import Wrapper from "./Wrapper";
import ProgressBar from "./ProgressBar";

function LayoutNew({ children, nextStep, titleStep, progress }) {
  return (
    <div>
      <Header
        left={<BtnGoBack />}
        center={<h1>{titleStep}</h1>}
        rigth={<BtnGoHome />}
      ></Header>
      <ProgressBar progress={progress} />
      <Wrapper page>{children}</Wrapper>

      <Nav>
        <NavMainButton
          text={nextStep ? "Siguiente" : "Nuevo"}
          route={nextStep ? nextStep : "/new"}
        />
      </Nav>
    </div>
  );
}

export default LayoutNew;
