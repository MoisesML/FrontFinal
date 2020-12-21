import axios from 'axios';

// const URL = 'http://127.0.0.1:5000';
const URL = 'https://projecto-codigo-final.herokuapp.com';

const informacionPersona = async (id) => {
    try {
        const URI = `${URL}/persona/${id}`;
        let informacion = await axios.get(URI);
        return informacion;
    } catch (error) {
        return error;
    }
}

const traerPersonas = async () => {
    try {
        const URI = `${URL}/personas/`;
        let { data } = await axios.get(URI);
        return data.content
    } catch (error) {
        return error;
    }
}

export {
    informacionPersona,
    traerPersonas,
}