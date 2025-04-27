
import React, { useState } from 'react';
import axios from 'axios';

const Trabajador = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    puesto: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/trabajadores', formData);
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
