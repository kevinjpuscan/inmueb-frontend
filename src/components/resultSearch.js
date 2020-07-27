import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResultSearchStyled = styled(Link)`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  .icon-result {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background: var(--gray-ligth);
    color: white;
    display: flex;
    i {
      margin: auto;
      font-size: 1.5em;
    }
  }

  .name-result {
    display: flex;
    padding: 10px 15px;
    span {
      margin: auto 0px;
      font-family: "Roboto";
      color: var(--gray);
      font-weight: 500;
    }
  }
`;

function ResultSearch({ code, name }) {
  let route = `/explorer/${code}`;
  return (
    <ResultSearchStyled to={route}>
      <div className="icon-result">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div className="name-result">
        <span>{name}</span>
      </div>
    </ResultSearchStyled>
  );
}

export default ResultSearch;
