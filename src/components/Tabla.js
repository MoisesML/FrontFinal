import React, { Fragment } from "react";
import TablaItem from "./TablaItem";
import Loading from "./Loading";

export default function Tabla({ datos, tipo }) {
  console.log(datos)
  if (datos !== undefined) {
    console.log(datos)
    const cantidad = datos.length;
    console.log(cantidad);

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {tipo === "anuncio" ? (
                <Fragment>
                  <th scope="col">#</th>
                  <th scope="col">Puesto</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col"># Postulantes</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Contratado</th>
                  <th scope="col">Detalle</th>
                </Fragment>
              ) : tipo === "cv" ? (
                <Fragment>
                  <th scope="col">#</th>
                  <th scope="col">CV</th>
                  <th scope="col">ID</th>
                </Fragment>
              ) : tipo === "postulaciones" ? (
                <Fragment>
                  <th scope="col">#</th>
                  <th scope="col">Puesto</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Detalle</th>
                </Fragment>
              ) : (
                "No hay tipo de info"
              )}
            </tr>
          </thead>
          <tbody>
            {cantidad > 0 ? (
              datos.map((dato, i) => {
                return <TablaItem key={i} dato={dato} tipo={tipo} />;
              })
            ) : (
              <div>No hay info en la tabla</div>
            )}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <Loading />;
  }
}
