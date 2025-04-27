import React, { useState, useEffect } from 'react';

// Definimos una interfaz para los datos que recibimos
interface Item {
  id: number;
  nombre: string;
  correo: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<Item[]>([]); // Tipamos como array de Item
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const result: Item[] = await response.json(); // Tipamos también la respuesta
        setData(result);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'Error desconocido');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Datos de la Base de Datos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>
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
