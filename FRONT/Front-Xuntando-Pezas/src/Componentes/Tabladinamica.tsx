import './TablaDinamica.css';
import React, { useState } from 'react';

type Item = {
  id: number;
  nombre: string;
};

const TablaDinamica: React.FC = () => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const datos: Item[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    nombre: `Elemento ${i + 1}`,
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filas">Filas por página: </label>
      <select id="filas" value={rowsPerPage} onChange={handleChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>

      <table style={{ marginTop: '1rem', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {datos.slice(0, rowsPerPage).map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDinamica;
