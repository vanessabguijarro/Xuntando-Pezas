import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/ids')
      .then(response => {
        setIds(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los IDs:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de IDs</h1>
      <ul>
        {ids.map((item, index) => (
          <li key={index}>{item.iD}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
