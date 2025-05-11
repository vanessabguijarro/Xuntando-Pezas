import React, { useEffect, useState } from "react";
import { IconoFuncion } from "../IconoFuncion";
import { Imaxes } from "../../assets/Imaxes";
import "../../estilo/Customers.App.css";
interface Customer {
  id:number;
  name: string;
  email: string;
  status: string;
  role: string;
}

type Props = {
  customers: Customer[];
  funcionEvento: (customer: Customer, accion: string) => () => void;
  Imaxes: any; // o pon el tipo real de Imaxes
};
export const CustomersTableBody: React.FC<Props> = ({ customers,funcionEvento }) => {
  const [firstName, setFirstName] = useState('dfadfadf');
  const [data, setData] = useState<Customer[]>([{id:0,name:"",email:"",status:"",role:""}])


  useEffect(() => {
    setData(customers);
  }, [customers]);

   const handleChange = (id: number, key: keyof Customer, value: string) => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );
  };

  return (<>{/* <input value={firstName} onChange={e => setFirstName(e.target.value)}/> */}
    <tbody className="body-tabla">
      {customers.map((customer) => (
        <tr key={customer.id}>
          <td>
            <input
              value={customer.name}
              onChange={(e) =>
                handleChange(customer.id, "name", e.target.value)
              }
            />
          </td>
          <td>{customer.email}</td>
          <td>{customer.status}</td>
          <td>{customer.role}</td>
          <td>
            <IconoFuncion
              imaxeUser={Imaxes.editar}
              estilo="estilo-icono-customers"
              funcion={funcionEvento(customer, "editar")}
            />
            <IconoFuncion
              imaxeUser={Imaxes.papelera}
              estilo="estilo-icono-customers"
              funcion={funcionEvento(customer, "borrar")}
            />
            <IconoFuncion
              imaxeUser={Imaxes.gardar}
              estilo="estilo-icono-customers"
              funcion={funcionEvento(customer, "gardar")}
            />
          </td>
        </tr>
      ))}
    </tbody>
    </>
  );
};
