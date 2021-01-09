import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./css/Buscador.css"

export default function Buscador() {
  let { register, handleSubmit } = useForm();
  const history = useHistory();

  const Buscar = async (objBusqueda) => {
    let { puesto, lugar } = objBusqueda;
    if (lugar === "") {
      lugar = "all";
    }
    if (puesto === "") {
      puesto = "all";
    }
    history.push(`/busqueda/${puesto}/${lugar}`);
  };

  return (
    <div className="py-3">
      <Form onSubmit={handleSubmit(Buscar)} inline className="p-3 buscador">
        <i className="fas fa-search mx-2"></i>
        <Form.Group controlId="formBasicEmail" className="mx-2">
          <Form.Control
            name="puesto"
            type="text"
            placeholder="Puesto, empresa o palabra clave"
            ref={register({ required: false })}
          />
        </Form.Group>
        <i className="fas fa-map-marker-alt mx-2"></i>
        <Form.Group controlId="formBasicPassword" className="mx-2">
          <Form.Control
            name="lugar"
            type="text"
            placeholder="Todo el país"
            ref={register({ required: false })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mx-2">
          Buscar trabajos
        </Button>
      </Form>
    </div>
  );
} 
