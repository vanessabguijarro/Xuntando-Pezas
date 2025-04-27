import { Routes, Route } from "react-router-dom";
import Home from "../PAXINAS/PRIVADAS/Home";
import Users from "../PAXINAS/PRIVADAS/Users";

export default function RutasPrivadasApp(){
    return <>
        <Routes>
            <Route path="/users" element={<Users/>} />
        </Routes>
        <Routes>
  <Route path="/users" element={<Users />} />
  <Route path="/home" element={<Home />} /> {/* ✅ Ahora sí usas Home */}
</Routes>

    </>
}