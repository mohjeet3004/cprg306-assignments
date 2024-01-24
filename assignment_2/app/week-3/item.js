import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="flex flex-col">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Item;
