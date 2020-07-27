import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const CarouselImageStyled = styled.div`
  .panel {
    border-radius: 5px 5px 0 0;
    height: 210px;
    contain: content;
    overflow: hidden;
    position: relative;
    mask-image: -webkit-radial-gradient(white, black);
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

  .counter-image {
    z-index: 500;
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-family: "Roboto";
    font-size: 0.6em;
    font-weight: 900;
    padding: 5px;
    background: rgba(0, 0, 0, 0.3);
    color: var(--white);
    border-radius: 5px;
  }

  .fav-image {
    z-index: 500;
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px;
    i {
      font-size: 1.5em;
      color: ${props => (props.isFav ? "var(--primary)" : "rgba(0,0,0,.5)")};
      -webkit-text-stroke-width: 1.5px;
      -webkit-text-stroke-color: white;
    }
  }
`;

function CarouselImage({ images, isCard, isFav }) {
  let listImage = useRef();
  let [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    let listElement = listImage.current;
    function onDragImage() {
      let numberImage =
        Math.round((listElement.scrollLeft + 1) / listElement.offsetWidth) + 1;
      setCurrentImage(numberImage);
    }
    listElement.addEventListener("scroll", onDragImage);
    return () => {
      listElement.removeEventListener("scroll", onDragImage);
    };
  }, []);
  return (
    <CarouselImageStyled isFav={isFav}>
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
        <div className="counter-image">
          {currentImage}/{images.length}
        </div>

        {isCard && (
          <div className="fav-image">
            <i className="fas fa-heart"></i>
          </div>
        )}
      </div>
    </CarouselImageStyled>
  );
}

export default CarouselImage;
