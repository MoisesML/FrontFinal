import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Item.css";

export default function CarruselItem({ anun }) {
  let { anun_empr, anun_psto, _id } = anun;
  const detalle = `/anuncio/detalle/${_id}`;

  return (
    <div>
      <div className="ejemplo"></div>
      <Carousel.Caption>
        <div className="row">
          <div className="col-sm-3">
            <img
              className="d-block w-100 imagen"
              // src="https://play-lh.googleusercontent.com/f35RMXXJjKSlUptfB6DZ9tIqHxEVIS-cszNfZ5fvjHPxnrbgg9hr-KBdIEiUcz1Ba3M"
              src="https://picsum.photos/seed/picsum/800/800"
              alt="First slide"
            />
          </div>
          <div className="col-sm-9">
            <h3 className="ejemplo2">{anun_psto + ' - ' + anun_empr}</h3>
            <p className="ejemplo2">
              Descripcion del trabajo
            </p>
            <Link to={detalle}><button className="btn btn-light">Postularme</button></Link>
          </div>
        </div>
      </Carousel.Caption>
    </div>
  );
}
