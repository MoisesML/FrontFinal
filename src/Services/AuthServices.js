import axios from 'axios';

const registrarPersona = async (objPersona) => {
    try {
        let headers = {
            "Content-Type":"application/json",
        };
        let datos = axios.post('http://127.0.0.1:5000/registro/', objPersona, { headers });
        return datos;
    } catch (error) {
        return error
    }
}

const loginPersona = async (objCredenciales) => {
    try {
        let headers = {
            "Content-Type":"application/json"
        };
        let datos = axios.post('http://127.0.0.1:5000/login/', objCredenciales, { headers })
        return datos
    } catch (error) {
        return error;
    }
}

export {
    loginPersona,
    registrarPersona,
}