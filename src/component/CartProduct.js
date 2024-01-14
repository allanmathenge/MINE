import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border-2 border-slate-300 ">
      <div className="bg-white p-3 rounded overflow-hidden">
        <img src={image} className="h-28 w-40 object-cover" alt={name} />
      </div>
      <div className="flex flex-col pl-2 md:pl-4 gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className="cursor-pointer text-slate-700 hover:text-red-500 text-xl"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <MdDeleteOutline />
          </div>
        </div>
        <p className="text-slate-500 font-medium">{category}</p>
        <p className="font-bold text-base">
          <span className="text-red-500">KES </span>
          {price}
        </p>

        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <button
              className="bg-slate-300 py-1 my-2 hover:bg-slate-400 rounded px-3 p-1"
              onClick={() => dispatch(increaseQty(id))}
            >
              <FaPlus />
            </button>
            <p className="font-semibold">{qty}</p>
            <button
              className="bg-slate-300 py-1 my-2 hover:bg-slate-400 rounded px-3 p-1"
              onClick={() => dispatch(decreaseQty(id))}
            >
              <FaMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p className="">Total : </p>
            <p className="">
              {" "}
              <span className="text-red-500">KES</span> {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
