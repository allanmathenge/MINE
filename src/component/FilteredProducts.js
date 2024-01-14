import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilteredProducts = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl p-5 bg-yellow-500 rounded-full cursor-pointer ${
          isActive && "bg-yellow-800 text-white"
        }`}
      >
        <CiForkAndKnife />
      </div>
      <p className="text-center font-md my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilteredProducts;
