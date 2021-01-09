import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { postularAnuncio, subirImagen } from "../Services/PersonaServices";
import { storage } from "../config/firebase";
import Swal from "sweetalert2";

export default function FormPostulacion({
  id,
  informacion,
  handleClose,
  setActualizar,
  idAnuncio
}) {
  console.log(id, informacion);
  let curriculum;
  let { register, handleSubmit, setValue } = useForm();
  let nombre = sessionStorage.getItem("nombre");
  let token = sessionStorage.getItem("token");
  console.log(token)

  const llenarDatos = () => {
    setValue("post_nmPe", nombre);
  };

  const manejarCurriculum = (e) => {
    e.preventDefault();
    let miCurriculum = e.target.files[0];
    curriculum = miCurriculum;
  };

  const mandarPostulacion = async (obj) => {
    let { data } = await postularAnuncio(idAnuncio, obj, token);
    let { message, ok } = data;
    if (ok) {
      Swal.fire({
        title: "Mandar postulacion",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        title: "Mandar postulacion",
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const enviarCurriculum = async (objCv) => {
    let { _id, anun_emId, anun_empr, anun_psto } = informacion;
    let objAdicional = {
      post_idPe: id,
      post_idAn: _id,
      post_idEm: anun_emId,
      post_empr: anun_empr,
      post_psto: anun_psto,
    };

    if (curriculum !== undefined) {
      const refStorage = storage.ref(`curriculum/${nombre}`);
      subirImagen(curriculum, refStorage)
        .then((urlImagen) => {
          let objPostulacion = {
            ...objCv,
            ...objAdicional,
            post_cuvi: urlImagen,
          };
          mandarPostulacion(objPostulacion);
          setActualizar(true);
        })
        .catch((error) => {
          Swal.fire({
            title: "Actualizar datos",
            text: error,
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    } else {
      let objPostulacion = {
        ...objCv,
        ...objAdicional,
      };
      mandarPostulacion(objPostulacion);
      setActualizar(true);
    };
    handleClose();
  };

  useEffect(() => {
    llenarDatos();
  });

  return (
    <div className="container">
      <div className="row justify-content-center my-3">
        <form className="col-sm-10" onSubmit={handleSubmit(enviarCurriculum)}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              name="post_nmPe"
              type="text"
              placeholder="Ingrese su nombre"
              required="required"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>CV</label>
            <input
              name="post_cuvi"
              className="form-control"
              type="file"
              placeholder="Ingrese su cv"
              onChange={(e) => {
                manejarCurriculum(e);
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary mx-1">
              Guardar telefono
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-1"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
