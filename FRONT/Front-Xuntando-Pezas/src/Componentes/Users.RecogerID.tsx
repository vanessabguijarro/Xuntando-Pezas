import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Definimos una interfaz para los elementos
interface Elemento {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [elementos, setElementos] = useState<Elemento[]>([]);

  useEffect(() => {
    Axios.get<Elemento[]>('http://localhost:5000/api/elementos')
      .then((response) => {
        setElementos(response.data);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Elementos de la base de datos</h1>
      <ul>
        {elementos.map((elemento) => (
          <li key={elemento.id}>
            ID: {elemento.id} - Nombre: {elemento.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

