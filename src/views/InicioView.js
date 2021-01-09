import React, { useState, useEffect, Fragment, useContext } from "react";
import Loading from "../components/Loading";
import FirstSeccion from "../components/FirstSection";
import { SessionContext } from "../context/SessionContext";
import { anunciosContratados } from "../Services/AnuncioServices";

export default function InicioView() {
  const {
    setSessionUser,
    setNombreCompleto,
    id,
    setId,
    setTipo,
  } = useContext(SessionContext);
  let id2 = sessionStorage.getItem("id");
  let tipo2 = sessionStorage.getItem("tipo");
  let token2 = sessionStorage.getItem("token");
  let nombre2 = sessionStorage.getItem("nombre");
  const [anuncios, setAnuncios] = useState([]);
  const [cargando, setCargando] = useState(true);
  console.log(id2, id);

  const getAnuncios = async () => {
    let anuncios = await anunciosContratados();
    console.log(anuncios)
    if (anuncios === null) {
      setAnuncios([null]);
    } else if (anuncios == "Error") {
      console.log("sucedio un error")
    } else {
      setAnuncios(anuncios);
    };
    setCargando(false);
  };

  const verificarContext = () => {
    if (id2 === null) {
      sessionStorage.setItem("token", null);
      sessionStorage.setItem("nombre", null);
      sessionStorage.setItem("id", null);
      sessionStorage.setItem("tipo", null);
    };
    if (id === null) {
      setId(id2);
      setTipo(tipo2);
      setSessionUser(token2);
      setNombreCompleto(nombre2);
    }
  };

  useEffect(() => {
    verificarContext();
    getAnuncios();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {cargando ? <Loading /> : <FirstSeccion informacion={anuncios} />}
      <div>Hola</div>
    </Fragment>
  );
}
