import React from "react";
import CarouselImage from "./CarouselImage";
import Link from "next/link";

function Card({ element }) {
  const {
    title,
    slug,
    isFav,
    description,
    area,
    coin,
    unit,
    price,
    images
  } = element;
  return (
    <div className="card">
      <Link href={"/property/" + slug}>
        <a>
          <CarouselImage images={images} isCard isFav={isFav} />
        </a>
      </Link>

      <div className="content-card">
        <div className="header-card">
          <div className="title-card">
            <Link href={"/property/" + slug}>
              <a>
                <h3>{title}</h3>
              </a>
            </Link>
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
              <i aria-hidden className="fas fa-ruler-combined" /> {area}
              {unit}
            </span>
          </div>
          <div>
            <span>
              <i aria-hidden className="fas fa-tag" /> {coin}
              {price}
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 100%;
          border-radius: 5px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .content-card {
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
    </div>
  );
}

export default Card;
