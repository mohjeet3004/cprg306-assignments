import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="p-2 m-4 bg-lightgreen max-w-sm hover:bg-green-300 hover:text-black cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <span className="text-sm">
        Buy {quantity} in {category}
      </span>
    </li>
  );
};

export default Item;
