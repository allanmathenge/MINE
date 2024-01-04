import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { imageToBase64 } from "../utility/imageToBase64";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
        />

        <label htmlFor="category">Category:</label>

        <select
          className="bg-slate-200 p-2 my-1 gap-3"
          id="category"
          name="category"
          onChange={handleOnChange}
        >
          <option></option>
          <option>Broilers</option>
          <option>Kienyeji</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>More</option>
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
          Price:
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="price"
          onChange={handleOnChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          rows={2}
          className="bg-slate-200 p-1 my-1 resize-none rounded"
          name="description"
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
