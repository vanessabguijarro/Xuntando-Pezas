import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/Customers.App.css"
const Customers = ()=>{
let estiloCustomers = "estilo-paxinas-app height-100vh"
let estiloSeccionCustomers = "estilo-seccion-custormers"
    return <>
    <Wrapper estilo={estiloCustomers}>
        <MenuLateral url={1}/>
        <Wrapper estilo={estiloSeccionCustomers}>
            <h1>Estou en Customers</h1>
        </Wrapper>
    </Wrapper>
    </>
    
        
}

export default Customers;