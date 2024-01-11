import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { imageToBase64 } from "../utility/imageToBase64";
import { toast } from "react-hot-toast";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await imageToBase64(e.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, image, category, price } = data;
    if (name && image && category && price) {
      const FetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await FetchData.json();
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          price: "",
          description: "",
          image: "",
        };
      });
    } else {
      toast("Please fill all the required fields");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl my-6 font-bold text-gray-700 text-center">
        What are you selling?
      </h1>
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input
          type={"text"}
          name="name"
          value={data.name}
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
        />

        <label htmlFor="category">Category:</label>

        <select
          className="bg-slate-200 p-2 my-2 gap-3"
          id="category"
          name="category"
          value={data.category}
          onChange={handleOnChange}
        >
          <option value={""}></option>
          <option value={"Broilers"}>Broilers</option>
          <option value={"Kienyeji"}>Kienyeji</option>
          <option value={"Mixed"}>Mixed</option>
          <option value={"Vegetables"}>Vegetables</option>
        </select>

        <label htmlFor="image">
          Image:
          <div className="h-40 max-w-full rounded bg-slate-200 flex items-center justify-center cursor-pointer">
            <span className="text-5xl">
              {data.image ? (
                <img
                  src={data.image}
                  className="h-[160px]"
                  alt="New product upload"
                />
              ) : (
                <IoCloudUploadOutline />
              )}
            </span>
            <input
              type={"file"}
              id="image"
              accept="image/*"
              className="hidden"
              onChange={uploadImage}
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price Ksh:
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="price"
          value={data.price}
          onChange={handleOnChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          rows={2}
          className="bg-slate-200 p-1 my-1 resize-none rounded"
          name="description"
          value={data.description}
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 rounded-full drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
