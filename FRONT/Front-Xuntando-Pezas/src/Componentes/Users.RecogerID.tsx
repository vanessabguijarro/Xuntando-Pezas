
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API
    Axios.get('http://localhost:5000/api/elementos')
      .then((response) => {
        setElementos(response.data);  // Guardar los datos en el estado
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
}

export default App;
