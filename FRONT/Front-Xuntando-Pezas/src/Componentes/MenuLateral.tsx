import { Link, Outlet } from "react-router-dom";
import { Imaxes } from "../assets/Imaxes";
import { Icono } from "./Icono";
import "../estilo/MenuLateral.App.css";

export default function MenuLateral({url}:{url:number}){
    
    return <>
    <nav className="menu-lateral">
        <Link className="link-menu-lateral" to="/app">
            <Icono imaxeUser={Imaxes.iconoHome} estilo="icono-menu-lateral"/>
            <span style={{color:"white", width: "75px", fontSize:"10px"}}>Home</span>
        </Link>
                {url === 2 ? "" : <Link className="link-menu-lateral" to="/app/invoices">
                    <Icono imaxeUser={Imaxes.iconoFacturas} estilo="icono-menu-lateral" />
                    <span style={{color:"white", width: "75px", fontSize:"10px",fontWeight: "100"}}>Facturas</span>
            
                    
                </Link>}
                {
                url === 1 ? "": <Link className="link-menu-lateral" to="/app/customers">
                <Icono imaxeUser={Imaxes.iconoClientes} estilo="icono-menu-lateral" />
                <span style={{color:"white", width: "75px", fontSize:"10px",fontWeight: "100"}}>Clientes</span>
                
                </Link>}
                {
                    url === 4 ? "" : <Link className="link-menu-lateral" to="/app/products">
               
                    <Icono imaxeUser={Imaxes.iconoProductos} estilo="icono-menu-lateral" />
                    <span style={{color:"white", width: "75px", fontSize:"10px",fontWeight: "100"}}>Productos</span>
                   
                    </Link>
                }
                {url === 3 ? "":
                <Link className="link-menu-lateral" to="/app/users">
                <Icono imaxeUser={Imaxes.iconoUsuarios} estilo="icono-menu-lateral" />
                <span style={{color:"white", width: "75px", fontSize:"10px",fontWeight: "100"}}>Usuarios</span>
               {/* <img style={{width:"200px"}} src={Imaxes.usuarios}/> */}
                </Link>}
    </nav>
    <Outlet />
    </>
}