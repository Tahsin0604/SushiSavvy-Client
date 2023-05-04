import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "./ChefBanner";
import RecipeCard from "../Shared/RecipeCard";

const ChefDetails = () => {
  const chef = useLoaderData();
  const { signatureDishes } = chef;
  console.log(signatureDishes);
  return (
    <div>
      <ChefBanner chef={chef}></ChefBanner>
      <div>
        <h1 className="text-5xl font-bold text-slate-700 font-serif mt-10 mb-7 text-center">
          Signature Dishes
        </h1>
        <div className="card-container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signatureDishes.map((dish) => (
            <RecipeCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
