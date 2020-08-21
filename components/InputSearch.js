import React, { useState, Fragment } from "react";

import Search from "./Search";

function InputSearch({ placeholder = "¿Dónde comprar?" }) {
  let [open, setOpen] = useState(false);
  return (
    <Fragment>
      <input onClick={() => setOpen(true)} placeholder={placeholder}></input>
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
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
}

export default InputSearch;
