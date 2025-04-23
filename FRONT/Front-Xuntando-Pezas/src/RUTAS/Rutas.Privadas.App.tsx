import { Routes, Route } from "react-router-dom";
import Home from "../PAXINAS/PRIVADAS/Home";

export default function RutasPrivadasApp(){
    return <>
        <Routes>
            <Route path="/app" element={<Home />} />
        </Routes>

    </>
}