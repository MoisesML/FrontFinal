import React from "react";

export default function CVInfo({ nombreCompleto, direccion, dni }) {
  return (
    <div>
      <div className="row justify-content-center">
        <b>{nombreCompleto}</b>
      </div>
      <div className="row">
        <div className="col justify-items-center">
          Direccion:
          <br />
          <b>{direccion}</b>
        </div>
        <div className="col justify-items-center">
          Edad:
          <br />
          <b>{"edad años"}</b>
        </div>
        <div className="col justify-items-center">
          DNI:
          <br />
          <b>{dni}</b>
        </div>
      </div>
    </div>
  );
}
