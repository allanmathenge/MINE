import React, { useRef } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 4);

  const homeProductCartKienyeji = productData.filter(
    (el) => el.category === "Kienyeji",
    []
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Delivery</p>

            <img
              src="https://banner2.cleanpng.com/20180419/kpw/kisspng-semi-trailer-truck-car-computer-icons-pickup-truck-5ad86c33bf0328.2332264515241329157824.jpg"
              alt="delivery"
              className="h-7"
            />
          </div>

          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Over 500+ reliable buyers and sellers{" "}
            <span className="text-red-600"> join us</span>
          </h2>
          <p className="py-3 text-base tracking-wider">
            Tunakutanisha wanunuzi na wauzaji kwa njia rahisi ya haraka na ya
            kuaminika. Tunahakikisha biashara inakuwa furaha kwa kuleta pamoja
            mahitaji yako ya kuku kidigitali, kufanya manunuzi na mauzo kuwa
            rahisi na bora zaidi.
          </p>

          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">Reliable </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded-full"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded-full"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartKienyeji[0]
            ? homeProductCartKienyeji.map((el) => {
                return (
                  <CardFeature
                    key={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature key={index} loading="Loading..." />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
