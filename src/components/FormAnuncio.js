import React, { useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { SessionContext } from '../context/SessionContext';

export default function FormAnuncio({publicarAnuncio}) {
    let { register, handleSubmit, setValue } = useForm();
    const { nombreCompleto, id } = useContext(SessionContext);

    const crearAnuncio = (objAnuncio) => {
        publicarAnuncio(objAnuncio);
        // console.log(objAnuncio);
    }

    let traerValores = () => {
        setValue("anun_emId", id);
        setValue("anun_empr", nombreCompleto);
    }
  
    useEffect(() => {
      traerValores();
      // eslint-disable-next-line
    }, []);

    return (
        <div className="row justify-content-center my-3">
      <form className="col-sm-6" onSubmit={handleSubmit(crearAnuncio)}>
        <div className="form-group">
          <label>Puesto del anuncio</label>
          <input
            type="text"
            className="form-control"
            id="anun_psto"
            name="anun_psto"
            placeholder="Ingrese el puesto del anuncio"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>ID de la empresa</label>
          <input
            type="text"
            className="form-control"
            id="anun_emId"
            name="anun_emId"
            placeholder="Ingrese el puesto del anuncio"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Empresa del anuncio</label>
          <input
            type="text"
            className="form-control"
            id="anun_empr"
            name="anun_empr"
            placeholder="Ingrese la empresa del anuncio"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <input
            type="text"
            className="form-control"
            id="anun_desc"
            name="anun_desc"
            placeholder="Ingrese la descripcion del anuncio"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Estado de contratado</label>
          <input
            type="checkbox"
            className="form-control"
            id="anun_cont"
            name="anun_cont"
            placeholder="Ingrese la descripcion del anuncio"
            ref={register({ required: false })}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Publicar anuncio
        </button>
      </form>
    </div>
    )
}
