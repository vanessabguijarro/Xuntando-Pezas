import { Response } from "express";
import Jwt from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";
import { datoUser } from "../../Tipos/bbdd.tipos";
import { isUserForm } from "../../helpers";
import { AuthenticatedRequest } from "../../Tipos/request.extendido"; // archivo donde defines el tipo extendido

class HttpError extends Error {
    httpStatus: number;

    constructor(message: string, httpStatus: number) {
        super(message);
        this.name = "HttpError";
        this.httpStatus = httpStatus;
    }
}

export const isUser = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    //const { username, pwd } = req.body;
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            throw new HttpError("Falta cabeceira de autorización", 401);
        }

        const tokenInfo = Jwt.verify(authorization, process.env.SEGREDO || "default_secret");
        req.userAuth = tokenInfo;
        console.log("req.userAuth ",req.userAuth)
        //const datosTraballador = [req.userAuth.name_user_traballador,req.userAuth.pwd_traballador]
        
        /* const instanciaBBDD = execucionTodoBBDD();
        const datoUserLido: datoUser = await instanciaBBDD.lerUnhaFila(
            listaInstruccions.instruccion.sqlLogin,
            username
        ); 

        const usuarioValido = isUserForm(req.body, datoUserLido);
        console.log("usuarioValido ", usuarioValido);

        if (!usuarioValido) {
            throw new HttpError("Usuario ou contrasinal incorrecto", 403);
        }
        */
        // Si llegamos aquí, todo fue bien
        res.status(200).send("Usuario autenticado correctamente");

    } catch (error: any) {
        console.error("Error de autenticación:", error);
        const statusCode = error.httpStatus || 500;
        res.status(statusCode).send(error.message || "Erro interno do servidor");
    }
};
