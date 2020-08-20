import React, { useRef, useEffect } from "react";

import Wrapper from "./Wrapper";
import ResultSearch from "./ResultSearch";

function Search() {
  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="search">
      <Wrapper>
        <div className="search-header">
          <input placeholder="¿Dónde quieres comprar?" ref={ref}></input>

          <i className="far fa-times-circle"></i>
        </div>
        <div className="search-options">
          <ResultSearch code="caj" name="Cajamarca, Perú" />
          <ResultSearch code="caj1" name="Cajamarca, Perú" />
          <ResultSearch code="caj2" name="Cajamarca, Perú" />
          <ResultSearch code="caj3" name="Cajamarca, Perú" />
        </div>
      </Wrapper>
      <style jsx>{`
        .search {
          height: 100vh;
          width: 100%;
          background: var(--white);
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .search-header {
          height: 65px;
          display: flex;
          align-content: center;
        }
        input {
          font-size: 1.2em;
          padding: 15px 10px;
          width: 90%;
          border: none;
        }
        i {
          margin: auto;
          color: var(--gray);
        }
      `}</style>
    </div>
  );
}

export default Search;
