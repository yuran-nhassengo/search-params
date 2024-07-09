
import { Home } from "../home"
import { Contacto } from "../contacto"
import { Link, Outlet } from "react-router-dom"


export const Nav = () =>{

    return (
        <>
        <nav className="bg-blue-500">
            <ul className="flex justify-center space-x-4 list-none">
            <li className="hover:text-amber-200"> <Link to ='/'>Home</Link></li>
            <li className="hover:text-amber-200"><Link to ='/usuarios/'>Contacto</Link></li>
            <li className="hover:text-amber-200"><Link to ='/contacto'>Usuarios</Link></li>
           </ul>
        </nav>
        <Outlet/>
        </>
    )

}