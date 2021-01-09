import React, { useState, useEffect} from "react";
import "./css/CVInfo.css";

export default function CVInfo({ nombreCompleto, direccion, dni, foto, fnac }) {
  const [edad,setEdad] = useState(0);

  const calcularEdad = () => {
    console.log(fnac, typeof fnac)
    let fechas = fnac.split("-");
    let faño = parseInt(fechas[0]);
    let fmes = parseInt(fechas[1]);
    let fdia = parseInt(fechas[2]);

    let año = new Date().getFullYear();
    let mes = new Date().getMonth() + 1;
    let dia = new Date().getDate();

    let calculo = año - faño + (mes <= fmes ? (dia < fdia ? -1 : 0) : 0);
    console.log(calculo)
    setEdad(calculo);
  };

  useEffect(() => {
    if (fnac !== null) {
      calcularEdad();
    }
  })

  return (
    <div className="contenedor my-2 p-2">
      <div className="row justify-content-center my-2">
        <img className="fotoPerfil" src={foto} alt="foto de perfil" />
      </div>
      <div className="row justify-content-center my-2">
        <b>{nombreCompleto}</b>
      </div>
      <div className="row my-2">
        <div className="col d-flex flex-column justify-content-center">
          <p className="text-center m-0">Direccion:</p>
          <b className="text-center m-0">{direccion}</b>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <p className="text-center m-0">Edad:</p>
          <b className="text-center m-0">{edad} años</b>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <p className="text-center m-0">DNI:</p>
          <b className="text-center m-0">{dni}</b>
        </div>
      </div>
    </div>
  );
}
