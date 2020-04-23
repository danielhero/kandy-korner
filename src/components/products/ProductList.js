import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Product from "./Product";
import "./Product.css";

export default () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <h2>Inventory</h2>

      <ul className="products">
        {products.map((pro) => (
          <Product key={pro.id} product={pro} />
        ))}
      </ul>
    </>
  );
};
