import React from "react";
import { FaHistory, FaUser } from "react-icons/fa";
import { TbSoup } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ChefBanner = ({ chef }) => {
  //loading data
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } =
    chef;

  return (
    <div className="container-custom flex justify-center  flex-col md:flex-row gap-10 py-6">
      {/* image section */}
      <div className="w-full flex justify-center  md:w-[300px] h-[400px]  rounded-lg">
        <LazyLoadImage
          src={chefPicture}
          effect="blur"
          alt=""
          className="rounded-lg mx-auto md:ml-auto"
          height="400px"
          width="300px"
          placeholderSrc="chefName"
        />
      </div>
      {/* description section */}
      <div className="w-full md:w-1/2 py-8  ">
        <div className="border border-solid border-primary py-4 rounded-lg">
          <h1 className="font-serif text-xl  font-semibold text-slate-600 flex items-center pb-4 pl-5 border-b border-solid border-primary ">
            <FaUser className="text-lg text-primary mr-2"></FaUser>Name:
            <span className="font-light ml-2">{chefName}</span>
          </h1>
          <h3 className="font-serif text-xl mt-3 font-semibold text-slate-600 flex items-center pb-4 pl-5 border-b border-solid border-primary">
            <FaHistory className="text-lg text-primary mr-2"></FaHistory>Years
            of Experience:
            <span className="font-light ml-2">{yearsOfExperience}</span>
          </h3>
          <h3 className="font-serif text-xl mt-3 font-semibold text-slate-600 flex items-center pb-4 pl-5 border-b border-solid border-primary">
            <TbSoup className="text-lg text-primary mr-2"></TbSoup> Number of
            Recipes:
            <span className="font-light ml-2">{numberOfRecipes}</span>
          </h3>
          <p className="font-serif text-xl mt-3 font-semibold text-slate-600 flex items-center pl-5">
            <AiFillLike className="text-lg text-primary mr-2"></AiFillLike>
            Likes: <span className="font-light ml-2">{likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
