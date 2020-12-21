import React from "react";
import Carrusel from '../components/Carrusel';
import Buscador from '../components/Buscador';
// import 

export default function FirstSection({informacion}) {

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <Buscador />
      </div>
      <div className="row justify-content-md-center ">
        <div className="col-sm-12">
        <Carrusel anuncios={informacion}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">Haber</div>
        <div className="col-sm-4">Haber</div>
      </div>
    </div>
  );
}
