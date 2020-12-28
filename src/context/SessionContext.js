import React, { useState, createContext } from "react";

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState("null");

    const setSessionUser = (usuario) => {
        setUser(usuario);
    }

    const [id, setId] = useState();

    const [nombreCompleto, setNombreCompleto] = useState();

    return (
        <SessionContext.Provider value={{user, setSessionUser, nombreCompleto, setNombreCompleto, id, setId}}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;