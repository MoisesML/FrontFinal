import axios from "axios";

const URL = "https://projecto-codigo-final.herokuapp.com";

const informacionEmpresa = async (id) => {
    try {
        const URI = `${URL}/empresa/${id}`;
        let informacion = await axios.get(URI);
        return informacion;
    } catch (error) {
        return error;
    };
};

const anunciosEmpresa = async (id) => {
    try {
        const URI = `${URL}/anuncios/${id}`;
        let anuncios = await axios.get(URI);
        return anuncios;
    } catch (error) {
        console.log(error);
    };
};

export { informacionEmpresa, anunciosEmpresa }