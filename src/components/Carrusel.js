import React from "react";
import CarruselItem from "../components/CarruselItem";
import { Carousel } from "react-bootstrap";

export default function Carrusel({ anuncios }) {
  return (
    <Carousel>
      {anuncios.map((anun, i) => {
        return (
          <Carousel.Item key={i} interval={1000}>
            <CarruselItem anun={anun} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
