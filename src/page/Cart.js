import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import { BsFillCartXFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );

  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    const stripePromise = await loadStripe(
      process.env.REACT_APP_STRIPE_PUBLIC_KEY
    );
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_DOMAIN}/checkout-payment`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productCartItem),
      }
    );

    if (res.statusCode === 500) return;

    const data = await res.json();

    toast("Redirecting to payment Gateway...");

    stripePromise.redirectToCheckout({ sessionId: data });
  };

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your cart items
        </h2>

        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            {/* Display Cart items */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    price={el.price}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            {/* Total cart items */}
            <div className="w-full max-w-md ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>

              <div className="flex w-full text-lg py-2 border-b">
                <p>Total Quantity: </p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>

              <div className="flex w-full text-lg py-2 border-b">
                <p>Total Price: </p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">KES </span>
                  {totalPrice}
                </p>
              </div>
              <button
                className="bg-red-500 w-full text-lg font-bold py-2 text-white"
                onClick={handlePayment}
              >
                Pay
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full mt-5 justify-center items-center text-6xl text-red-500">
              <BsFillCartXFill />
            </div>
            <p className="text-slate-600 text-3xl text-center font-bold">
              Your cart is Empty
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
