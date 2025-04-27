import React, { useState, useEffect } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);  // Para almacenar los datos obtenidos
  const [loading, setLoading] = useState(true);  // Para manejar el estado de carga
  const [error, setError] = useState(null);  // Para manejar posibles errores

  useEffect(() => {
    // Realizar la solicitud a la API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');  // URL de la API
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);  // El array vacío asegura que solo se ejecute una vez al montar el componente

  // Mostrar un mensaje de carga o error si es necesario
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Datos de la Base de Datos</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>
                {/* Aquí podrías agregar botones u opciones de acción */}
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
