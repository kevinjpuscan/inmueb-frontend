import React from "react";

function ListResult({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        padding: 20px 0;
        display: grid;
        grid-row-gap: 30px;

        @media (min-width: 400px) {
          grid-template-columns: repeat(3, 1fr);
          gap: 3em;
        }
      `}</style>
    </div>
  );
}

export default ListResult;
