import { Request, Response } from 'express';
import { db } from '../../configuracion.db';
import { listaInstruccions } from '../../datos/lista.instruccions.bbdd.israel';


// Tipado de usuario (ajústalo según tu base de datos)
interface Usuario {
  id: number;
  name_user_traballador: string;
  pwd_traballador: string;
  // agrega otros campos si existen
}

export const accesoUser = async (req: Request, res: Response): Promise<void> => {
  const { name_user_traballador, pwd_traballador } = req.body;

  try {
    const [rows] = await db.query<Usuario[]>(
      listaInstruccions.instruccion.sqlLecturaUser,
      [name_user_traballador]
    );

    if (rows.length === 0) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    const user = rows[0];

    if (user.pwd_traballador !== pwd_traballador) {
      res.status(401).json({ error: 'Contraseña incorrecta' });
      return;
    }

    res.json({ message: 'Acceso exitoso', user });
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    
  }
};
