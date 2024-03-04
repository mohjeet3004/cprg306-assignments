"use client";
import ItemList from "./item-list";
import Newitem from "./new-item";
import List from "./items.json";
import { useState } from "react";

const Page = () => {
  const [data, setData] = useState(List);
  const handleSubmit = (item) => {
    setData([...data, item]);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-green-300">
      <h1 className="text-5xl my-4 text-black items-center">Shopping List</h1>

      <div>
        <Newitem Submit={handleSubmit} />
      </div>
      <ItemList List={data} />
    </div>
  );
};

export default Page;
