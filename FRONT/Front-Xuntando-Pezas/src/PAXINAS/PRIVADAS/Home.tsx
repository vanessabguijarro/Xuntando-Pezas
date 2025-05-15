
import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import { LinksRutasPrivadasApp } from "../../RUTAS/Links.PAXINAS.PRIVADAS";

import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";

const Home = () => {
<<<<<<< HEAD
  const { logout } = useDatosContext();
=======
  
>>>>>>> 58c1aa974bc6cc92beca7887cd6f97f2ec5f3ad3

  const estiloHome = "height-100vh";

  let estilos : DatosWrapperHeader = {
    seccion:"header-paxina",
    titulo:"estilo-titulo",
    icono:"icono-User" 
}
  return <>
  <Wrapper estilo={estiloHome}>
    
      
    <LinksRutasPrivadasApp >
      <WrapperHeader estilos={estilos} titulo="Home" icono={""}/>
    </LinksRutasPrivadasApp>
    <MenuLateral url={1} />
  </Wrapper>
  
  </>;
  };
  
  
  export default Home;