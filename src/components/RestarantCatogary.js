import React, { useState } from "react";
import ItemList from "./ItemList";
// import React ,{  useState } from "react";

const RestarantCatogary = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto  my-6 bg-gray-200 ">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="text-lg font-semibold">
            {data.title}({data.itemCards.length})
          </span>
          <span>&#9660;</span>
        </div>
        <span>{showItem && <ItemList item={data.itemCards} />}</span>
      </div>
    </div>
  );
};

export default RestarantCatogary;
