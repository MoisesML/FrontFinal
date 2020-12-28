import React, { Fragment } from 'react'
import {Route} from 'react-router-dom'

import AdminView from './views/AdminView'
import EditarCurriculumView from './views/EditarCurriculumView'
import InicioView from './views/InicioView'
import LoginView from './views/LoginView'
import PruebasView from './views/PruebasView'
import RegistroView from './views/RegistroView'
import ResultadoView from './views/ResultadoView'

export default function routes() {
    return (
        <Fragment>
            <Route exact path='/' component={InicioView} />
            <Route exact path='/login' component={LoginView} />
            <Route exact path='/admin' component={AdminView} />
            <Route exact path='/registro' component={RegistroView} />
            <Route exact path='/pruebas' component={PruebasView} />
            <Route exact path='/busqueda/:puesto/:lugar' component={ResultadoView} />
            <Route exact path='/editar/cv/:id' component={EditarCurriculumView} />
        </Fragment>
    )
}
