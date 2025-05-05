import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/Users.App.css"
const Users = ()=>{
    let estiloUsers = "estilo-paxinas-app height-100vh";
    let estiloSeccionUsers = "estilo-seccion-users"
    return <>
    <Wrapper estilo={estiloUsers}>
        <MenuLateral url={3}/>
        <Wrapper estilo={estiloSeccionUsers}>
            <h1>Estou en Users</h1>
        </Wrapper>
    </Wrapper>
    </>
}

export default Users;