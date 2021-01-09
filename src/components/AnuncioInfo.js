import React, { useEffect, useContext, Fragment, useState } from "react";
import Tabla from "./Tabla";
import ModalForm from "./ModalForm";
import { SessionContext } from "../context/SessionContext";
import { Link } from "react-router-dom";
import { verificarPostulacion } from "../Services/PersonaServices";

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
  const [verificar, setVerificar] = useState(false);

  const verificarContext = () => {
    if (id === null) {
      setId(id2);
      setTipo(tipo2);
      setSessionUser(token2);
      setNombreCompleto(nombre2);
    }
  };

  const verificarPost = async () => {
    console.log(id, id !=null)
    if (id !== null) {
      let { data } = await verificarPostulacion(id2, idAnuncio, token2);
      let { ok } = data;
      setVerificar(ok);
    } else {
      console.log("nada")
    }
  };

  useEffect(() => {
    verificarContext();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    verificarPost();
    // eslint-disable-next-line
  }, []);

  if (informacion !== null) {
    const {
      // anun_cont,
      anun_desc,
      // anun_emId,
      anun_empr,
      // anun_esco,
      // anun_esta,
      anun_post,
      anun_psto,
    } = informacion;

    return (
      <Fragment>
        <div>
          <h1 className="mb-3">{anun_psto}</h1>
          {tipo === "empresa" ? (
            <Tabla datos={anun_post} tipo="cv" />
          ) : (
            // <div>sOY EMPRESA</div>
            <Fragment>
              <h3>{anun_empr}</h3>
              <h4>Descripcion del puesto</h4>
              <p>{anun_desc}</p>
              {user !== "null" ? (
                verificar ? (
                  <button className="btn btn-primary">Ya postulaste</button>
                ) : (
                  <Fragment>
                    <ModalForm
                      id={id}
                      titulo={"Enviar postulación"}
                      informacion={informacion}
                      tipo={user !== "null" ? "postulacion" : "unlogin"}
                    />
                  </Fragment>
                )
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
