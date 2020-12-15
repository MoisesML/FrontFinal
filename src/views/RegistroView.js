import React from 'react';
import FormPersona from '../components/FormPersona/FormPersona';
import { registrarPersona } from '../Services/AuthServices';

export default function RegistroView() {
    const crearPersona = async (objPersona) => {
        let { data } = await registrarPersona(objPersona);
        return data;
    }

    return (
        <div className="container">
            <FormPersona crearPersona = {crearPersona} />
        </div>
    )
}
