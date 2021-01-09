import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { postularAnuncio, subirImagen } from "../Services/PersonaServices";
import { storage } from "../config/firebase";
import Swal from "sweetalert2";

export default function FormPostulacion({id, informacion}) {
  console.log(id, informacion)
    let curriculum;
    let { register, handleSubmit, setValue } = useForm();
    let nombre = sessionStorage.getItem("nombre");
    let token = sessionStorage.getItem("token");

    const llenarDatos = () => {
        setValue("post_nmPe",nombre)
    }

    const manejarCurriculum = (e) => {
      e.preventDefault();
      let miCurriculum = e.target.files[0];
      curriculum = miCurriculum;
    };

    const mandarPostulacion = async (id, obj) => {
      let { data } = await postularAnuncio(id, obj, token)
      console.log(data)
    }

    const enviarCurriculum = async (objCv) => {
      let { _id, anun_emId, anun_empr, anun_psto } = informacion;
      let objAdicional = {
        post_idPe : id,
        post_idAn : _id,
        post_idEm : anun_emId,
        post_empr : anun_empr,
        post_psto : anun_psto,
      };
      if (curriculum !== undefined) {
        const refStorage = storage.ref(`curriculum/${nombre}`);
        subirImagen(curriculum, refStorage)
          .then((urlImagen) => {
            let objPostulacion = { ...objCv, ...objAdicional, post_cuvi : urlImagen,}
            mandarPostulacion(_id, objPostulacion)
          })
          .catch((error) => {
            Swal.fire({
              title: "Carga de CV",
              text: error,
              icon: "error",
              showConfirmButton: false,
              timer: 2000,
            });
          });
      } else {
        let objPostulacion = { ...objCv, ...objAdicional }
        mandarPostulacion(id, objPostulacion, token);
      }
    };

    useEffect(() => {
      llenarDatos();
    })

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
            <button type="submit" class="btn btn-primary mx-1">
              Guardar telefono
            </button>
            <button
              type="button"
              class="btn btn-secondary mx-1"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}
