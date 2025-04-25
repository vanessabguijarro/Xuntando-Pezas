import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import { storage } from './configuracion.multer';
import { accesoUser } from './CONTROLADORES/USERS/accesoUser';
import { obterTraballadores } from './CONTROLADORES/USERS/traballadores';

dotenv.config();

const portNumber = process.env.PORT || 3000;
const app = express();
const upload = multer({ storage: storage });

// Crear carpeta 'uploads' si no existe
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.post("/acceso", accesoUser);
app.get("/traballadores", obterTraballadores);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Iniciar servidor
app.listen(portNumber, 'localhost', () => {
  console.log('Listening on localhost:' + portNumber);
});