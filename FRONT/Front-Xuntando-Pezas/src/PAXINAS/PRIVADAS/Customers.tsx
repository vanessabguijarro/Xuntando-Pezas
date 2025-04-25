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
        <aside className="barraLateral_customers">{/* LO CREA ISRAEL */}
          
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
        </aside>{/* FIN DE LO QUE CREERÁ ISRAEL */}

        <main className="contenidoPrincipal_customers">
          <header className="menuSuperior_customers">{/* LO CREA ISRAEL */}
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
          </header>{/* FIN DE LO QUE CREERÁ ISRAEL */}

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
            <table className="tabla-customers">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {/* AQUÍ IRÁ LA LÓGICA QUE CONTACTARÁ CON LA BBDD PARA REALIZAR EL RESTO DE LA TABLA */}

              {/* <tbody>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse1.svg" alt="perfil1" class="fotoPerfilTabla">Devon Lane</td>
                    <td>tranthuy@gmail.com</td>
                    <td class="status-busy">Busy</td>
                    <td>Bot Analyst</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse2.svg" alt="perfil2" class="fotoPerfilTabla">Darlene Robertson</td>
                    <td>thungkienspktnd@gmailcom</td>
                    <td class="status-working">Working</td>
                    <td>Reporter</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse3.svg" alt="perfil3" class="fotoPerfilTabla">Theresa Webb</td>
                    <td>thungang@gmail.com</td>
                    <td class="status-working">Working</td>
                    <td>Broadcaster</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse4.svg" alt="perfil4" class="fotoPerfilTabla">Cody Fisher</td>
                    <td>tienlapsktnd@gmail.com</td>
                    <td class="status-free">Free</td>
                    <td>Sales Manager</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imageimaxenes/customersnes/perfil/Ellipse5.svg" alt="perfil5" class="fotoPerfilTabla">Eleanor Pena</td>
                    <td>vuhaithoungnute@gmail.com</td>
                    <td class="status-free">Free</td>
                    <td>Analytics Admin</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse6.svg" alt="perfil6" class="fotoPerfilTabla">Savannah Nguyen</td>
                    <td>manhhachkt08@gmail.com</td>
                    <td class="status-busy">Busy</td>
                    <td>Marketer</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse7.svg" alt="perfil7" class="fotoPerfilTabla">Marvin McKinney</td>
                    <td>danghoang87hl@gmail.com</td>
                    <td class="status-on-vacation">On Vacation</td>
                    <td>Team Editor</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse8.svg" alt="perfil8" class="fotoPerfilTabla">Jenny Wilson</td>
                    <td>binhan628@gmail.com</td>
                    <td class="status-on-vacation">On Vacation</td>
                    <td>Bot Editor</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse9.svg" alt="perfil9" class="fotoPerfilTabla">Jerome Bell</td>
                    <td>tranthuy@gmail.com</td>
                    <td class="status-free">Free</td>
                    <td>Team Owner</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
                <tr>
                    <td><img src="../imaxenes/customers/perfil/Ellipse10.svg" alt="perfil10" class="fotoPerfilTabla">Cameron Williamson</td>
                    <td>ckctm12@gmail.com</td>
                    <td class="status-busy">Busy</td>
                    <td>PPC Expert</td>
                    <td><img src="../imaxenes/customers/GroupEdit.svg" alt="edicion"></td>
                </tr>
            </tbody> */}
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default Customers;
