import React from 'react';
import { useForm } from "react-hook-form";
import { postularAnuncio } from "../Services/PersonaServices";

export default function FormPostulacion({id}) {
    // const idp = sessionStorage.getItem("id");
    let { register, handleSubmit } = useForm();

    const registrarPostulacion = async (objPostulante) => {
        let  data  = await postularAnuncio(id, objPostulante)
        console.log(data)
        // console.log(objPostulante, id)
    }

    return (
        <div className="container">
      <div className="row justify-content-center my-3">
        <form className="col-sm-10" onSubmit={handleSubmit(registrarPostulacion)}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              name="post_id"
              type="text"
              placeholder="Ingrese su nombre"
              required="required"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>CV</label>
            <input
              name="post_cv"
              className="form-control"
              type="text"
              placeholder="Ingrese su cv"
              ref={register({ required: false })}
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
