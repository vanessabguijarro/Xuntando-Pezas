import React from "react";

interface Customer {
  name: string;
  email: string;
  status: string;
  role: string;
}

interface Props {
  customers: Customer[];
}

export const CustomersTableBody: React.FC<Props> = ({ customers }) => {
  return (
    <tbody className="body-tabla">
      {customers.map((customer, index) => (
        <tr key={index}>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.status}</td>
          <td>{customer.role}</td>
          <td>✏️ 🗑️</td>
        </tr>
      ))}
    </tbody>
  );
};
