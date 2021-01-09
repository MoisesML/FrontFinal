import React from "react";
import { Card, Button } from "react-bootstrap";
import "./css/Tarjeta.css";

export default function Tarjeta({ information, dato, detalleAnuncio }) {
  if (dato === "persona") {
    let { per_nomb, per_apel, per_img } = information;
    return (
      <Card className="row tarjeta d-flex flex-row">
        <div className="col-sm-4 p-3">
          <img className="foto" src={per_img} alt="foto de perfil" />
        </div>
        {/* <Card.Header>{per_nomb, per_apel}</Card.Header> */}
        <Card.Body className="col-sm-8">
          <Card.Title>{per_nomb + " " + per_apel}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    );
  } else {
    let { anun_empr, anun_psto, _id, anun_ubic, anun_inic } = information;

    const selectAnuncio = () => {
      detalleAnuncio("espera");
      detalleAnuncio(_id);
    }
    return (
      <Card className="tarjeta">
        <Card.Body>
          <div>{anun_empr}</div>
          <Card.Title>{anun_psto}</Card.Title>
          <Card.Text>
            {anun_ubic}
          </Card.Text>
          <div className="d-flex flex-row justify-content-between">
          <Button variant="primary" onClick={selectAnuncio}>Ver detalle</Button>
          <p>Publicado el {anun_inic}</p>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
