import { iconos } from "../images";
import "../assets/estilos_comp/BarraSup.css"

export default function BarraSuperior() {
  return (
    <div className="top-bar">
        <header>
            <h1>Home</h1>
        </header>
        <div className="user-actions">
            <img
              src={iconos.campana}
              className="notif-bell"
              alt="notif"
            />
            <div className="user-logo" style={{backgroundImage:`url(${iconos.avatarDefault})` }}></div>
        </div>
    
    </div>  
  );
}