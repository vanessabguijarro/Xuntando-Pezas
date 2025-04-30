import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Habilitar modo verbose para logs útiles (opcional)
sqlite3.verbose();

// Exporta la conexión a la base de datos SQLite
export const dbPromise = open({
  filename: './users.db', // ruta relativa al archivo .db
  driver: sqlite3.Database,
});
