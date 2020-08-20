import React, { Fragment } from "react";

import Link from "next/link";

function ResultSearch({ code, name }) {
  let route = `/explorer/${code}`;

  return (
    <Fragment>
      <Link href={route}>
        <a>
          <div className="icon-result">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="name-result">
            <span>{name}</span>
          </div>
        </a>
      </Link>
      <style jsx>{`
        a {
          display: flex;
          flex-direction: row;
          margin: 10px 0px;
        }

        .icon-result {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: var(--gray-ligth);
          color: white;
          display: flex;
        }
        i {
          margin: auto;
          font-size: 1.5em;
        }

        .name-result {
          display: flex;
          padding: 10px 15px;
        }
        span {
          margin: auto 0px;
          font-family: "Roboto";
          color: var(--gray);
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  );
}

export default ResultSearch;
