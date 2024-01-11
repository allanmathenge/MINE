import React, { useState, useEffect } from "react";
import FilteredProducts from "./FilteredProducts";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const Allproducts = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  //Filter data display

  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );

    setDataFilter(() => {
      return [...filter];
    });
  };

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilteredProducts
                category={el}
                key={el}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading ...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  image={el.image}
                  name={el.name}
                  id={el._id}
                  price={el.price}
                  category={el.category}
                />
              );
            })
          : loadingArrayFeature.map((el, index) => (
              <CardFeature key={index} loading="Loading..." />
            ))}
      </div>
    </div>
  );
};

export default Allproducts;
