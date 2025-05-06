// @ts-ignore
import React from 'react';

// @ts-ignore
import Title from '../atoms/Title';

// @ts-ignore
import ProductForm from '../organisms/ProductForm';

// @ts-ignore
import './NewProductTemplate.css';

const NewProductTemplate: React.FC = () => {
  return React.createElement(
    "div",
    { className: "new-product-template" },
    React.createElement(Title, null, "New Product"),
    React.createElement(ProductForm, null)
  );
};

export default NewProductTemplate;
