import { Request, Response } from "express";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";


export const crearNewUser = async (req: Request, res: Response) => {
  const { nombre, apellidos, email, profesion, rol } = req.body;
  const imagen = req.file?.filename || "";

  const instanciaBBDD = execucionTodoBBDD();
  console.log("Datos recibidos del frontend:", req.body);

  const sql = `
    INSERT INTO USUARIO 
    (NOMBRE_USUARIO, APELLIDOS_USUARIO, EMAIL_USUARIO, PROFESION_USUARIO, ROL_USUARIO, IMAGEN_USUARIO)
    VALUES 
    (?, ?, ?, ?, ?, ?)
  `;

  try {
    await instanciaBBDD.insertar(sql, [
      nombre,
      apellidos,
      email,
      profesion,
      rol,
      imagen
    ]);
    res.status(201).json({ mensaje: "Usuario creado con éxito" });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};
