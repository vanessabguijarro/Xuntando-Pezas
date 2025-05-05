import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/Products.App.css"
const Products = ()=>{
let estiloProducts = "estilo-paxinas-app height-100vh"
let estiloSeccionCustomers = "estilo-seccion-products"
    return <>
    <Wrapper estilo={estiloProducts}>
    <MenuLateral url={4}/>
        <Wrapper estilo={estiloSeccionCustomers}>
            <h1>Estou en Products</h1>
        </Wrapper>
    </Wrapper>
    
    </>
}

export default Products;