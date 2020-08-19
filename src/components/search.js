import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import ResultSearch from "./ResultSearch";

export const SearchStyled = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  .search-header {
    height: 65px;
    display: flex;
    align-content: center;
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
  }
`;

function Search() {
  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <SearchStyled>
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
    </SearchStyled>
  );
}

export default Search;
