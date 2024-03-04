import ItemList from "./item-list";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-green-300">
      <h1 className="text-5xl my-4 text-black items-center">Shopping List</h1>
      <div className="flex flex-col gap-4 text-black items-center">
        {<ItemList />}
      </div>
    </div>
  );
};

export default page;
