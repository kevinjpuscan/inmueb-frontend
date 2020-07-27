import React from "react";
import Logo from "../images/logo";
import { useHistory } from "react-router-dom";

function BtnGoHome() {
  let history = useHistory();
  return (
    <button className="btn-style-less" onClick={() => history.push("/")}>
      <Logo width="35px" />
    </button>
  );
}

export default BtnGoHome;
