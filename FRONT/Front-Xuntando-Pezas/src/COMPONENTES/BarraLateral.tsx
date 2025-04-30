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
                title=""
                className="icon-side"
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src={iconos.customers}
                alt="customers"
                title=""
                className="icon-side"
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src={iconos.invoices}
                alt="invoices"
                className="icon-side"
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                src={iconos.products}
                alt="products"
                className="icon-side"
            /></a>
          </li>
        </ul>
      </aside>      
  );
}

