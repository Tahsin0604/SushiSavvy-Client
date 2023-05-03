import React from "react";
import founderImg from "./../../assets/founder.jpg";
const Founder = () => {
  return (
    <div className="relative h-[40rem]">
      <img src={founderImg} alt="" className="w-full h-full" />
      <div className="absolute container-custom bg-black bg-opacity-25 inset-0 flex flex-col justify-center">
        <p className=" mb-4">
          <small className="text-white font-bold ">MESSAGE FROM FOUNDER</small>
        </p>
        <h2 className="text-5xl text-white font-bold leading-tight font-serif mb-6  w-full md:w-8/12 lg:w-5/12">
          First, we eat. Then, we do everything else.
        </h2>
        <p className="text-white font-bold text-lg w-full leading-tight  md:w-6/12 text-base">
          <small>
            We believe that food is a universal language that brings people
            together. Our website is a celebration of that belief, and we hope
            that you find inspiration and joy in the recipes we share.
          </small>
        </p>
        <p className="text-white font-bold text-lg mt-8  w-full leading-tight md:w-6/12 text-base">
          <small>
            We are committed to providing you with high-quality content and a
            user-friendly experience. Please feel free to reach out to us with
            any feedback or suggestions you may have.
          </small>
        </p>
        <p className="text-white font-bold text-lg w-full leading-tight mt-8 md:w-6/12 text-base">
          <small>
            Thank you for choosing us as your go-to recipe website. We look
            forward to serving you delicious meals for years to come!
          </small>
        </p>
      </div>
    </div>
  );
};

export default Founder;
