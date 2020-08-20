import React, { useState, Fragment } from "react";

import Search from "./Search";

function InputSearch() {
  let [open, setOpen] = useState(false);
  return (
    <Fragment>
      <input
        onClick={() => setOpen(true)}
        placeholder="¿Dónde quieres comprar?"
      ></input>
      {open && <Search />}

      <style jsx>{`
        input {
          padding: 10px 10px;
          border-radius: 7px;
          max-width: 230px;
          border: 0.5px solid var(--secondary);
          font-family: "Roboto";
          font-weight: 700;
          color: var(--secondary);
          z-index: 999;
        }
      `}</style>
    </Fragment>
  );
}

export default InputSearch;
