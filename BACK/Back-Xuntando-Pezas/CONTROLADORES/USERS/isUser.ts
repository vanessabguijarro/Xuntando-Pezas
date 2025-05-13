import { Response } from "express";
import Jwt,{JwtPayload } from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";
import { datoUser } from "../../Tipos/bbdd.tipos";
import { isUserForm } from "../../helpers";
import { AuthenticatedRequest } from "../../Tipos/request.extendido"; // archivo donde defines el tipo extendido
import { datoTraballador } from "../../Tipos/tipos.app";
class HttpError extends Error {
    httpStatus: number;

    constructor(message: string, httpStatus: number) {
        super(message);
        this.name = "HttpError";
        this.httpStatus = httpStatus;
    }
}

export const isUser = async (req: AuthenticatedRequest, res: Response,nextFunction:()=>void): Promise<void> => {
    //const { username, pwd } = req.body;
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            throw new HttpError("Falta cabeceira de autorización", 401);
        }

        const tokenInfo = Jwt.verify(authorization, process.env.SEGREDO || "default_secret");
        
        if (typeof tokenInfo === "object" && tokenInfo !== null) {
            console.log("tokenInfo ",tokenInfo)
            const { user, pwd } = tokenInfo as JwtPayload;
            console.log("user ? ", user);
            console.log("pwd ? ", pwd);
            const instanciaBBDD = execucionTodoBBDD();
            const datoArray : [string,string] = [user,pwd];
            console.log("datoArray ",datoArray)
            const datoUserLido: datoUser = await instanciaBBDD.lerUnhaFila2Campos(
                listaInstruccions.instruccion.sqlLogin,
                datoArray,
                
            ); 
            console.log("datoUserLido ",datoUserLido)
            if(!datoUserLido || datoUserLido === null || datoUserLido === undefined){
                throw new HttpError("Usuario o contraseña incorrectos", 403);
            }
            nextFunction()
        } else {
            console.log("El token no tiene formato válido (esperado: JwtPayload)");
        }

        //res.status(200).send("Usuario autenticado correctamente");

    } catch (error: any) {
        console.error("Error de autenticación:", error);
        const statusCode = error.httpStatus || 500;
        res.status(statusCode).send(error.message || "Erro interno do servidor");
    }
};
