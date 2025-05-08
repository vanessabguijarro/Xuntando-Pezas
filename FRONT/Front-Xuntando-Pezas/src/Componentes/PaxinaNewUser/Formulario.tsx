import React, { useState } from "react";

interface Props {
  onSubmit: (datos: any) => void;
}

const Formulario = ({ onSubmit }: Props) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    profesion: "",
    rol: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
    onSubmit({ ...formulario, [name]: value });
  };

  return (
    <div className="formulario-perfil">
      <div className="row">
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input type="text"name="nombre"value={formulario.nombre} onChange={handleChange} />
       </div>
        <div className="campo">
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text"name="apellidos"value={formulario.apellidos}onChange={handleChange} />
        </div>
      </div>
      <div className="campo">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formulario.email} onChange={handleChange} />
      </div>
      <div className="campo">
        <label htmlFor="profesion">Profesión</label>
        <input type="text"name="profesion"value={formulario.profesion}onChange={handleChange}/>
      </div>
      <div className="campo">
        <label htmlFor="rol">Rol</label>
        <input type="text"name="rol" value={formulario.rol} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default Formulario;
