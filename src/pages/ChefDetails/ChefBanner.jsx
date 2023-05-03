import React from "react";
import { FaHistory, FaUser } from "react-icons/fa";
import { TbSoup } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
const ChefBanner = ({ chef }) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } =
    chef;
  return (
    <div className="container-custom flex justify-center  flex-col md:flex-row gap-10 py-6">
      <div className="w-full md:w-[300px] h-[400px]  rounded-lg">
        <img
          src={chefPicture}
          alt=""
          className="w-[300px] h-[400px] rounded-lg mx-auto md:ml-auto"
        />
      </div>

      <div className="w-full md:w-1/2 py-8  ">
        <div className="border border-solid border-slate-700 py-4 rounded-lg">
          <h1 className="font-serif text-2xl  font-semibold text-slate-600 flex items-center pb-4 pl-5 border-b border-solid border-slate-700 ">
            <FaUser className="text-lg mr-2"></FaUser>Name:
            <span className="font-light ml-4">{chefName}</span>
          </h1>
          <h3 className="font-serif text-2xl mt-3 font-semibold text-slate-600 flex items-center pb-4 pl-5 border-b border-solid border-slate-700">
            <FaHistory className="text-lg mr-2"></FaHistory>Years of Experience:
            <span className="font-light ml-4">{yearsOfExperience}</span>
          </h3>
          <h3 className="font-serif text-2xl mt-3 font-semibold text-slate-600 flex items-center pb-4 pl-5 border-b border-solid border-slate-700">
            <TbSoup className="text-lg mr-2"></TbSoup> Number of Recipes:
            <span className="font-light ml-4">{numberOfRecipes}</span>
          </h3>
          <p className="font-serif text-2xl mt-3 font-semibold text-slate-600 flex items-center pl-5">
            <AiFillLike className="text-lg mr-2"></AiFillLike>Likes:{" "}
            <span className="font-light ml-4">{likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
