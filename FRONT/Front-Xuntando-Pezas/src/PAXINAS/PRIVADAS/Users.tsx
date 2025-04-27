import React from "react";

// Importaciones de imágenes
import profileIzq from "../../assets/ImgUsers/barra_superior/profileIzq.svg";
import search from "../../assets/ImgUsers/barra_superior/search.svg";
import profileDcha from "../../assets/ImgUsers/barra_superior/profileDcha.svg";
import notificacionesIcon from "../../assets/ImgUsers/barra_superior/notifications.svg";

import homeIcon from "../../assets/ImgUsers/menu_lateral/home.svg";
import customersIcon from "../../assets/ImgUsers/menu_lateral/customers.svg";
import newInvoiceIcon from "../../assets/ImgUsers/menu_lateral/new_invoice.svg";
import tagIcon from "../../assets/ImgUsers/menu_lateral/tag.svg";

import grupoIconos from "../../assets/ImgUsers/group.svg";

// Importación del Botón
import BotonEnviar from "./BotonEnviar";

const Users: React.FC = () => {
  const handleEnviarClick = () => {
    console.log("¡Enviado!");
  };

  return (
    <div className="layoutUsers">
      {/* Barra lateral */}
      <aside className="barraLateral_users">
        <img className="iconosBarraLateral" src={homeIcon} alt="home" />
        <img className="iconosBarraLateral" src={customersIcon} alt="users" />
        <img className="iconosBarraLateral" src={newInvoiceIcon} alt="new_invoice" />
        <img className="iconosBarraLateral" src={tagIcon} alt="tag" />
      </aside>

      {/* Contenido principal */}
      <main className="contenidoPrincipal_users">
        {/* Barra superior */}
        <header className="menuSuperior_users">
          <div id="grupoIzquierda-users">
            <img className="imagenPerfilIzq" src={profileIzq} alt="perfil" />
            <img className="imagenSearch" src={search} alt="busqueda" />
          </div>
          <div id="grupoDerecha-users">
            <img className="imagenNotificaciones" src={notificacionesIcon} alt="notificaciones" />
            <img className="imagenPerfilDcha" src={profileDcha} alt="perfil" />
          </div>
        </header>

        {/* Main content users */}
        <div className="main_users">
          <div className="main-header_users">
            <h1>Customers</h1>
            <button className="botonAnhadir">+ Add New</button>
          </div>

          {/* Icono hamburguesa */}
          <div className="divHamburguesa-users">
            <img className="icono-hamburguesa" src={grupoIconos} alt="hamburguesa" />
          </div>

          {/* Tabla usuarios */}
          <table className="tabla-users">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* Aquí irá el tbody dinámico con datos de la BBDD */}
          </table>

          {/* Botón Enviar */}
          <div style={{ marginTop: "20px" }}>
            <BotonEnviar onClick={handleEnviarClick} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Users;
