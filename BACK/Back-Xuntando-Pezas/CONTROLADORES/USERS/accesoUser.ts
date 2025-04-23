import { Request, Response } from "express";
import Jwt from "jsonwebtoken";

export const accesoUser = (req:Request,res:Response)=>{

    // DESESTRUCTURACION CON TYPESCRIPT
    //const { username } : {username : string} = req.body
    const { username } = req.body
    console.log("req.body ",req.body,username,typeof req.body,typeof username)

    /* try {
        if(username === 'Israel' ){
            const token = jwt.sign({ user: username }, process.env.SEGREDO || "clavePorDefecto");
            res.json({ token });
        }
    } catch (error) {
        console.error("Error al firmar el token:", error);
        res.status(500).send("Error interno del servidor");
    } */
     if(username === 'Israel' ){
        const token = Jwt.sign({ user: username }, process.env.SEGREDO || "clavePorDefecto");
        console.log(typeof process.env.SEGREDO)
        res.json({ token });
    } 


}