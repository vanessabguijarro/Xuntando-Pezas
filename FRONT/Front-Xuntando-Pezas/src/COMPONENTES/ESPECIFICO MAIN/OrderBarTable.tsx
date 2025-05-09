import "../../assets/css/estilos_comp/ESPECIFICO/OrderBarTable.css"
import { iconos } from "../../images";

export default function OrderBarTable() {

  /* Codigo sort by date button , name ,no. etc */
  /* boton  Any Date */
  /* boton lupa search nput inside page */

  /* List , grid view  Use state ( list view default)*/
    return (
      <div className="sort-content">
        <div>
          <ul className="sort-btn-left">
            <li><button>Sort By Date</button></li>
            <li><button>Any Date</button></li>
            <li><button className="search-button">
                <img src={iconos.search} alt="Search"/>
                </button>
                <input className="search-input" placeholder="Search" />
            </li>
          </ul>
        </div>
        <div className="sort-btn-right">
          <button className="btn-view">
            <img src={iconos.modogrid} alt="icon-grid"/>
          </button>                
          <button className="btn-view">
            <img src={iconos.modolista} alt="icon-list"/>
          </button>
        </div>
      </div>        
    );
  }