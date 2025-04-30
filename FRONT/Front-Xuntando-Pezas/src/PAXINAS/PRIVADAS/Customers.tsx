import { CustomersTable } from "../../Componentes/Customers/Customers.Table";

/*BARRA SUPERIOR */
import profileIzq from "../../assets/ImgCustomers/barra_superior/profileIzq.svg";
import search from "../../assets/ImgCustomers/barra_superior/search.svg";
import profileDcha from "../../assets/ImgCustomers/barra_superior/profileDcha.svg";
import notificacionesIcon from "../../assets/ImgCustomers/barra_superior/notifications.svg";

/*BARRA INFERIOR */
import homeIcon from "../../assets/ImgCustomers/menu_lateral/home.svg";
import customersIcon from "../../assets/ImgCustomers/menu_lateral/customers.svg";
import newInvoiceIcon from "../../assets/ImgCustomers/menu_lateral/new_invoice.svg";
import tagIcon from "../../assets/ImgCustomers/menu_lateral/tag.svg";

/*Group */
import grupoIconos from "../../assets/ImgCustomers/group.svg";


const Customers = () => {
  return (
    <>
      <div className="layoutCostumers">
        <aside className="barraLateral_customers">
          {/* LO CREA ISRAEL */}

          <img className="iconosBarraLateral" src={homeIcon} alt="home" />
          <img
            className="iconosBarraLateral"
            src={customersIcon}
            alt="customers"
          />
          <img
            className="iconosBarraLateral"
            src={newInvoiceIcon}
            alt="new_invoice"
          />
          <img className="iconosBarraLateral" src={tagIcon} alt="tag" />
        </aside>
        {/* FIN DE LO QUE CREERÁ ISRAEL */}

        <main className="contenidoPrincipal_customers">
          <header className="menuSuperior_customers">
            {/* LO CREA ISRAEL */}
            <div id="grupoIzquierda-customers">
              <img className="imagenPerfilIzq" src={profileIzq} alt="perfil" />
              <img className="imagenSearch" src={search} alt="busqueda" />
            </div>
            <div id="grupoDerecha-customers">
              <img
                className="imagenNotificaciones"
                src={notificacionesIcon}
                alt="notificaciones"
              />
              <img
                className="imagenPerfilDcha"
                src={profileDcha}
                alt="perfil"
              />
            </div>
          </header>
          {/* FIN DE LO QUE CREERÁ ISRAEL */}

          {/* <main className="contenidoPrincipal_customers"> */}
          <div className="main_customers">
            <div className="main-header_customers">
              <h1>Customers</h1>
              <button className="botonAnhadir">+ Add New</button>
            </div>
            <div className="divHamburguesa-customers">
              <img
                className="icono-hamburguesa"
                src={grupoIconos}
                alt="hamburguesa"
              />
            </div>
            <CustomersTable />
          </div>
        </main>
      </div>
    </>
  );
};

export default Customers;
