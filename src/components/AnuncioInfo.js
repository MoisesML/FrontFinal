import React, { useEffect, useContext, Fragment } from "react";
import Tabla from "./Tabla";
// import Loading from "./Loading";
import ModalForm from "./ModalForm";
import FormPostulacion from "./FormPostulacion";
import { SessionContext } from "../context/SessionContext";
import { Link } from "react-router-dom";

export default function AnuncioInfo({ informacion, idAnuncio }) {
  const {
    user,
    setSessionUser,
    setNombreCompleto,
    id,
    setId,
    tipo,
    setTipo,
  } = useContext(SessionContext);
  let id2 = sessionStorage.getItem("id");
  let tipo2 = sessionStorage.getItem("tipo");
  let token2 = sessionStorage.getItem("token");
  let nombre2 = sessionStorage.getItem("nombre");

  const verificarContext = () => {
    if (id === null) {
      setId(id2);
      setTipo(tipo2);
      setSessionUser(token2);
      setNombreCompleto(nombre2);
    }
    console.log("id", id);
  };

  useEffect(() => {
    verificarContext();
    // eslint-disable-next-line
  });

  if (informacion !== null) {
    const {
      // anun_cont,
      // anun_desc,
      // anun_emId,
      // anun_empr,
      // anun_esco,
      // anun_esta,
      anun_post,
      anun_psto,
    } = informacion;
    console.log(informacion);

    return (
      <Fragment>
        <div>
          <h1>{anun_psto}</h1>
          {tipo === "empresa" ? (
            <Tabla datos={anun_post} tipo="cv" />
            // <div>sOY EMPRESA</div>
          ) : (
            <Fragment>
              {user !== "null" ? (
                <Fragment>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalPostulacion"
                  >
                    Enviar postulación
                  </button>
                  <ModalForm
                    id={"ModalPostulacion"}
                    titulo={"Enviar postulación"}
                    contenido={
                      user !== "null" ? (
                        <FormPostulacion id={id} />
                      ) : (
                        <Fragment>
                          <div>Debes loguearte para poder postular</div>
                          <Link to="/login">
                            <button className="btn">Iniciar sesión</button>
                          </Link>
                        </Fragment>
                      )
                    }
                  />
                </Fragment>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary">
                    Enviar postulación
                  </button>
                </Link>
              )}
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  } else {
    return <div>No hay</div>;
  }
}
