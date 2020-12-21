import React, { useState, useEffect, Fragment } from 'react';
import Loading from "../components/Loading";
import FirstSeccion from '../components/FirstSection';
import { anunciosContratados } from "../Services/AnuncioServices";

export default function InicioView() {
    const [anuncios, setAnuncios] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getAnuncios = async () => {
        let anuncios = await anunciosContratados();
        setAnuncios(anuncios);
        setCargando(false);
    }

    useEffect(() => {
        getAnuncios();
    }, [])

    return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <FirstSeccion informacion={anuncios}/>
      )}
    </Fragment>
    )
}
