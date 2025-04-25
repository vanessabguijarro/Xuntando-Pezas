import {Route, Routes} from "react-router-dom";
//import AccesoApp from "../PAXINAS/PUBLICAS/Acceso.App";
import Customers from "../Componentes/Customers/Customers";

export default function RutasPublicasApp(){
    return <>
        <Routes>
            {/* <Route path="/" element={<AccesoApp />}/> */}
            <Route path="/customers" element={<Customers/>}/>
        </Routes>
    </>
}