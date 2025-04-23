import { TipoRespostaServidor } from "../TIPOS/TIPOS.Comunicacion.App";
/**
 * @author Pepito Gutierrez
 * @class Comunicacion
 * @method metodoGet método que temos que utilizar para un GET
 * @method metodoPost métodos que temos que utilizar para un POST
 * @method metodoPaxinaGet método que a resposta a pasa a texto, xa que recibe o contido da páxina en formato texto
 * @method isUser este método comproba se o usuario que está intentando loguearse existe ou non, e sae unha mensaxe por consola en
 * caso de que non exista
 */

export class Comunicacion{
    
    static datos: Response;
    static paxina:string;
    /**
     * @method metodoGet que fai un GET
     * @param endpoint será un endpoint de tipo texto
     */
    static async metodoGet(endpoint: string){
        console.log("this.endpoint ",endpoint)
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    /**
     * @method metodoPost é estático que fai un POST
     * @param endpoint  será un endpoint de tipo texto
     */
    static async metodoPost(endpoint: string,datos:any){
        let resposta = await fetch(endpoint,datos); //  Son os datos que enviamos co endpoint
        this.datos = await resposta.json();         //  En resposta é que me está a enviar o Server
    }
    static async metodoPaxinaGet(endpoint: string,datos:any){
        let resposta = await fetch(endpoint,datos); //  Son os datos que enviamos co endpoint
        this.paxina = await resposta.text();         //  En resposta é que me está a enviar o Server
    }
    static isUser():Boolean{
        let isUser = false;
        let datoResposta : TipoRespostaServidor ={
            estado: this.datos.status,
            mensage: this.datos.statusText
        }
        
        if(datoResposta.mensage != "non é o usuario correcto"){
            localStorage.setItem("usuario",datoResposta.mensage);
            isUser = true;
        }
        return isUser
    }

    
    /**
     * @method datoServidor que devolve os datos
     * @returns devolve datos
     */
    static get datoServidor(){
        return this.datos
    }

    static get Paxina(){
        return this.paxina
    }
}

