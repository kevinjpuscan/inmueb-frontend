import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BtnGoHome from "../../components/btnGoHome";
import InputSearch from "../../components/inputSearch";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";

export const ExplorerStyled = styled.div``;

function Explorer() {
  return (
    <ExplorerStyled>
      <Header left={<BtnGoHome />} center={<InputSearch />}></Header>
      <Wrapper page>
        <Card
          element={{
            title: "HolaMundo",
            description: "prueba de card",
            owner: "Owner",
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
      </Wrapper>
    </ExplorerStyled>
  );
}

export default Explorer;
