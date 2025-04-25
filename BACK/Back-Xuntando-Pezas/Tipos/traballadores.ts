import { Router } from 'express';
import { db } from '../db';
import jwt from 'jsonwebtoken';

const router = Router();

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user; // Agregar el usuario al request
    next();
  });
};

// Ruta para obtener trabajadores por ID
router.get('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query('SELECT * FROM Traballadores WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Trabajador no encontrado' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener trabajador' });
  }
});

export default router;