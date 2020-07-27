import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Search from "./search";

export const InputSearchStyled = styled.input`
  padding: 10px 15px;
  border-radius: 7px;
  max-width: 250px;
  border: 0.5px solid var(--secondary);
  font-family: "Roboto";
  font-weight: 700;
  color: var(--secondary);
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
