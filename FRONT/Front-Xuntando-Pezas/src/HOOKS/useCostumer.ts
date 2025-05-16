import { useEffect, useState } from "react";
import { Customer } from "../TIPOS/customer";
import { endpoints, urlServidorPCTraballadores } from "../DATOS/datos";

export function useCustomers() {
    const [customers, setCustomers] = useState<Customer[]>([]);
  
    useEffect(() => {
      const loadCustomers = async () => {
        try {
          const response = await fetch(`${urlServidorPCTraballadores}/${endpoints.customers}`);
          const loadedCustomers = await response.json();
          setCustomers(loadedCustomers);
        } catch (error) {
          console.error("Error loading customers:", error);
        }
      };
  
      loadCustomers();
    }, []);
  
    return { customers };
  }