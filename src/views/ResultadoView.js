import React, { useEffect, useState, Fragment } from "react";
import AnuncioInfo from "../components/AnuncioInfo";
import Loading from "../components/Loading";
import Tarjetas from "../components/Tarjetas";
import {
  buscarAnuncios,
  buscarAnunciosPuesto,
  buscarAnunciosLugar,
  traerAnuncio,
  traerAnuncios
} from "../Services/AnuncioServices";

export default function ResultadoView(props) {
  const { puesto, lugar } = props.match.params;

  const [anuncios, setAnuncios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [resultado, setResultado] = useState("resultados");
  const [detalle, setDetalle] = useState(null);
  console.log(resultado);

  const getAnuncios = async () => {
    let anuncios;
    if (lugar === "all" && puesto === "all") {
      anuncios = await traerAnuncios();
    } else if (lugar === "all" && puesto !== "all") {
      anuncios = await buscarAnunciosPuesto(puesto);
    } else if (lugar !== "all" && puesto === "all") {
      anuncios = await buscarAnunciosLugar(lugar);
    }else {
      anuncios = await buscarAnuncios(puesto, lugar);
    }
    setAnuncios(anuncios);
    setCargando(false);
  };

  const ponerAnuncio = async (id) => {
    setResultado("espera");
    let { data } = await traerAnuncio(id);
    let contenido = data.content;
    setDetalle(contenido);
    console.log(detalle);
    setResultado(id);
    console.log(id)
  };

  useEffect(() => {
    getAnuncios();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div className="container">
          {lugar === "all" && puesto === "all" ? (
            <h2>Estos son todos los puestos de trabajo :</h2>
          ) : lugar === "all" && puesto !== "all" ? (
            <h2>Resultado de la búsqueda: {puesto}</h2>
          ) : lugar !== "all" && puesto === "all" ? (
            <h2>Resultado de la búsqueda: {lugar}</h2>
          ) : (
            <h2>Resultado de la búsqueda: {puesto} en {lugar}</h2>
          )}
          <div className="row">
            <div className="col-sm-4">
              <Tarjetas
                informacion={anuncios}
                tipo={"anuncio"}
                detalleAnuncio={ponerAnuncio}
              />
            </div>
            <div className="col-sm-8">
              {resultado === "espera" ? (
                <Loading />
              ) : resultado === "resultados" ? (
                "Estos son los resultados"
              ) : (
                <AnuncioInfo informacion={detalle} idAnuncio={resultado} />
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
