import { useEffect, useState } from "react";
import { Customer } from "../TIPOS/customer";
import { getCustomers } from "../../../../BACK/Back-Xuntando-Pezas/CLASES/BBDD/TableCustomers";

export function useCustomers() {
    const [customers, setCustomers] = useState<Customer[]>([]);
  
    useEffect(() => {
      const loadCustomers = async () => {
        try {
          const loadedCustomers = getCustomers();
          setCustomers(loadedCustomers);
        } catch (error) {
          console.error("Error loading customers:", error);
        }
      };
  
      loadCustomers();
    }, []);
  
    return { customers };
  }