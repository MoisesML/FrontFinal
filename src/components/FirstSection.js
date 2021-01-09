import React from "react";
import Carrusel from "../components/Carrusel";
import Buscador from "../components/Buscador";
import "./css/FirstSection.css";
import { Link } from "react-router-dom";

export default function FirstSection({ informacion }) {
  return (
    <div className="container py-4">
      <div className="row align-items-center justify-content-center">
        <Buscador />
      </div>
      <div className="row align-items-center justify-content-center ">
        {informacion[0] === null ? (
          <div className="anuncieAqui p-4 row align-items-center justify-content-center">
            <div className="col-sm-12">
              <h3 className="text-center">
                Aquí encuentras el mejor talento humano
              </h3>
              <p className="text-center">
                Miles de empresas como la tuya han tenido éxito contratando los
                mejores profesionales a través de Frisvie
              </p>
            </div>
            <div className="col-sm-12">
              <Link className="btn btn-primary" to="/login/empresa">Publica tus vacantes</Link>
            </div>
          </div>
        ) : (
          <div className="col-sm-12 justify-content-center">
            <Carrusel anuncios={informacion} />
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-sm-8">Haber</div>
        <div className="col-sm-4">Haber</div>
      </div>
    </div>
  );
}
