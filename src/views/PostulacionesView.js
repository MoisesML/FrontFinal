import React, { useState, useEffect, Fragment } from "react";
import Loading from "../components/Loading";
import Tabla from "../components/Tabla";
import { Link } from "react-router-dom";
import { traerPostulacionesPersona } from "../Services/PersonaServices";

export default function PostulacionesView(props) {
  const { id } = props.match.params;
  const [cargando, setCargando] = useState(true);
  const [informacion, setInformacion] = useState([]);
  const token = sessionStorage.getItem("token");

  const traerPostulaciones = async () => {
    let { data } = await traerPostulacionesPersona(id, token);
    let { content } = data;
    setInformacion(content);
    setCargando(false);
    console.log(data);
  };

  useEffect(() => {
    traerPostulaciones();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="container">
            <h2 className="text-center">Mis postulaciones</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <Tabla datos={informacion} tipo="postulaciones" />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
