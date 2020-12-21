import React, { useEffect, useState, Fragment } from "react";
import Loading from "../components/Loading";
import Tarjetas from "../components/Tarjetas";
import { buscarAnuncios } from "../Services/AnuncioServices";

export default function ResultadoView(props) {
  const { puesto, lugar } = props.match.params;

  const [anuncios, setAnuncios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getAnuncios = async () => {
    let anuncios = await buscarAnuncios(puesto, lugar);
    setAnuncios(anuncios);
    setCargando(false);
  };

  useEffect(() => {
    getAnuncios();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div className="container">
          {lugar === "all" ? (
            <h2>Resultado de la búsqueda: {puesto}</h2>
          ) : (
            <h2>
              Resultado de la búsqueda: {puesto} en {lugar}
            </h2>
          )}
          <div className="row">
            <div className="col-sm-4">
            <Tarjetas informacion={anuncios} tipo={'anuncio'}/>
            </div>
            <div className="col-sm-8">
            Aca el detalle
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
