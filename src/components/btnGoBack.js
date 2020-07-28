import React from "react";
import { useHistory } from "react-router-dom";

function BtnGoBack() {
  let history = useHistory();
  const handleClick = () => {
    if (history.goBack.length > 0) {
      history.goBack();
    } else {
      history.push("/");
    }
  };
  return (
    <button className="btn-style-less color-primary" onClick={handleClick}>
      <i className="fas fa-arrow-left"></i>
    </button>
  );
}

export default BtnGoBack;
