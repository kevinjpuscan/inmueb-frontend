import React, { useState, Fragment } from "react";
import Menu from "./Menu";

function BtnMenu({ children }) {
  let [open, setOpen] = useState(false);
  let [icon, setIcon] = useState("fas fa-bars");

  const handleClick = () => {
    if (open) {
      setOpen(false);
      setIcon("fas fa-bars");
    } else {
      setOpen(true);
      setIcon("fas fa-times");
    }
  };
  return (
    <Fragment>
      <button className="btn-style-less color-primary" onClick={handleClick}>
        <i aria-hidden className={icon}></i>
      </button>
      {open && <Menu>{children}</Menu>}
    </Fragment>
  );
}

export default BtnMenu;
