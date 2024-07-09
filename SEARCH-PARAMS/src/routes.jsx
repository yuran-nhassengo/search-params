import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/home";
import { Contacto } from "./components/contacto";
import { Usuarios } from "./components/usuarios";
import { UserDetails } from "./components/user-details";


export const route = BrowserRouter([


    {
        path:"/",
        element:<Home/>
       /* errorElement: <ErrorPage/>*/
    },
    {
        path:"/contacto",
        element:<Contacto/>
    },
    {
        path:"/usuarios",
        element:<Usuarios/>
    },
    {
        path:"user-details/:username",
        element:<UserDetails/>
    }
])