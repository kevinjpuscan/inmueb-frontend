import React from "react";

function Wrapper({ children, page }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          max-width: 1312px;
          height: ${page ? "100vh" : "100%"};
          margin: auto;
          padding: ${page ? "80px" : "0px"} 1.2em;
        }
      `}</style>
    </div>
  );
}

export default Wrapper;
