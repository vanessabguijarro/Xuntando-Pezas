import { Link, Outlet } from "react-router-dom";

export default function MenuLateral({url}:{url:number}){
    return <>
    <nav className="menu-lateral">
        <Link to="/app"><span>Home</span></Link>
                {url === 2 ? "" : <Link  to="/app/invoices">
                    <span style={{color:"white"}}>Facturas</span>
            
                    {/* <img style={{width:"200px"}} src={Imaxes.facturas}/> */}
                </Link>}
                {url === 1 ? "": <Link to="/app/customers">
                <span style={{color:"white"}}>Clientes</span>
                {/* <img style={{width:"200px"}} src={Imaxes.clientes}/> */}
                </Link>}
                {
                    url === 4 ? "" : <Link to="/app/products">
               
                    <span style={{color:"white"}}>Productos</span>
                    {/* <img style={{width:"200px"}} src={Imaxes.productos}/> */}
                    </Link>
                }
                {url === 3 ? "":<Link to="/app/users">
                
                <span style={{color:"white"}}>Usuarios</span>
               {/* <img style={{width:"200px"}} src={Imaxes.usuarios}/> */}
                </Link>}
    </nav>
    <Outlet />
    </>
}