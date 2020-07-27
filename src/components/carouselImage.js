import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const CarouselImageStyled = styled.div`
  .panel {
    border-radius: 5px 5px 0 0;
    height: 210px;
    contain: content !important;
    overflow: hidden !important;
    position: relative !important;
    mask-image: -webkit-radial-gradient(white, black) !important;
  }

  .content-images {
    display: flex;
    height: 100%;
    padding-left: 0px;
    margin-bottom: 0px;
    margin-top: 0px;
    min-width: 100%;
    padding-bottom: 20px;
    list-style: outside none none;
    overflow: auto hidden;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .image-element {
    border-width: 0px;
    border-style: solid;
    border-color: transparent;
    scroll-snap-align: start;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .content-image {
    height: 100%;

    img {
      position: relative;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      width: 100%;
    }
  }
`;

function CarouselImage({ images }) {
  let listImage = useRef();
  useEffect(() => {
    listImage.current.addEventListener("scroll", () => {
      console.log(
        (listImage.current.scrollLeft + 1) / listImage.current.offsetWidth
      );
    });
  }, []);
  return (
    <CarouselImageStyled>
      <div className="panel">
        <ul className="content-images" ref={listImage}>
          {images.map((img, idx) => (
            <li className="image-element" key={idx}>
              <div className="content-image">
                <img src={img.src} alt={img.alt}></img>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CarouselImageStyled>
  );
}

export default CarouselImage;
