import React, { useState } from "react";
import "../../componentes/PaxinaNewUser/index.css";
import Formulario from "../../componentes/PaxinaNewUser/Formulario";
import ImaxenEngranaxe from "../../componentes/PaxinaNewUser/ImaxenEngranaxe";
import Avatar from "../../componentes/PaxinaNewUser/Avatar";
import BotonEnviar from "../../componentes/PaxinaNewUser/BotonEnviar";
import { Imaxes } from "../../assets/imaxes_newuser";

const [imagenPerfil, setImagenPerfil] = useState<string>(Imaxes.avatar);
const [datosFormulario, setDatosFormulario] = useState({});

// ...

const handleSubmit = async () => {
  const datos = { ...datosFormulario, imagen: imagenPerfil };
  try {
    const res = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });
    const json = await res.json();
    console.log("Usuario creado correctamente:", json);
  } catch (err) {
    console.error("Error al crear usuario:", err);
  }
};
