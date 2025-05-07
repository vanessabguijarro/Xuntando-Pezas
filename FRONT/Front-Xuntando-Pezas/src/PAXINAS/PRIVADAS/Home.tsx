import { useDatosContext } from "../../HOOKS/useDatosContext";
import ContainerBody from "../../COMPONENTES/ContainerBody";
 
// import React from "react";

const Home = () => {
  const {logout} = useDatosContext(); 
  return (    
      <ContainerBody tituloPax="Home">
        <span>Contenido paginas</span>sfsdfd
        <div></div>
        <button onClick={logout}>Saír</button>      
      </ContainerBody>     
  )
};
  
  
  export default Home;