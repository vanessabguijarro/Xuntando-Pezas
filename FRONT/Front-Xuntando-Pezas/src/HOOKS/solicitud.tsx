import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the expected structure of the data in comments or use PropTypes if needed
// Example: { iD: number } is the expected structure for each item

function App() {
  interface IDItem {
    iD: number;
  }

  const [ids, setIds] = useState<Array<IDItem>>([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/ids')
      .then(response => {
        setIds(response.data as IDItem[]);
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
