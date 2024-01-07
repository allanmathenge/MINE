import React from "react";

const HomeCard = ({ name, image, category, price, loading }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-h-[150px] min-w-[150px]">
      {name ? (
        <>
          <div className="w-40 min-h-[150px]">
            <img src={image} alt={name} className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-500 font-md">{category}</p>
          <p className="text-center font-bold">
            <span className="text-red-500">KES </span>
            {price}
          </p>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="italic">{loading} </p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
