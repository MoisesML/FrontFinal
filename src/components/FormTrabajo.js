import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";
import { agregarTrabajo } from '../Services/PersonaServices';

export default function FormTrabajo({id}) {
    let { register, handleSubmit } = useForm();

    const registrarTrabajo = async (objTrabajo) => {
        console.log(objTrabajo)
        let { trab_func } = objTrabajo
        console.log(trab_func, typeof trab_func)
        let { data } = await agregarTrabajo(id, objTrabajo)
        console.log(data)
      };

    return (
        <Fragment>
      <div className="d-flex flex-column align-items-center mb-4">
        <div>Registrar trabajos</div>
      </div>
      <div className="row justify-content-center">
        <form id="crear" className="col-8" onSubmit={handleSubmit(registrarTrabajo)}>
          <div className="form-group">
            <label>Puesto de trabajo</label> 
            <input
              className="form-control"
              name="trab_pue"
              type="text"
              placeholder="Ingrese su nombre"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Empresa</label>
            <input
              className="form-control"
              name="trab_emp"
              type="text"
              placeholder="Ingrese su nombre"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Funciones realizadas</label>
            <textarea
              className="form-control"
              name="trab_func"
              type="text"
              placeholder="Ingrese su apellido"
              ref={register({ required: false })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de inicio</label>
            <input
              className="form-control"
              name="trab_ini"
              type="date"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de fin</label>
            <input
              className="form-control"
              name="trab_fin"
              type="date"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <button className="btn btn-primary align-self-center" type="submit">
            Registrar trabajo
          </button>
        </form>
      </div>
    </Fragment>
    )
}
