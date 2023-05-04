import React, { useState } from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@smastrom/react-rating/style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const RecipeCard = ({ dish }) => {
  const [bookMarked, setBookMarked] = useState(false);
  const handleBookmarked = () => {
    setBookMarked(true);
    toast("Added to your favorite..");
  };
  const {
    chef_id,
    name,
    chefName,
    ingredients,
    cookingMethod,
    dishPicture,
    rating,
  } = dish;
  return (
    <div className="flex flex-col shadow-lg rounded-lg">
      <div className="relative">
        <div className="w-full h-[350px] overflow-hidden group rounded-t-lg">
          <LazyLoadImage
            src={dishPicture}
            effect="blur"
            alt=""
            className="w-full h-[350px] group-hover:scale-110 rounded-t-lg ease-in-out transition duration-200"
          />
        </div>
        <Link
          to={`/chef/${chef_id}`}
          className="text-white hover:text-secondary"
        >
          <h1 className="flex items-center bg-primary p-2 rounded-lg top-4 right-4 absolute ">
            <FaRegUser className="mr-2"></FaRegUser>by
            <span className="ml-2"> {chefName}</span>
          </h1>
        </Link>
      </div>
      <div className="px-6 py-4">
        <h1 className="text-lg font-serif font-semibold text-slate-600 mb-2">
          Recipe Name: <span className="font-light ml-1">{name}</span>
        </h1>
        <h1 className="text-lg font-serif font-semibold text-slate-600 mb-2">
          ingredients:
        </h1>
        {ingredients.map((ingrdient, index) => (
          <button
            key={index}
            className="bg-primary px-2 py-0 leading-10 rounded-lg text-white mr-3 my-2 cursor-pointer hover:text-secondary "
            disabled
          >
            {ingrdient}
          </button>
        ))}
        <h1 className="text-lg font-serif font-semibold text-slate-600 my-2">
          Cooking Method:{" "}
          <span className="font-light ml-1">{cookingMethod}</span>
        </h1>
      </div>
      <div className="mt-auto flex justify-between items-center  bg-slate-50 px-6 py-5 rounded-b-lg">
        <Rating
          style={{ maxWidth: 120 }}
          value={rating}
          readOnly
          className="mt-auto"
        />
        <button
          className={`cursor-pointer ${
            bookMarked ? "text-primary" : "text-slate-400"
          } `}
          disabled={bookMarked}
          onClick={handleBookmarked}
        >
          <FaHeart></FaHeart>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeCard;
