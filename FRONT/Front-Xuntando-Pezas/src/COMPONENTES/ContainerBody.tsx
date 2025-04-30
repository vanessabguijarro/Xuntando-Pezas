 import React from "react";
//Inclue Sidebar y Wrapper (central)
//Wrapper has children from Main
import BarraLateral from "./BarraLateral";
import ContentWrapper from "./Wrapper";
import "../assets/estilos_comp/ContainerBody.css"

export default function ContainerBody( {children}: {children: React.ReactNode} ) {
  return (
    <div className="container">
        <BarraLateral></BarraLateral>
        <ContentWrapper>
          {children}
        </ContentWrapper>
    </div>    
      
  );
}
