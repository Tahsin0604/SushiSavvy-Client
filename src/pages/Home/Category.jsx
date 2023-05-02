import React from "react";
import category1 from "./../../assets/f-steak.jpg";
import category2 from "./../../assets/f-ramen.jpg";
import category3 from "./../../assets/f-sushi.jpg";
import category4 from "./../../assets/f-udon.jpg";
const Category = () => {
  return (
    <div className="px-2  lg:px-32 md:px-10 bg-purple-50 py-0">
      <div className="flex relative -top-28 flex-col text-white justify-between mx-auto lg:flex-row  gap-5">
        <div className="relative h-72 w-72 mx-auto rounded-full border-[12px] group  border-white overflow-hidden cursor-pointer">
          <img
            src={category1}
            alt=""
            className="h-full w-full rounded-full group-hover:scale-110 transition ease-in-out duration-200"
          />
          <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20  rounded-full transition ease-in-out duration-200">
            <h1 className="text-2xl font-bold">Steak</h1>
          </div>
        </div>

        <div className="relative h-72 w-72 mx-auto rounded-full border-[12px] group  border-white overflow-hidden cursor-pointer">
          <img
            src={category2}
            alt=""
            className="h-full w-full rounded-full group-hover:scale-110 transition ease-in-out duration-200 "
          />
          <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20  rounded-full transition ease-in-out duration-200">
            <h1 className="text-2xl font-bold">Ramen</h1>
          </div>
        </div>

        <div className="relative h-72 w-72 mx-auto rounded-full border-[12px] group  border-white overflow-hidden cursor-pointer">
          <img
            src={category3}
            alt=""
            className="h-full w-full rounded-full group-hover:scale-110 transition ease-in-out duration-200"
          />
          <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20  rounded-full transition ease-in-out duration-200">
            <h1 className="text-2xl font-bold">Sushi</h1>
          </div>
        </div>

        <div className="relative h-72 w-72 mx-auto rounded-full cursor-pointer group  border-[12px] border-white overflow-hidden cursor-pointer">
          <img
            src={category4}
            alt=""
            className="h-full w-full rounded-full group-hover:scale-110 transition ease-in-out duration-200"
          />
          <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20  rounded-full transition ease-in-out duration-200">
            <h1 className="text-2xl font-bold">Udon</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
