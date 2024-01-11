import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/productSlice";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg cursor-pointer py-5 px-4 flex flex-col">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-14 flex justify-center items-center">
              <img src={image} alt={name} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-500 font-md">{category}</p>
            <p className=" font-bold">
              <span className="text-red-500">KES </span>
              {price}
            </p>
          </Link>
          <button
            className="bg-yellow-500 py-1 my-2 hover:bg-yellow-600 rounded w-full"
            onClick={handleAddCartProduct}
          >
            Order
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
