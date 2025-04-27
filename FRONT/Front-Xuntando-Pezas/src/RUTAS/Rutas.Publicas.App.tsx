import { Route, Routes } from "react-router-dom";
import AccesoApp from "../PAXINAS/PUBLICAS/Acceso.App";
import Users from "../PAXINAS/PRIVADAS/Users";

const RutasPublicasApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AccesoApp />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default RutasPublicasApp;
