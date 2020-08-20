import React from "react";
import Header from "../../../components/Header";
import BtnGoBack from "../../../components/BtnGoBack";
import BtnGoHome from "../../../components/BtnGoHome";
import Wrapper from "../../../components/Wrapper";
import CarouselImage from "../../../components/CarouselImage";
import Layout from "../../../components/Layout";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../../components/MapView"), {
  ssr: false
});

let elementP = {
  coin: "S/.",
  mesure: "1000",
  unit: "m2",
  price: "150",
  images: [
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
  ]
};
function Property({ element = elementP }) {
  let { coin, price, mesure, unit, images } = element;

  return (
    <Layout>
      <Header
        left={<BtnGoBack />}
        center={<h1>Detalle</h1>}
        rigth={<BtnGoHome />}
      />
      <div className="map">
        <Map />
      </div>

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
          <div className="features">
            <div>
              <span>
                <i aria-hidden className="fas fa-ruler-combined"></i> {mesure}
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
        </div>
      </Wrapper>
      <style jsx>{`
        .map {
          margin-top: 65px;
          width: 100%;
          height: 250px;
          background: var(--gray-ligth);
        }

        .content-detail {
          padding: 1.5em 0 80px 0;
        }
        .content-detail h1 {
          font-size: 1.5em;
          color: var(--gray-very-dark);
        }

        .content-detail p {
          margin: 1em 0;
          color: var(--gray-dark);
        }

        .features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          color: var(--primary);
          font-weight: 900;
          margin: 20px 0;
          text-align: center;
        }
        .features div {
          padding: 15px;
          border-radius: 5px;
          background: var(--gray-very-ligth);
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}

export default Property;
