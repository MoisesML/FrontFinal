import axios from 'axios';

// const URL = 'http://127.0.0.1:5000';
const URL = 'https://projecto-codigo-final.herokuapp.com';

const registrarPersona = async (objPersona) => {
    try {
        const URI = `${URL}/registro`;
        let headers = {
            "Content-Type":"application/json",
        };
        let datos = axios.post(URI, objPersona, { headers });
        return datos;
    } catch (error) {
        return error
    }
}

const loginPersona = async (objCredenciales) => {
    try {
        const URI = `${URL}/login`;
        let headers = {
            "Content-Type":"application/json"
        };
        let datos = axios.post(URI, objCredenciales, { headers })
        return datos
    } catch (error) {
        return error;
    }
}

export {
    loginPersona,
    registrarPersona,
}