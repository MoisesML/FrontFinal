import React, { Fragment } from 'react'
import {Route} from 'react-router-dom'

import InicioView from './views/InicioView'
import AdminView from './views/AdminView'
import CrearAnuncioView from './views/CrearAnuncioView'
import EditarCurriculumView from './views/EditarCurriculumView'
import LoginEmpresaView from './views/LoginEmpresaView'
import LoginView from './views/LoginView'
import PruebasView from './views/PruebasView'
import RegistroView from './views/RegistroView'
import ResultadoView from './views/ResultadoView'
import DetalleAnuncioView from './views/DetalleAnuncioView'
import PostulacionesView from './views/PostulacionesView'

export default function routes() {
    return (
        <Fragment>
            <Route exact path='/' component={InicioView} />
            <Route exact path='/login' component={LoginView} />
            <Route exact path='/admin' component={AdminView} />
            <Route exact path='/registro' component={RegistroView} />
            <Route exact path='/pruebas' component={PruebasView} />
            <Route exact path='/busqueda/:puesto/:lugar' component={ResultadoView} />
            <Route exact path='/editar/cv/:idx' component={EditarCurriculumView} />
            <Route exact path='/login/empresa' component={LoginEmpresaView} />
            <Route exact path='/anuncio' component={CrearAnuncioView} />
            <Route exact path='/anuncio/detalle/:id' component={DetalleAnuncioView} />
            <Route exact path='/admin/postulaciones/:id' component={PostulacionesView} />
        </Fragment>
    )
}
