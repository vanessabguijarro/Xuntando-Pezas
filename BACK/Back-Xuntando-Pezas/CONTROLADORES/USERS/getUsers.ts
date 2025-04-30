import { Request, Response } from 'express';
import { dbPromise } from '../../configuracion.db'; // Asegúrate de que la ruta sea correcta

export const getUsers = async (req: Request, res: Response) => {
  try {
    const db = await dbPromise; // Esperar a que se abra la conexión
    const users = await db.all('SELECT * FROM usuarios'); // Ajusta el nombre de la tabla si es distinto

    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

