import "../../assets/css/estilos_comp/ESPECIFICO/AddNewBtnBar.css"
export default function AddNewBtnMain() {

  /* Codigo button -> Link new invoices */
    return (
      <div className="btn-new-bar">
        <button className="btn-header-right">
        <span className="symbol-btn-header-right">+</span>
        Add New
        </button>
    </div>        
    );
  }