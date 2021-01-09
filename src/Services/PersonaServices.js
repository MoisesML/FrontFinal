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

const actualizarPersona = async (id, objPersona, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/editar/${id}/`;
    let headers = {
      "Authorization":tokken,
    };
    let { data } = await axios.put(URI, objPersona, { headers });
    return data;
  } catch (error) {
    return error;
  }
};

const agregarTelefono = async (id, objFono, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/telefono/${id}`;
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.post(URI, objFono, { headers })
    return data
  } catch (error) {
    return error
  }
};

const quitarTelefono = async (id, idFono, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/eliminarFono/${id}/${idFono}`;
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.delete(URI, { headers })
    return data
  } catch (error) {
    return error
  }
};

const editarTelefono = async (id, idFono, objFono, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/fono/${id}/${idFono}`;
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.put(URI, objFono, { headers })
    return data
  } catch (error) {
    return error;
  }
};

const agregarEstudio = async (id, objEstudio, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/estudio/${id}`;
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.post(URI, objEstudio, { headers })
    return data
  } catch (error) {
    return error
  }
};

const quitarEstudio = async (id, idEstudio, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/eliminarEstudio/${id}/${idEstudio}`;
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.delete(URI, { headers })
    return data
  } catch (error) {
    return error
  }
};

const agregarTrabajo = async (id, objTrabajo, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/trabajo/${id}`;
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.post(URI, objTrabajo, { headers })
    return data
  } catch (error) {
    return error
  }
};

const quitarTrabajo = async (id, idTrabajo, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/eliminarTrabajo/${id}/${idTrabajo}`;
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.delete(URI, { headers })
    return data
  } catch (error) {
    return error
  }
};

const postularAnuncio = async (id, objPostulante, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/postulante/${id}`
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let postulacion = await axios.post(URI, objPostulante, { headers });
    return postulacion;
  } catch (error) {
    return error;
  }
};

const traerPostulacionesPersona = async (id, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/postulaciones/persona/${id}`
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.get(URI, { headers });
    return data;
  } catch (error) {
    return error;
  }
};

const verificarPostulacion = async (id, idAn, token) => {
  try {
    let tokken = "Bearer " + token
    const URI = `${URL}/postulacion/${id}/${idAn}`
    let headers = {
      "Content-Type": "application/json",
      "Authorization":tokken,
    };
    let data = await axios.get(URI, { headers });
    return data;
  } catch (error) {
    return error;
  }
};

export { informacionPersona, traerPersonas, subirImagen, actualizarPersona, agregarTelefono, quitarTelefono, editarTelefono, agregarEstudio, quitarEstudio, agregarTrabajo, quitarTrabajo, postularAnuncio, traerPostulacionesPersona, verificarPostulacion };
