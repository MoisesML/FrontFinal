import React from "react";
import CVItem from "./CVItem";

export default function CVArray({ tipo, datos, setActualizar }) {
  const cantidad = datos.length;
  return (
    <div className="row justify-content-center">
      {cantidad > 0 ? (
        datos.map((dato, i) => {
          return <CVItem key={i} dato={dato} tipo={tipo} setActualizar={setActualizar}/>
        })
      ) : (
        <div>No hay datos para mostrar</div>
      )}
    </div>
  );
}
