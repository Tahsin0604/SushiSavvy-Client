import React from "react";
import { FaAngleRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ChefCard = ({ chef }) => {
  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    id,
  } = chef;
  return (
    <div className="flex flex-col  gap-4 p-6 border bg-white shadow-lg rounded-lg">
      <div className="h-[370px] w-full rounded-lg group overflow-hidden">
        <LazyLoadImage
          src={chefPicture}
          alt=""
          className="w-full h-[370px] rounded-lg group-hover:scale-110 ease-in-out transition duration-200"
        />
      </div>

      <div>
        <h1 className="text-lg font-serif font-semibold text-slate-600 ">
          Name: <span className="font-light ml-1">{chefName}</span>
        </h1>
        <h3 className="text-lg font-serif font-semibold text-slate-600">
          Years of Experience:
          <span className="font-light ml-1">{yearsOfExperience}</span>
        </h3>
        <h3 className="text-lg font-serif font-semibold text-slate-600">
          Number of Recipes:
          <span className="font-light ml-1">{numberOfRecipes}</span>
        </h3>
        <p className="text-lg font-serif font-semibold text-slate-600">
          Likes: <span className="font-light ml-1">{likes}</span>
        </p>
      </div>
      <div className="mt-auto flex justify-end">
        <button>
          <Link
            to={`/chef/${id}`}
            className="flex items-center gap-2 text-primary hover:text-secondary hover:scale-105 transition duration-200 ease-in-out"
          >
            <span className="font-bold">View Recipes</span>
            <FaAngleRight className="text-xl"></FaAngleRight>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ChefCard;
