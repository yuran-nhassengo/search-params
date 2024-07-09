import { useParams } from "react-router-dom"
import { Header } from "./header/index"


export const UserDetails = () =>{
 const params = useParams();

        return (
            <>
            <Header/>
            <h1>
          Olá,{" "}
          {params.username.split("-")[0].charAt(0).toUpperCase() +
            params.username.split("-")[0].slice(1)}{" "}
          {params.username.split("-")[1].charAt(0).toUpperCase() +
            params.username.split("-")[1].slice(1)}
          .
        </h1>
            </>
        )


}