import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';
const portNumber = 3000;
const app = express();

const upload = multer({ storage: storage })

app.use(cors())

// app.post --> logueo user 'loginUser'





app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
});