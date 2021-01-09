import React, { useState, useEffect } from 'react';
import { traerAnuncio } from "../Services/AnuncioServices";
import AnuncioInfo from "../components/AnuncioInfo";
import { traerPostulacionesAnuncio } from "../Services/PersonaServices";

export default function DetalleAnuncioView(props) {
    const { id } = props.match.params;
    const [informacion, setInformacion] = useState(null);
    const [postulantes, setPostulantes] = useState();
    let tipo2 = sessionStorage.getItem("tipo");
    let token2 = sessionStorage.getItem("token");

    const getAnuncio = async () => {
        let { data } =await traerAnuncio(id);
        let { content } = data;
        console.log(content)
        setInformacion(content);
    }

    const traerPostulantes = async () => {
        if (tipo2 === "empresa") {
          let {data} = await traerPostulacionesAnuncio(id, token2);
          console.log(data.content)
          setPostulantes(data.content)
        } else {
          console.log("nada")
        }
      }

    useEffect(() => {
        getAnuncio();
        traerPostulantes();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <AnuncioInfo informacion={informacion} idAnuncio={id} tipo="empresa" postulantes={postulantes}/>
        </div>
    )
}
