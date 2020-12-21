import React, { useState, useEffect, Fragment } from "react";
import Tarjetas from "../components/Tarjetas";
import Loading from "../components/Loading";
import { traerPersonas } from "../Services/PersonaServices";

export default function PruebasView() {
  const [info, setInfo] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getPersonas = async () => {
    let infoPer = await traerPersonas();
    setInfo(infoPer);
    setCargando(false);
  };

  useEffect(() => {
    getPersonas();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <Tarjetas informacion={info} tipo={'persona'} />
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
