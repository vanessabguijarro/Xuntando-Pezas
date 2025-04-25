import { CustomersTableBody } from "./Customers.TableBody";
import { CustomersTableHeader } from "./Customers.TableHeader";




export const CustomersTable = () => {
    return(
        <table className="tabla-customers">
            <CustomersTableHeader/>
            <CustomersTableBody customers={[]}/>
        </table>
    );
};
