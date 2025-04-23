import React,{createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
//### A miña
//export const LocalContext = createContext<object>({}); // inicializo
//
import {UserData,LocalContextType} from './TIPOS/INTERFACES.App'
import { Comunicacion } from './COMUNICACION.HTTP/Comunicacion.App';

export const LocalContext = createContext<LocalContextType | null>(null);

function Proveedorcontexto({ children }: { children: React.ReactNode }){
    const [isUserLogueado,setIsUserLogueado] = useState(false)
    let navigate = useNavigate();


    const login = async (dato:UserData)=>{
        
        await Comunicacion.metodoPost("/acceso",dato.username);
        
        if(Comunicacion.isUser()){
            console.log('estou dentro de filtro: ',dato.username)
            setIsUserLogueado(true)
            navigate('/app')
        }
    }



    const logout =()=>{
        console.log("estou en Proveedorcontexto en logout: ")
        localStorage.removeItem("usuario");
        setIsUserLogueado(false)
        navigate('/')
        
    }
    
    return (
        <LocalContext.Provider value={{login,logout,isUserLogueado}}>
            {children}
        </LocalContext.Provider>
    )
}

export{
    Proveedorcontexto
}