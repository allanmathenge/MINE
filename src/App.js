import React, { useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);

      const resData = await res.json();

      dispatch(setDataProduct(resData));
    })();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div className="font-primary">
        <Header />
        <main className="pt-16 pb-5 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
