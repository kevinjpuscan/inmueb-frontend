import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SalesElementStyled = styled(Link)`
  width: 100%;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1em 1em;

  .header-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .title-card {
    a {
      color: var(--gray-very-dark);
      text-decoration: none;
    }
    h3 {
      margin: 0;
      font-size: 1em;
    }
    color: var(--gray-very-dark);
  }
  .icon-card {
    font-size: 1.2em;
    a {
      color: var(--gray-very-darl);
      text-decoration: none;
    }
  }
  .body-card p {
    color: var(--gray-dark);
    font-weight: 300;
    font-size: 0.8em;
    padding: 8px 0;
  }

  .info-card {
    display: flex;
    flex-direction: row;
    color: var(--primary);
    padding: 8px 0;
    div {
      margin-right: 15px;
    }
    span {
      margin: 0;
      font-size: 0.7em;
      font-weight: 700;
    }

    i {
      font-size: 1em;
    }
  }
`;

function SalesElement({ element }) {
  const { title, slug, description, mesure, coin, unit, price } = element;
  return (
    <SalesElementStyled to={"/property/" + slug}>
      <div className="header-card">
        <div className="title-card">
          <div>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="icon-card">
          {false && (
            <a href="/">
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
      <div className="body-card">
        <p>{description}</p>
      </div>
      <div className="info-card">
        <div>
          <span>
            <i className="fas fa-ruler-combined"></i> {mesure}
            {unit}
          </span>
        </div>
        <div>
          <span>
            <i className="fas fa-tag"></i> {coin}
            {price}
          </span>
        </div>
      </div>
    </SalesElementStyled>
  );
}

export default SalesElement;
