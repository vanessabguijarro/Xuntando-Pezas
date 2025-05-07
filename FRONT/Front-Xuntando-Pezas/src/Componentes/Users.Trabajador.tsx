import React, { useState } from 'react';
// Removed unused axios import

interface FormData {
  nombre: string;
  puesto: string;
  email: string;
}

const Trabajador: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    puesto: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      alert('Trabajador añadido con éxito!');
      setFormData({ nombre: '', puesto: '', email: '' });
    } catch (error) {
      console.error('Error al añadir trabajador:', error);
      alert('Error al añadir trabajador');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Nuevo Trabajador</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="puesto"
        placeholder="Puesto"
        value={formData.puesto}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default Trabajador;
