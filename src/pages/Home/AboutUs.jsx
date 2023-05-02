import React from "react";
import aboutImg from "./../../assets/about.jpg";
import { BsQuote } from "react-icons/bs";
const AboutUs = () => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row container-custom bg-purple-50 py-12 gap-8">
      <div className="w-full lg:w-1/2 relative pt-6">
        <img src={aboutImg} alt="" className="w-full h-96 rounded-lg" />
        <div className="absolute mx-auto md:mx-0 w-11/12 md:w-72 text-center bg-white inset-x-0 -top-8 md:-left-6  rounded-lg py-4">
          <BsQuote className="text-7xl text-secondary mx-auto "></BsQuote>
          <p>
            <q>
              Ask not what you can do for your country. Ask what’s for lunch.
            </q>
          </p>
          <h4>-- Orson Welles</h4>
        </div>
      </div>
      <div className="w-full lg:w-1/2 ">
        <p>
          <small className="text-primary font-bold mb-4">WHO WE ARE</small>
        </p>
        <h2 className="text-5xl font-bold leading-tight font-serif mb-4 w-full md:w-8/12 lg:w-10/12">
          One thousand flavors in one place.
        </h2>
        <p>
          <small className="text-slate-600 w-full md:w-7/12 lg:w-10/12 text-base">
            Welcome to our recipe website, where you can find a vast collection
            of delicious recipes that will tantalize your taste buds and inspire
            your culinary creativity. Our website is dedicated to bringing you
            the best recipes from around the world, with a focus on quality
            ingredients, clear instructions, and mouth-watering results.
          </small>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
