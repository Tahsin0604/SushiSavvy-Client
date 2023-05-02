import React from "react";
import featuredBg from "./../../assets/featuredbg.jpg";
const Featured = () => {
  return (
    <div className="relative w-full">
      <img src={featuredBg} alt="" className="h-[33rem] w-full" />
      <div className="absolute bg-black bg-opacity-60 text-white flex flex-col justify-center gap-4 inset-0 text-center pt-5">
        <p>
          <small className="font-bold text-lg mb-4 ">FEATURED</small>
        </p>
        <h1 className="text-5xl font-bold leading-tight font-serif">
          Popular Categories
        </h1>
        <p className="w-full md:w-7/12 lg:w-4/12 mx-auto font-semibold text-lg">
          <small>
            Provide popular japanese dish of world wide famous chef. Now You can
            cook your favorite japanese dish from home.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Featured;
