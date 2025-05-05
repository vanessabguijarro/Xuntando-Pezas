import { Routes, Route } from "react-router-dom";
import { Customers, Home, Invoices, NewCustomer, NewInvoice, NewProduct, NewUser, Products, Users } from "./PAXINAS.PRIVADAS";
//import { LinksRutasPrivadasApp } from "./Links.PAXINAS.PRIVADAS";
import NoPage from "../PAXINAS/NoPage";

export default function RutasPrivadasApp(){
    return <>
        <Routes>
            <Route path="/app">
                <Route index element={<Home />} /> 
                <Route path="customers" element={<Customers />}/>  
                <Route path="invoices" element={<Invoices />}/>
                <Route path="products" element={<Products />}/>
                <Route path="users" element={<Users />} />
                <Route path="newcustomer" element={<NewCustomer />} />
                <Route path="newinvoice" element={<NewInvoice />} />
                 <Route path="newproduct" element={<NewProduct />} />
                <Route path="newuser" element={<NewUser />} />
                <Route path="*" element={<NoPage />} />  
            </Route>
            
        </Routes>

    </>
}