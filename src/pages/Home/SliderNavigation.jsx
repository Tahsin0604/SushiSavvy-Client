import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const SliderNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="mt-6">
      <button
        onClick={() => swiper.slidePrev()}
        className="button-primary mr-3"
      >
        <FaArrowLeft></FaArrowLeft>
      </button>
      <button onClick={() => swiper.slideNext()} className="button-primary">
        <FaArrowRight></FaArrowRight>
      </button>
    </div>
  );
};

export default SliderNavigation;
