import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";

import { datoUser } from "../../Tipos/bbdd.tipos";

export const accesoUser = async (req:Request,res:Response)=>{
    // DESESTRUCTURACION CON TYPESCRIPT
    //const { username } : {username : string} = req.body
    const { username } = req.body
    
     try {

        let datoUserLido : datoUser;// mirar con 'const' xq non funciona
        let instanciaBBDD = execucionTodoBBDD()
        
        //datoUserLido = await instanciaBBDD.lerUnhaFila(`select name_user_traballador,pwd_traballador from TRABALLADOR where name_user_traballador = ?`,'Israel')
        datoUserLido = await instanciaBBDD.lerUnhaFila(listaInstruccions.instruccion.sqlLecturaUser,username)
        
        // Lemos o resultado na base de datos
        
        if(username === datoUserLido.NAME_USER_TRABALLADOR ){
            const token = Jwt.sign({ user: username }, process.env.SEGREDO || "clavePorDefecto");
            console.log(typeof process.env.SEGREDO)
            res.json({ token });
        }
    } catch (error) {
        console.error("Error al firmar el token:", error);
        res.status(500).send("Error interno del servidor");
    } 
      


}