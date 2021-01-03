import React, { useState, createContext } from "react";

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const setSessionUser = (usuario) => {
        setUser(usuario);
    }

    const [id, setId] = useState(null);
    const [nombreCompleto, setNombreCompleto] = useState(null);
    const [tipo, setTipo] = useState(null);

    return (
        <SessionContext.Provider value={{user, setSessionUser, nombreCompleto, setNombreCompleto, id, setId, tipo, setTipo}}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;