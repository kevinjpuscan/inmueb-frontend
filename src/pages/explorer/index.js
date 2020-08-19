import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BtnGoHome from "../../components/BtnGoHome";
import InputSearch from "../../components/InputSearch";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import ListResult from "../../components/ListResult";

export const ExplorerStyled = styled.div`
  .list-result {
    padding: 20px 0;
    display: grid;
    grid-row-gap: 30px;
  }
`;

function Explorer() {
  return (
    <ExplorerStyled>
      <Header left={<BtnGoHome />} center={<InputSearch />}></Header>
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
              isFav: false,
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

          <Card
            element={{
              title: "HolaMundo",
              slug: "hola_mundo",
              isFav: false,
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

          <Card
            element={{
              title: "HolaMundo",
              slug: "hola_mundo",
              isFav: false,
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
    </ExplorerStyled>
  );
}

export default Explorer;
