import axios from 'axios';

// const URL = 'http://127.0.0.1:5000';
const URL = 'https://projecto-codigo-final.herokuapp.com';

const buscarAnuncios = async (puesto, lugar) => {
    try {
        const URI = `${URL}/anuncios/keyword/${puesto}`;
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

const crearAnuncio = async (objAnuncio) => {
    try {
        const URI = `${URL}/crear/anuncio`;
        let headers = {
            "Content-Type":"application/json",
        };
        let { data } = await axios.post(URI, objAnuncio, { headers });
        return data.content
    } catch (error) {
        return error
    }
}

export {
    buscarAnuncios,
    anunciosContratados,
    crearAnuncio,
}