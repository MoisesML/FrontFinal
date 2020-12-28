import React, { useState, useEffect, Fragment, useContext } from "react";
import Loading from "../components/Loading";
import FirstSeccion from "../components/FirstSection";
import { SessionContext } from "../context/SessionContext";
import { anunciosContratados } from "../Services/AnuncioServices";

export default function InicioView() {
  const { user, setSessionUser } = useContext(SessionContext);
  const [anuncios, setAnuncios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getAnuncios = async () => {
    let anuncios = await anunciosContratados();
    setAnuncios(anuncios);
    setCargando(false);
  };

  useEffect(() => {
    getAnuncios();
    setSessionUser(sessionStorage.getItem("token"));
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {cargando ? <Loading /> : <FirstSeccion informacion={anuncios} />}
    </Fragment>
  );
}
