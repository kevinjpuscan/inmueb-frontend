import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoBack from "../../components/btnGoBack";
import BtnGoHome from "../../components/btnGoHome";
import Wrapper from "../../components/wrapper";
import CarouselImage from "../../components/carouselImage";

export const PropertyStyled = styled.div`
  .map {
    margin-top: 65px;
    width: 100%;
    height: 250px;
    background: var(--gray-ligth);
  }

  .content-detail {
    padding: 1.5em 0 90px 0;

    h1 {
      font-size: 1.5em;
    }

    p {
      margin: 1em 0;
    }
  }
`;

function Property() {
  let images = [
    {
      src:
        "https://a0.muscache.com/im/pictures/1ed971f7-ea85-4b5e-a486-17800ba91cb9.jpg?aki_policy=large",
      alt: "test"
    },
    {
      src:
        "https://a0.muscache.com/im/pictures/1ed971f7-ea85-4b5e-a486-17800ba91cb9.jpg?aki_policy=large",
      alt: "test"
    },
    {
      src:
        "https://a0.muscache.com/im/pictures/1ed971f7-ea85-4b5e-a486-17800ba91cb9.jpg?aki_policy=large",
      alt: "test"
    },
    {
      src:
        "https://a0.muscache.com/im/pictures/1ed971f7-ea85-4b5e-a486-17800ba91cb9.jpg?aki_policy=large",
      alt: "test"
    }
  ];
  return (
    <PropertyStyled>
      <Header
        left={<BtnGoBack />}
        center={<h1>Detalle</h1>}
        rigth={<BtnGoHome />}
      />
      <div className="map"></div>

      <Wrapper>
        <div className="content-detail">
          <h1>Lote de 500m2 en esquina con todos los servicios</h1>
          <p>
            El lote de terreo cuenta con 500m2 en una zozna plata, se ubica en
            una esquina, perfecto lugar para poner una tienda.
          </p>
          <div className="galery">
            <CarouselImage images={images} />
          </div>
        </div>
      </Wrapper>
    </PropertyStyled>
  );
}

export default Property;
