import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { accesoUser } from './CONTROLADORES/accesoUser';

dotenv.config();

const app = express();
const portNumber = process.env.PORT || 3000;

const upload = multer({ storage });

app.use(cors());
app.use(express.json());

app.post("/acceso", accesoUser);

app.listen(portNumber, () => {
  console.log(`Servidor escuchando en http://localhost:${portNumber}`);
});
