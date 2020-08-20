import React from "react";

function Menu({ children }) {
  return (
    <div>
      {children}{" "}
      <style jsx>{`
        .menu {
          width: 230px;
          height: 200px;
          border-radius: 5px;
          background: var(--white);
          color: var(--gray);
          position: absolute;
          top: 80px;
          right: 15px;

          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

export default Menu;
