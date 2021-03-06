import React, { useState, useEffect, useContext, Fragment } from "react";
import {
  informacionEmpresa,
  anunciosEmpresa,
} from "../Services/EmpresaServices";
import { informacionPersona } from "../Services/PersonaServices";
import { SessionContext } from "../context/SessionContext";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import Tabla from "../components/Tabla";
import { Link } from "react-router-dom";

export default function AdminView() {
  const {
    id,
    setId,
    tipo,
    setTipo,
    setSessionUser,
    setNombreCompleto,
  } = useContext(SessionContext);
  let id2 = sessionStorage.getItem("id");
  let tipo2 = sessionStorage.getItem("tipo");
  let token2 = sessionStorage.getItem("token");
  let nombre2 = sessionStorage.getItem("nombre");
  const [cargando, setCargando] = useState(true);
  const [persona, setPersona] = useState();
  const [anuncios, setAnuncios] = useState();
  const [actualizar, setActualizar] = useState(false);
  console.log(id, tipo, cargando);

  const verificarContext = () => {
    if (id === "null" || id === null) {
      console.log("SeteoContext", id2, tipo2);
      setId(id2);
      setTipo(tipo2);
      setSessionUser(token2);
      setNombreCompleto(nombre2);
    } else {
      console.log(id, "Context lleno");
    }
  };

  const mostrarInformacion = async () => {
    if (tipo === "persona") {
      const { data } = await informacionPersona(id);
      const temporal = data.content;
      console.log("persona", data);
      setPersona(temporal);
      setCargando(false);
      setActualizar(false)
    } else if (tipo === "empresa") {
      const { data } = await informacionEmpresa(id);
      const info = await anunciosEmpresa(id);
      const inter = info.data;
      const { content } = inter;
      console.log(data, "empresas");
      console.log(content, "anuncio");
      setAnuncios(content);
      setCargando(false);
    } else {
      console.log("No hay tipo");
      // setCargando(false)
    }
  };

  useEffect(() => {
    verificarContext();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    mostrarInformacion();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    mostrarInformacion();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (actualizar === true) {
      mostrarInformacion();
    }
    // eslint-disable-next-line
  }, [actualizar]);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        // Condicional para cada caso persona y empresa
        <div className="container">
            {tipo === "persona" ? (
              <Fragment>
                <div className="row justify-content-center">
                <div className="col-sm-4">Barra lateral</div>
                <div className="col-sm-8">
                  <Profile informacion={persona} id={id} setActualizar={setActualizar} />
                </div>
                </div>
              </Fragment>
            ) : tipo === "empresa" ? (
              <Fragment>
                <div className="row justify-content-center">
                <h1>Anuncios publicados</h1>
                </div>
                <div className="row">
                  <Link to="/anuncio">
                    <button className="btn btn-primary" >
                    Crear anuncio
                    </button>
                  </Link>
                </div>
                <div className="row justify-content-center">
                  <Tabla datos={anuncios} tipo={"anuncio"} />
                </div>
              </Fragment>
            ) : (
              <div>No estas logueado</div>
            )}
          </div>
      )}
    </Fragment>
  );
}
