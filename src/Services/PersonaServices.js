import axios from 'axios';

const informacionPersona = async (id) => {
    try {
        const URL = `http://127.0.0.1:5000/persona/${id}`;
        let informacion = axios.get(URL);
        return informacion;
    } catch (error) {
        return error;
    }
}

export {
    informacionPersona,
}