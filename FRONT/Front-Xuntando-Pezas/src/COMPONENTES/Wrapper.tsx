import React from "react";
//Inclue Top Bar , Subheader e Main
import BarraSuperior from "./BarraSuperior";
import SubHeader from "./Subheader";
import MainContent from "./MainContent";
import "../assets/estilos_comp/ContentWrapper.css"


export default function ContentWrapper({ children }: { children: React.ReactNode } ) {
  return (
    <div className="content-wrapper">
        <BarraSuperior></BarraSuperior>
        <SubHeader></SubHeader>
        <MainContent>
            {children}           
        </MainContent>       
    </div>    
      
  );
}