import axios from "axios";

const URL = "https://projecto-codigo-final.herokuapp.com";

const informacionPersona = async (id) => {
  try {
    const URI = `${URL}/persona/${id}`;
    let informacion = await axios.get(URI);
    return informacion;
  } catch (error) {
    return error;
  }
};

const traerPersonas = async () => {
  try {
    const URI = `${URL}/personas/`;
    let { data } = await axios.get(URI);
    return data.content;
  } catch (error) {
    return error;
  }
};

const subirImagen = (imagen, refStorage) => {
  return new Promise((resolve, reject) => {
    const tarea = refStorage.put(imagen);

    tarea.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      () => {
        tarea.snapshot.ref.getDownloadURL()
          .then((urlImagen) => {
            resolve(urlImagen);
          })
          .catch((error) => reject(error));
      }
    );
  });
};

const actualizarPersona = async (id, objPersona) => {
  try {
    const URI = `${URL}/editar/${id}/`;
    let { data } = await axios.put(URI, objPersona);
    return data;
  } catch (error) {
    return error;
  }
};

const agregarTelefono = async (id, objFono) => {
  try {
    const URI = `${URL}/telefono/${id}`;
    let headers = {
      "Content-Type": "application/json",
    };
    let data = await axios.post(URI, objFono, { headers })
    return data
  } catch (error) {
    return error
  }
};

const agregarEstudio = async (id, objEstudio) => {
  try {
    const URI = `${URL}/estudio/${id}`;
    let headers = {
      "Content-Type": "application/json",
    };
    let data = await axios.post(URI, objEstudio, { headers })
    return data
  } catch (error) {
    return error
  }
};

const agregarTrabajo = async (id, objTrabajo) => {
  try {
    const URI = `${URL}/trabajo/${id}`;
    let headers = {
      "Content-Type": "application/json",
    };
    let data = await axios.post(URI, objTrabajo, { headers })
    return data
  } catch (error) {
    return error
  }
};

const postularAnuncio = async (id, objPostulante) => {
  try {
    const URI = `${URL}/postulante/${id}`
    let headers = {
      "Content-Type": "application/json",
    };
    let postulacion = await axios.post(URI, objPostulante, { headers });
    return postulacion;
  } catch (error) {
    return error;
  }
}

export { informacionPersona, traerPersonas, subirImagen, actualizarPersona, agregarTelefono, agregarEstudio, agregarTrabajo, postularAnuncio };
