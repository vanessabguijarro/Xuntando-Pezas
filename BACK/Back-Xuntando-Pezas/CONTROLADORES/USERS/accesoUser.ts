// filepath: [accesoUser.ts](http://_vscodecontentref_/3)
import { Request, Response } from 'express';
import { db } from '../../configuracion.db';
import { listaInstruccions } from '../../datos/lista.instruccions.bbdd.israel';

export const accesoUser = async (req: Request, res: Response) => {
  const { name_user_traballador, pwd_traballador } = req.body;

  try {
    const [rows]: any = await db.query(
      listaInstruccions.instruccion.sqlLecturaUser,
      [name_user_traballador]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const user = rows[0];
    if (user.pwd_traballador !== pwd_traballador) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.json({ message: 'Acceso exitoso', user });
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};