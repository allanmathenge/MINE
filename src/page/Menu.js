import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Allproducts from "../component/Allproducts";

const Menu = () => {
  const { filterBy } = useParams();

  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterBy)[0];

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            alt={productDisplay.name}
            className="hover:scale-105 transition-all"
          />
        </div>

        <div className="flex flex-col pl-2 md:pl-4 gap-1">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">KES </span>
            {productDisplay.price}
          </p>

          <div className="flex gap-3">
            <button className="bg-yellow-500 py-1 my-2 hover:bg-yellow-600 rounded px-3 min-w-[100px]">
              Order
            </button>
            <button className="bg-yellow-500 py-1 my-2 hover:bg-yellow-600 rounded px-3 min-w-[100px]">
              Add Cart
            </button>
          </div>
          <div className="flex gap-1">
            <p className="text-slate-600 font-medium">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <Allproducts heading={"You may also be interested"} />
    </div>
  );
};

export default Menu;
