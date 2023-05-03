import React from "react";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:flex-row py-20 bg-purple-50  container-custom gap-7 lg:gap-5">
      <div className="w-full lg:w-1/2 text-center lg:text-start">
        <p className="mb-4 text-primary font-bold ">
          <small>TESTIMONIAL</small>
        </p>
        <h1 className="text-5xl text-slate-700 font-bold leading-tight font-serif">
          What they say
        </h1>
        <p className="w-full  lg:w-8/12 font-semibold leading-tight text-lg mt-6">
          <small>
            We provide you with meal formula - which includes the prepackaged
            necessary ingredients for a divine dinner as well as easy to follow
            recipe guide in beautiful
          </small>
        </p>
        <div className="flex gap-16 flex-col justify-center lg:justify-start md:flex-row mt-8">
          <div>
            <h1 className="text-primary text-4xl font-extrabold font-serif mb-3">
              15k+
            </h1>
            <h4 className="text-slate-600 text-2xl font-bold">
              Happy Customers
            </h4>
          </div>
          <div>
            <h1 className="text-primary text-4xl font-extrabold font-serif mb-3">
              13+
            </h1>
            <h4 className="text-slate-600 text-2xl font-bold">Award Win</h4>
          </div>
          <div>
            <h1 className="text-primary text-4xl font-extrabold font-serif mb-3">
              40+
            </h1>
            <h4 className="text-slate-600 text-2xl font-bold">Food Recipe</h4>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 ">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Testimonial;
