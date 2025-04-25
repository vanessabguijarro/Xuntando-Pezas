// backend/server.js
const express = require('express');
const app = express();
const port = 5000;

// Simulación de una base de datos
const data = [
  { id: 1, name: 'Elemento 1' },
  { id: 2, name: 'Elemento 2' },
  { id: 3, name: 'Elemento 3' }
];

// Ruta para obtener el "Id"
app.get('/api/elementos', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
