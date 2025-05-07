import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import { useDatosContext } from "../../HOOKS/useDatosContext";
import { LinksRutasPrivadasApp } from "../../RUTAS/Links.PAXINAS.PRIVADAS";

import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";

const Home = ({icono}:{icono:string}) => {
  const { logout } = useDatosContext();

  const estiloHome = "height-100vh";

  let estilos : DatosWrapperHeader = {
    seccion:"header-paxina",
    titulo:"estilo-titulo",
    icono:"icono-User" 
}
  return <>
  <Wrapper estilo={estiloHome}>
    <WrapperHeader estilos={estilos} titulo="Home" icono={icono}/>
    <LinksRutasPrivadasApp />
    <h1>
      <div>HOME</div>
        <button onClick={logout}>Saír</button>
    </h1>
  </Wrapper>
  
  </>;
  };
  
  
  export default Home;