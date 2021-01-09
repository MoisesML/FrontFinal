import axios from 'axios';

const URL = 'https://projecto-codigo-final.herokuapp.com';

const buscarAnuncios = async (puesto, lugar) => {
    try {
        const URI = `${URL}/busqueda/${puesto}/${lugar}`;
        let { data } = await axios.get(URI);
        return data.content;
    } catch (error) {
        return error;
    }
};

const buscarAnunciosPuesto = async (puesto) => {
    try {
        const URI = `${URL}/puesto/${puesto}`;
        let { data } = await axios.get(URI);
        return data.content;
    } catch (error) {
        return error;
    }
};

const buscarAnunciosLugar = async (lugar) => {
    try {
        const URI = `${URL}/lugar/${lugar}`;
        let { data } = await axios.get(URI);
        return data.content;
    } catch (error) {
        return error;
    }
};

const anunciosContratados = async () => {
    try {
        const URI = `${URL}/anuncioscontratados`;
        let { data } = await axios.get(URI);
        return data.content;
    } catch (error) {
        return error;
    }
};

const crearAnuncio = async (objAnuncio, token) => {
    console.log(token)
    try {
        let tokken = "Bearer " + token
        const URI = `${URL}/crear/anuncio`;
        let headers = {
            "Content-Type":"application/json",
            "Authorization":tokken,
        };
        console.log(headers)
        let { data } = await axios.post(URI, objAnuncio, { headers });
        return data
    } catch (error) {
        return error
    }
};

const traerAnuncio = async (id) => {
    try {
        const URI = `${URL}/anuncio/${id}`;
        let anuncio = await axios.get(URI);
        return anuncio;
    } catch (error) {
        return error;
    }
};

const traerAnuncios = async () => {
    try {
        const URI = `${URL}/anuncios`;
        let { data } = await axios.get(URI);
        return data.content;
    } catch (error) {
        return error;
    }
};

export {
    buscarAnuncios,
    buscarAnunciosLugar,
    buscarAnunciosPuesto,
    anunciosContratados,
    crearAnuncio,
    traerAnuncio,
    traerAnuncios,
}