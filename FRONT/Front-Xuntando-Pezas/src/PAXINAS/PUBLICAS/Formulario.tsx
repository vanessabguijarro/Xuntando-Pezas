import React, { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar entradas
    if (!nombre || !correo || !contraseña) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      setMensaje('Por favor, proporciona un correo electrónico válido.');
      return;
    }

    const usuario = { nombre, correo, contraseña };

    try {
      const response = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error('Error al crear el usuario.');
      }

      const data = await response.json();
      setMensaje('Usuario creado con éxito.');
      console.log(data);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      setMensaje('Hubo un problema al crear el usuario. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}
