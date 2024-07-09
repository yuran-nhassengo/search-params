import React from 'react'
import { RouterProvider } from 'react-router-dom'


import './App.css'
import { Home } from './components/home'
import { Usuarios } from './components/usuarios'
import { Contacto } from './components/contacto'
import { route } from './routes'


export const  App  = () =>{

    return(
    
    <>
    
    <RouterProvider router={route}/>
    </>

  )

}

