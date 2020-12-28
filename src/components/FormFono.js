import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function FormFono({subirFono}) {
  let { register, handleSubmit } = useForm();

  const capturarFonos = (objFonos) => {
    console.log(objFonos)
  };

  return (
    <div className="row justify-content-center my-3">
      <Form onSubmit={handleSubmit(capturarFonos)}>
        <Form.Group controlId="formBasicEmail" className="mx-2">
          <Form.Label>N° de telefono</Form.Label>
          <Form.Control
            name="fono_num"
            type="text"
            placeholder="Ingrese su número telefónico"
            required="required"
            ref={register({ required: true })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mx-2">
          <Form.Label>Operador</Form.Label>
          <Form.Control
            name="fono_ope"
            type="text"
            placeholder="Ingrese su operador"
            ref={register({ required: false })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mx-2">
          Agregar
        </Button>
      </Form>
    </div>
  );
}
