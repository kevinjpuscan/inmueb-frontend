import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Search from "./Search";

export const InputSearchStyled = styled.input`
  padding: 10px 10px;
  border-radius: 7px;
  max-width: 230px;
  border: 0.5px solid var(--secondary);
  font-family: "Roboto";
  font-weight: 700;
  color: var(--secondary);
  z-index: 999;
`;

function InputSearch() {
  let [open, setOpen] = useState(false);
  return (
    <Fragment>
      <InputSearchStyled
        onClick={() => setOpen(true)}
        placeholder="¿Dónde quieres comprar?"
      ></InputSearchStyled>
      {open && <Search />}
    </Fragment>
  );
}

export default InputSearch;
