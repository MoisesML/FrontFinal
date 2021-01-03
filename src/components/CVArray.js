import React from "react";
import CVItem from "./CVItem";

export default function CVArray({ tipo, datos }) {
  const cantidad = datos.length;
  return (
    <div>
      {cantidad > 0 ? (
        datos.map((dato, i) => {
          return <CVItem key={i} dato={dato} tipo={tipo} />
        })
      ) : (
        <div>No hay datos para mostrar</div>
      )}
    </div>
  );
}
