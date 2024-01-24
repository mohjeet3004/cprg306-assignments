import listOfItems from "./item-list";
import Item from "./item";

const ShoppingList = () => {
  return (
    <div className="flex flex-col">
      <h1>Shopping List</h1>
      {listOfItems.map((item) => {
        return (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default ShoppingList;
