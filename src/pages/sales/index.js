import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BtnGoBack from "../../components/BtnGoBack";
import BtnMenu from "../../components/BtnMenu";
import SalesElement from "../../components/SalesElement";
import Wrapper from "../../components/Wrapper";
import ListResult from "../../components/ListResult";

export const SalesStyled = styled.div``;

function Sales() {
  return (
    <SalesStyled>
      <Header
        left={<BtnGoBack />}
        center={<h1>En Venta</h1>}
        rigth={<BtnMenu />}
      ></Header>
      <Wrapper page>
        <ListResult>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
          <SalesElement
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
          ></SalesElement>
        </ListResult>
      </Wrapper>
    </SalesStyled>
  );
}

export default Sales;
