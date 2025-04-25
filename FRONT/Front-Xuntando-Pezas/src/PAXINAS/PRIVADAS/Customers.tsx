const Customers = () => {
  return (
    <>
      <header className="menuSuperior_customers">
        <div id="grupoIzquierda-customers">
          <img
            className="imagenPerfilIzq"
            src="../imaxenes/customers/barra_superior/profileIzq.svg"
            alt="perfil"
          />
          <img
            className="imagenSearch"
            src="../imaxenes/customers/barra_superior/search.svg"
            alt="busqueda"
          />
        </div>
        <div id="grupoDerecha-customers">
          <img
            className="imagenNotificaciones"
            src="../imaxenes/customers/barra_superior/notifications.svg"
            alt="notificaciones"
          />
          <img
            className="imagenPerfilDcha"
            src="../imaxenes/customers/barra_superior/profileDcha.svg"
            alt="perfil"
          />
        </div>
      </header>
      <div className="barraLateral_customers">
        <img
          className="iconosBarraLateral"
          src="../../assets/ImgCustomers/barra_lateral/home.svg"
          alt="home"
        />
        <img
          className="iconosBarraLateral"
          src="../../assets/ImgCustomers/barra_lateral/customers.svg"
          alt="customers"
        />
        <img
          className="iconosBarraLateral"
          src="../../assets/ImgCustomers/barra_lateral/new_invoice.svg"
          alt="new_invoice"
        />
        <img
          className="iconosBarraLateral"
          src="../../assets/ImgCustomers/barra_lateral/tag.svg"
          alt="tag"
        />
      </div>
    </>
  );
};

export default Customers;
