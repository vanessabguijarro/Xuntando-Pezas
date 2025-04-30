import { useDatosContext } from "../../HOOKS/useDatosContext";
import ContainerBody from "../../COMPONENTES/ContainerBody";
 
// import React from "react";

const Home = () => {
  const {logout}=useDatosContext();

  /*return <h1>
    <div>HOME</div>
      
  </h1>;*/
  return (    
      <ContainerBody>
        <span>Contenido paginas</span>sfsdfd
        <div></div>
        <button onClick={logout}>Saír</button>      
      </ContainerBody>     
  )
};
  
  
  export default Home;