import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BtnGoBack from "../../components/BtnGoBack";
import BtnGoHome from "../../components/BtnGoHome";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import ListResult from "../../components/ListResult";

export const FavsStyled = styled.div``;

function Favs() {
  return (
    <FavsStyled>
      <Header
        left={<BtnGoBack />}
        center={<h1>Favoritos</h1>}
        rigth={<BtnGoHome />}
      ></Header>
      <Wrapper page>
        <ListResult>
          <Card
            element={{
              title: "HolaMundo",
              slug: "hola_mundo",
              isFav: true,
              description: "prueba de card",
              price: 12000,
              coin: "S/.",
              area: 150,
              unit: "m2",
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
            }}
          ></Card>

          <Card
            element={{
              title: "HolaMundo",
              slug: "hola_mundo",
              isFav: true,
              description: "prueba de card",
              price: 12000,
              coin: "S/.",
              area: 150,
              unit: "m2",
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
            }}
          ></Card>
        </ListResult>
      </Wrapper>
    </FavsStyled>
  );
}

export default Favs;
