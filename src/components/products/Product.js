import React from "react";

export default (props) => (
  <section className="product">
    <h4 className="product__type">
      Product Type: {props.product.productTypeId}
    </h4>
    <div className="product__itemName">{props.product.itemName}</div>
    <div className="product__itemPrice">Price: {props.product.itemPrice}</div>
  </section>
);
