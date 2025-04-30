import { Link, Outlet } from "react-router-dom"
//import factura from "../assets/invoices.png";
export const LinksRutasPrivadasApp = () => {
    let estilo = "links-dentro-app"
    return <>
    <nav className="estilo-nav-dentro">
        <ul>
            <li>
                <Link to="/app">Home</Link>
            </li>
            <li className={estilo}>
                <Link  to="invoices">
                    <div style={{color:"white"}}>Facturas</div>
                    {/* <img src={factura} /> */}
                </Link>
            </li>
            <li>
                <Link to="customers">Clientes</Link>
            </li>
            <li>
                <Link to="products">Productos</Link>
            </li>
            
            
            <li>
                <Link to="users">Usuarios</Link>
            </li>
            <li>
                <Link to="newcustomer">Novo cliente</Link>
            </li>
            <li>
                <Link to="newinvoice">Nova Factura</Link>
            </li>
            <li>
                <Link to="newproduct">Nova Product</Link>
            </li>
            <li>
                <Link to="newuser">Novo Usuario</Link>
            </li>
        </ul>
        
    </nav>
    <Outlet />
    </>
}