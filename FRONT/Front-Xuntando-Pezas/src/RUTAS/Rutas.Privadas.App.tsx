import { Routes, Route } from "react-router-dom";
import Home from "../PAXINAS/PRIVADAS/Home";
import Invoices from "../PAXINAS/PRIVADAS/Invoices";
import Customers from "../PAXINAS/PRIVADAS/Customers";
import Products from "../PAXINAS/PRIVADAS/Products";
import Users from "../PAXINAS/PRIVADAS/Users";

export default function RutasPrivadasApp(){
    return <>
        <Routes>
            <Route path="/app" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />

             {/* <Route path="/customers" element={<Customers />} /> */}             
        </Routes>

    </>
}