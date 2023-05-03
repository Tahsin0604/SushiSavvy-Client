import React from "react";
import { FaAngleRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col  gap-6 p-6 border shadow-lg rounded-lg">
      <div className="h-96 w-full rounded-lg group overflow-hidden">
        <img
          src={chefPicture}
          alt=""
          className="w-full h-full rounded-lg group-hover:scale-110 ease-in-out transition duration-200"
        />
      </div>

      <div>
        <h1>Name: {chefName}</h1>
        <h3>Years of Experience: {yearsOfExperience}</h3>
        <h3>Number of Recipes:{numberOfRecipes}</h3>
        <p>Likes:{likes}</p>
      </div>
      <div className="mt-auto flex justify-end">
        <button>
          <Link
            to={`/chef-details/${id}`}
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
