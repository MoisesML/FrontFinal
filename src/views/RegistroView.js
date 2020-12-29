import React from 'react';
import FormEmpresa from '../components/FormEmpresa';
import { registrarPersona } from '../Services/AuthServices';

export default function RegistroView() {
    const crearPersona = async (objPersona) => {
        let { data } = await registrarPersona(objPersona);
        return data;
    }

    return (
        <div className="container">
            <FormEmpresa crearPersona = {crearPersona} />
        </div>
    )
}
