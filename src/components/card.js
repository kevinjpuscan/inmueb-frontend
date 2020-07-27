import React from "react";
import styled from "styled-components";
import CarouselImage from "../components/carouselImage";

export const CardStyled = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .content-card {
    padding: 1em 1em;
  }
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
    span {
      margin: 0;
      font-size: 0.7em;
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
  }
`;

function Card({ element }) {
  const {
    title,
    owner,
    description,
    image,
    github,
    website,
    imageSize,
    images
  } = element;
  return (
    <CardStyled image={image} imageSize={imageSize}>
      <a href={website}>
        <CarouselImage images={images} />
      </a>

      <div className="content-card">
        <div className="header-card">
          <div className="title-card">
            <a href={website}>
              <h3>{title}</h3>
            </a>
            <span>{owner}</span>
          </div>
          <div className="icon-card">
            {github && (
              <a href={github}>
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className="body-card">
          <p>{description}</p>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
