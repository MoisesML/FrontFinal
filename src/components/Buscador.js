import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Buscador() {
  let { register, handleSubmit } = useForm();
  const history = useHistory();

  const Buscar = async (objBusqueda) => {
    let { puesto, lugar } = objBusqueda;
    if (lugar === "") {
      lugar = "all";
    }
    // console.log(data);
    history.push(`/busqueda/${puesto}/${lugar}`);
  };

  return (
    <div className="mb-4">
      <Form onSubmit={handleSubmit(Buscar)} inline>
        <i class="fas fa-search mx-2"></i>
        <Form.Group controlId="formBasicEmail" className="mx-2">
          <Form.Control
            name="puesto"
            type="text"
            placeholder="Puesto, empresa o palabra clave"
            required="required"
            ref={register({ required: true })}
          />
        </Form.Group>
        <i class="fas fa-map-marker-alt mx-2"></i>
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
