import React, { useState, useEffect } from 'react';
import { traerAnuncio } from "../Services/AnuncioServices";
import AnuncioInfo from "../components/AnuncioInfo";

export default function DetalleAnuncioView(props) {
    const { id } = props.match.params;
    const [informacion, setInformacion] = useState(null);

    const getAnuncio = async () => {
        let { data } =await traerAnuncio(id);
        let { content } = data;
        console.log(content)
        setInformacion(content);
    }

    useEffect(() => {
        getAnuncio();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <AnuncioInfo informacion={informacion} idAnuncio={id} />
        </div>
    )
}
