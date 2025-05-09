import ContainerBody from "../../COMPONENTES/ContainerBody";
import AddNewBtnMain from "../../COMPONENTES/ESPECIFICO MAIN/AddNewBtnMain";
import OrderBarTable from "../../COMPONENTES/ESPECIFICO MAIN/OrderBarTable";
import ContentInvoices from "../../COMPONENTES/ESPECIFICO MAIN/ContentInvoices";

const CommonApp = () =>  { 
    return (         
        <ContainerBody tituloPax="Invoices">
            <AddNewBtnMain/>
            <OrderBarTable></OrderBarTable>
            <ContentInvoices></ContentInvoices>          
        </ContainerBody>              
    )
};

export default CommonApp