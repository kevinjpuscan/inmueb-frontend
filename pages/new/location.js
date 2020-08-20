import React from "react";
import LayoutNew from "../../components/LayoutNew";

function Location() {
  return (
    <LayoutNew titleStep="Location" nextStep="/new/information" progress={20}>
      <input type="text"></input>
    </LayoutNew>
  );
}

export default Location;
