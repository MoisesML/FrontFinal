import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FormAnuncio({ publicarAnuncio, token }) {
  console.log("token", token)
  let id2 = sessionStorage.getItem("id");
  let nombre2 = sessionStorage.getItem("nombre");
  let { register, handleSubmit, setValue } = useForm();
  
  const crearAnuncio = (objAnuncio) => {
    let token2 = sessionStorage.getItem("token")
    let { Depar, Distri, Provin, ...res } = objAnuncio;
    let ubicaciom = {
      anun_ubic: Depar + ", " + Provin + ", " + Distri,
    };
    let objAdicional = {
      anun_empr: nombre2,
      anun_emId: id2,
      anun_esta: true,
    };
    let objCreacion = { ...objAdicional, ...res, ...ubicaciom };
    publicarAnuncio(objCreacion, token2);
    // console.log(objCreacion, token)
  };

  let setearFecha = () => {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let m2;
    if (m <= 9) {
      m2 = "0" + m;
    }
    let d = n.getDate();
    let d2;
    if (d <= 9) {
      d2 = "0" + d;
    }
    let fecha = y + "-" + m2 + "-" + d2;
    setValue("anun_inic", fecha);
  };

  useEffect(() => {
    setearFecha();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row justify-content-center my-3">
      <form onSubmit={handleSubmit(crearAnuncio)}>
        <div className="row justify-content-center">
          <div className="form-group col-sm-6">
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
          <div className="form-group col-sm-4">
            <label>Salario</label>
            <input
              type="text"
              className="form-control"
              id="anun_suel"
              name="anun_suel"
              placeholder="Ingrese el puesto del anuncio"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <textarea
            type="text"
            className="form-control"
            id="anun_desc"
            name="anun_desc"
            placeholder="Ingrese la descripcion del anuncio"
            ref={register({ required: true })}
            rows="3"
          />
        </div>
        <div className="form-group">
          <label>Requerimientos</label>
          <textarea
            type="text"
            className="form-control"
            id="anun_requ"
            name="anun_requ"
            rows="5"
            placeholder="Ingrese los requerimientos del anuncio"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Funciones</label>
          <textarea
            type="text"
            className="form-control"
            id="anun_func"
            name="anun_func"
            rows="5"
            placeholder="Ingrese las funciones del anuncio"
            ref={register({ required: true })}
          />
        </div>
        <div className="row">
          <p className="col-sm-12">
            Ingresa la ubicacion del puesto de trabajo
          </p>
          <div className="form-group col-sm-4">
            <input
              type="text"
              className="form-control"
              id="Depar"
              name="Depar"
              placeholder="Departamento"
              ref={register({ required: true })}
            />
          </div>

          <div className="form-group col-sm-4">
            <input
              type="text"
              className="form-control"
              id="Provin"
              name="Provin"
              placeholder="Provincia"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group col-sm-4">
            <input
              type="text"
              className="form-control"
              id="Distri"
              name="Distri"
              placeholder="Distrito"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="form-group col-sm-5">
            <label>Fecha de inicio</label>
            <input
              type="date"
              className="form-control"
              id="anun_inic"
              name="anun_inic"
              placeholder="Ingrese la fecha de inicio"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group col-sm-5">
            <label>Fecha de fin</label>
            <input
              type="date"
              className="form-control"
              id="anun_fin"
              name="anun_fin"
              placeholder="Ingrese la fecha de fin"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Estado de contratado</label>
          <input
            type="checkbox"
            className="form-control"
            id="anun_cont"
            name="anun_cont"
            placeholder="Ingrese la descripcion del anuncio"
            ref={register({ required: true })}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Publicar anuncio
        </button>
      </form>
    </div>
  );
}
