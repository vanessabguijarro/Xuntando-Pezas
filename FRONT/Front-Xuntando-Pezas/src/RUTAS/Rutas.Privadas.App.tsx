import { Routes, Route } from "react-router-dom";
import Home from "../PAXINAS/PRIVADAS/Home";
import Customers from "../PAXINAS/PRIVADAS/Customers";

export default function RutasPrivadasApp(){
    return <>
        <Routes>
            <Route path="/app" element={<Home />} />
            {/* cambio Vanessa */}
            <Route path="/customers" element={<Customers/>}/>
        </Routes>
    </>
}