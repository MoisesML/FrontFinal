import React from "react";
import "./css/Foot.css";

export default function Foot() {
  const nivelLaboral = [
    "Senior",
    "Junior",
    "Otros",
    "Jefe/Supervisor",
    "Gerencia",
    "Dirección",
  ];
  const provincia = [
    "Lima",
    "Arequipa",
    "La Libertad",
    "Piura",
    "Ica",
    "Lambayeque",
  ];
  const area = [
    "Comercial, Ventas y Negocios",
    "Tecnología y Sistemas y Telecomunicaciones",
    "Administración, Contabilidad y Finanzas",
    "Oficios y otros",
  ];

  return (
    <div className="foot">
      <div className="container py-3">
        <div className="row">
          <div className="col-3">
            <h6>Nivel laboral</h6>
            <ul>
              {nivelLaboral.map((nivel, i) => {
                return <li key={i}>{nivel}</li>;
              })}
            </ul>
          </div>
          <div className="col-3">
            <h6>Provincia</h6>
            <ul>
              {provincia.map((prov, i) => {
                return <li key={i}>{prov}</li>;
              })}
            </ul>
          </div>
          <div className="col-3">
            <h6>Área</h6>
            <ul>
              {area.map((are, i) => {
                return <li key={i}>{are}</li>;
              })}
            </ul>
          </div>
          <div className="col-3">
            <h6>Potencia tu búsqueda</h6>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="col-9">
            Politicas Condiciones Politicas 2 Aviso Legal
          </div>
        </div>
        <div>Copyright Grupo 7 2020</div>
      </div>
    </div>
  );
}
