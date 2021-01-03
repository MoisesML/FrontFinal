import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";
import { agregarEstudio } from '../Services/PersonaServices';

export default function FormEstudios({id}) {
  let { register, handleSubmit } = useForm();

  const registrarEstudio = async (objEstudio) => {
    console.log(objEstudio)
    let estudio = await agregarEstudio(id, objEstudio)
    console.log(estudio)
  };

    return (
        <Fragment>
      <div className="d-flex flex-column align-items-center mb-4">
        <div>Registrar estudios realizados</div>
      </div>
      <div className="row justify-content-center">
        <form id="crear" className="col-8" onSubmit={handleSubmit(registrarEstudio)}>
          <div className="form-group">
            <label>Título obtenido</label>
            <input
              className="form-control"
              name="est_nom"
              type="text"
              placeholder="Ingrese su nombre"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Nivel de estudio</label>
            <input
              className="form-control"
              name="est_nvl"
              type="text"
              placeholder="Ingrese su apellido"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Institución formadora</label>
            <input
              className="form-control"
              name="est_inst"
              type="text"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de inicio</label>
            <input
              className="form-control"
              name="est_ini"
              type="date"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de fin</label>
            <input
              className="form-control"
              name="est_fin"
              type="date"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <button className="btn btn-primary align-self-center" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </Fragment>
    )
}
