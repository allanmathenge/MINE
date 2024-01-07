import React from "react";

const CardFeature = ({ image, name, price, category, loading }) => {
  return (
    <div className="w-full min-w-[200px] bg-white hover:shadow-lg drop-shadow-lg cursor-pointer py-5 px-4 flex flex-col">
      {name ? (
        <>
          <div className="h-28 flex justify-center items-center">
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

          <button className="bg-yellow-500 py-1 my-2 rounded">Add Cart</button>
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
