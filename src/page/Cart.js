import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your cart items
      </h2>

      <div className="">
        {/* Display Cart items */}
        <div className=""></div>

        {/* total cart items */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Cart;
