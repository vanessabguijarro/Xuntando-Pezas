import { Router, Request, Response, NextFunction } from 'express';
import { db } from '../db';
import jwt from 'jsonwebtoken';

const router = Router();

interface DecodedUser {
  id: number;
  email: string;
}

// Middleware para verificar el token
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

  jwt.verify(token, 'secret_key', (err, user: DecodedUser) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user; // Agregar el usuario al request
    next();
  });
};

// Ruta para obtener trabajadores por ID
router.get('/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validar el parámetro ID
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const [rows] = await db.query('SELECT * FROM Traballadores WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Trabajador no encontrado' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error('Error al obtener trabajador:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;