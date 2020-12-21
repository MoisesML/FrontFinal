import React from 'react'
import Tarjeta from './Tarjeta'

export default function Tarjetas({informacion, tipo}) {
    return (
        <div>
            {
                informacion.length > 0 ? (
                    informacion.map((info, i) => {
                        return <Tarjeta key={i} information={info} dato={tipo} />
                    })
                ) : (
                    <h3>No hay resultados para esta busqueda</h3>
                )
            }
        </div>
    )
}
