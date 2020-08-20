import React, { Fragment } from "react";
import Link from "next/link";

function SalesElement({ element }) {
  const { title, slug, description, area, coin, unit, price } = element;
  return (
    <Fragment>
      <Link href={"/property/" + slug}>
        <a className="sales-element">
          <div className="header-card">
            <div className="title-card">
              <div>
                <h3>{title}</h3>
              </div>
            </div>
            <div className="icon-card">
              {false && (
                <a href="/">
                  <i aria-hidden className="fab fa-github"></i>
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
                <i aria-hidden className="fas fa-ruler-combined"></i> {area}
                {unit}
              </span>
            </div>
            <div>
              <span>
                <i aria-hidden className="fas fa-tag"></i> {coin}
                {price}
              </span>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .sales-element {
          width: 100%;
          border-radius: 5px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 1em 1em;
        }

        .header-card {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .title-card {
          color: var(--gray-very-dark);
        }
        .title-card a {
          color: var(--gray-very-dark);
          text-decoration: none;
        }
        .title-card h3 {
          margin: 0;
          font-size: 1em;
        }
        .icon-card {
          font-size: 1.2em;
        }

        .icon-card a {
          color: var(--gray-very-darl);
          text-decoration: none;
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
        }
        .info-card div {
          margin-right: 15px;
        }
        .info-card span {
          margin: 0;
          font-size: 0.7em;
          font-weight: 700;
        }

        .info-card i {
          font-size: 1em;
        }
      `}</style>
    </Fragment>
  );
}

export default SalesElement;
