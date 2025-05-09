import React from "react";
//Inclue Top Bar , Subheader e Main
import BarraSuperior from "./BarraSuperior";
import SpaceHeader from "./Spaceheader";
import MainContent from "./MainContent";
import "../assets/estilos_comp/ContentWrapper.css"


export default function ContentWrapper({ 
  children, 
  tituloPax
 }: { children: React.ReactNode; tituloPax: string } ) {
  return (
    <div className="content-wrapper">
        <BarraSuperior tituloPax={tituloPax}></BarraSuperior>
        <SpaceHeader/>
        <MainContent>
            {children}           
        </MainContent>       
    </div>    
      
  );
}