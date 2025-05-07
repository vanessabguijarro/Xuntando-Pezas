import { iconos } from "../images";
import "../assets/estilos_comp/BarraLat.css"

export default function BarraLateral() {
  return (
    <aside className="sidebar">
        <ul>
          <li>
            <a href="#"
              ><img
                src= {iconos.home}
                alt= ""
                title="Home"
                className="icon-side"
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src={iconos.customers}
                alt="customers"
                title="Customers"
                className="icon-side"
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src={iconos.invoices}
                alt="invoices"
                title="Invoices"
                className="icon-side"
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src={iconos.products}
                alt="products"
                title="Products"
                className="icon-side"
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src={iconos.users}
                alt="users"
                title="Usuarios"
                className="icon-side"
            /></a>
          </li>
        </ul>
      </aside>      
  );
}

