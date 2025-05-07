import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Elemento {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [elementos, setElementos] = useState<Elemento[]>([]);

  useEffect(() => {
    const fetchElementos = async () => {
      try {
        const response: AxiosResponse<Elemento[]> = await axios.get('http://localhost:5000/api/elementos');
        setElementos(response.data);
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };

    fetchElementos();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Elementos de la base de datos</h1>
      {elementos.length > 0 ? (
        <ul>
          {elementos.map((elemento) => (
            <li key={elemento.id}>
              ID: {elemento.id} - Nombre: {elemento.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay elementos disponibles.</p>
      )}
    </div>
  );
};

export default App;


