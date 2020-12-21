import axios from 'axios';

const URL = 'http://127.0.0.1:5000'

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

export {
    buscarAnuncios,
    anunciosContratados,
}