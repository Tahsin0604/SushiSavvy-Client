import React from "react";
import heroImg from "./../../assets/hero.jpg";
const HeroBanner = () => {
  return (
    // <div className="flex  flex-col justify-between items-center bg-slate-50 lg:flex-row container-custom">
    //   <div>
    //
    //
    //     <button className="btn-primary">Get Started</button>
    //   </div>
    //   <div className=" w-full lg:w-3/5 relative">
    //     <img src={heroImg} alt="" className="w-full " />
    //   </div>
    // </div>
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <div className="mb-5 text-5xl font-bold font-serif leading-snug">
            <h1>Let's Start</h1>
            <h1>Cooking With</h1>
            <h1>Popular Recipes</h1>
          </div>
          <div className="mb-5">
            <p>Want to learn japanese dish but confused how to start? </p>
            <p>No need to worry again!</p>
          </div>
          <button className="button-primary">Learn New Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
