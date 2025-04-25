const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3001;

// Conectar a la base de datos
const db = new sqlite3.Database('./user.db', (err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
    } else {
        console.log('Conexión exitosa a la base de datos.');
    }
});

// Ruta para obtener los IDs
app.get('/api/ids', (req, res) => {
    const query = "SELECT id FROM usuarios"; // Asegúrate de que la tabla 'usuarios' exista
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err.message);
            res.status(500).json({ error: 'Error al obtener los datos.' });
            return;
        }
        res.json(rows); // Devuelve los resultados como JSON
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
