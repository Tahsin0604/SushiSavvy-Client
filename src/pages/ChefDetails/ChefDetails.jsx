import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "./ChefBanner";

const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  return (
    <div>
      <ChefBanner chef={chef}></ChefBanner>
    </div>
  );
};

export default ChefDetails;
