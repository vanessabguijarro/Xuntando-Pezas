// Removed duplicate import of useState
import FormularioComponent from "./Formulario";

interface Usuario {
  id: string;
  nombre: string;
  apellidos: string;
  mail: string;
  status: string;
  role: string;
}

const UsersPage: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const handleSubmit = (datos: Usuario) => {
    // Aquí puedes enviar "datos" a la API o actualizar otro estado
    console.log("Datos recibidos del formulario:", datos);
    setUsuario(datos);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Página de Usuarios</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <FormularioComponent onSubmit={handleSubmit} />
        {usuario && (
          <div className="mt-4 bg-blue-50 p-4 rounded">
            <h2 className="font-semibold mb-2">Usuario ingresado:</h2>
            <ul className="list-disc list-inside">
              <li><strong>Id:</strong> {usuario.id}</li>
              <li><strong>Nombre:</strong> {usuario.nombre}</li>
              <li><strong>Apellidos:</strong> {usuario.apellidos}</li>
              <li><strong>Mail:</strong> {usuario.mail}</li>
              <li><strong>Status:</strong> {usuario.status}</li>
              <li><strong>Role:</strong> {usuario.role}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export { UsersPage };

// --- Actualización de Formulario.tsx ---

// Formulario.tsx
import React, { useState } from "react";

interface Props {
  onSubmit: (datos: Usuario) => void;
}

interface Usuario {
  id: string;
  nombre: string;
  apellidos: string;
  mail: string;
  status: string;
  role: string;
}

const Formulario: React.FC<Props> = ({ onSubmit }) => {
  const [formulario, setFormulario] = useState<Usuario>({
    id: "",
    nombre: "",
    apellidos: "",
    mail: "",
    status: "",
    role: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nuevo = { ...formulario, [name]: value };
    setFormulario(nuevo);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formulario);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="id"
        placeholder="Id"
        value={formulario.id}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="apellidos"
        placeholder="Apellidos"
        value={formulario.apellidos}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="email"
        name="mail"
        placeholder="Mail"
        value={formulario.mail}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={formulario.status}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formulario.role}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded p-2 mt-2 hover:bg-blue-700"
      >
        Guardar Usuario
      </button>
    </form>
  );
};

export default Formulario;
