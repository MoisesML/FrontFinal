import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './css/Tarjeta.css'

export default function Tarjeta({information, dato}) {
  if (dato == 'persona') {
    let { per_nomb, per_apel } = information
    return (
        <Card className="tarjeta">
        {/* <Card.Header>{per_nomb, per_apel}</Card.Header> */}
        <Card.Body>
          <Card.Title>{per_nomb + ' ' + per_apel}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  } else {
    let { anun_empr, anun_psto } = information
    return (
        <Card className="tarjeta">
        <Card.Body>
          <Card.Title>{anun_empr}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">{anun_psto}</Button>
        </Card.Body>
      </Card>
    )
  }
    
}
