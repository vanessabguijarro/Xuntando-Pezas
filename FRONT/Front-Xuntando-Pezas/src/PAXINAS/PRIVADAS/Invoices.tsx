import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/Invoices.App.css"
const Invoices = ()=>{
    let estiloInvoices = "estilo-paxinas-app height-100vh";
    let estiloSeccionInvoices = "estilo-seccion-invoices";
    return <>
    <Wrapper estilo={estiloInvoices}>
    <MenuLateral url={2}/>
        <Wrapper estilo={estiloSeccionInvoices}>
            <h1>Estou en Invoices</h1>
        </Wrapper>
    </Wrapper>
    
    </>
}

export default Invoices;