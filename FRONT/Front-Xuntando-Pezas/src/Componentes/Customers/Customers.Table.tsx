import { useEffect, useState } from "react";
import { CustomersTableBody } from "./Customers.TableBody";
import { CustomersTableHeader } from "./Customers.TableHeader";

interface Customer {
  id: number;
  name: string;
  email: string;
  status:string
  role: string;
}

export const CustomersTable = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((data) => {
        //status
        const customersWithStatus = data.map((customer: Customer) => ({
          ...customer,
          status: "Activo"
        }));
        setCustomers(customersWithStatus);
      })
      .catch((error) => console.error("Error al obtener customers:", error));
  }, []);

  return (
    <table className="tabla-customers">
      <CustomersTableHeader />
      <CustomersTableBody customers={customers} />
    </table>
  );
};
