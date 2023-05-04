import React from "react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//image
import testimonial1 from "./../../assets/testimonial-1 (1).jpg";
import testimonial2 from "./../../assets/testimonial-1 (2).jpg";
import testimonial3 from "./../../assets/testimonial-1 (3).jpg";
import testimonial4 from "./../../assets/testimonial-1 (4).jpg";
import testimonial5 from "./../../assets/testimonial-1 (5).jpg";
import SliderNavigation from "./SliderNavigation";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Pagination, Autoplay]}
      spaceBetween={25}
      centeredSlides={true}
      slidesPerView="auto"
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop={true}
    >
      {/* slider 1 */}
      <SwiperSlide className="res-slide">
        <div className="text-center ">
          <img
            src={testimonial1}
            alt=""
            className="w-16  h-16 border-4 mx-auto rounded-full"
          />
          <p className="text-slate-600 leading-tight my-4">
            <q>
              <small>
                I stumbled upon this recipe website while searching for new meal
                ideas, and I'm so glad I did!
              </small>
            </q>
          </p>
          <h1 className="font-bold font-serif text-slate-600">Dana Ray</h1>
        </div>
      </SwiperSlide>
      {/* slider 2 */}
      <SwiperSlide className="res-slide">
        <div className="text-center">
          <img
            src={testimonial2}
            alt=""
            className="w-16 h-16 border-4 mx-auto rounded-full"
          />
          <p className="text-slate-600 leading-tight my-4">
            <q>
              <small>
                The website offers a wide range of recipes that are easy to
                follow and always turn out delicious.
              </small>
            </q>
          </p>
          <h1 className="font-bold font-serif text-slate-600">Alan Harper</h1>
        </div>
      </SwiperSlide>

      {/* slider 3 */}
      <SwiperSlide className="res-slide">
        <div className="text-center">
          <img
            src={testimonial4}
            alt=""
            className="w-16 h-16 mx-auto border-4 rounded-full"
          />
          <p className="text-slate-600 leading-tight my-4">
            <q>
              <small>
                I highly recommend this website to anyone looking for
                inspiration in the kitchen!
              </small>
            </q>
          </p>
          <h1 className="font-bold font-serif text-slate-600">Dana Ray</h1>
        </div>
      </SwiperSlide>

      {/* slider 4 */}
      <SwiperSlide className="res-slide">
        <div className="text-center">
          <img
            src={testimonial5}
            alt=""
            className="w-16 h-16 border-4 mx-auto rounded-full"
          />
          <p className="text-slate-600 leading-tight my-4">
            <q>
              <small>
                I've been using this recipe website for a few months now and
                it's become my go-to source for meal ideas.
              </small>
            </q>
          </p>
          <h1 className="font-bold font-serif text-slate-600">Rihana Clarke</h1>
        </div>
      </SwiperSlide>

      {/* slider 5 */}
      <SwiperSlide className="res-slide">
        <div className="text-center">
          <img
            src={testimonial3}
            alt=""
            className="w-16 h-16 border-4 mx-auto rounded-full"
          />
          <p className="text-slate-600 leading-tight my-4">
            <q>
              <small>
                I've tried several recipes and they've all been a hit with my
                family.
              </small>
            </q>
          </p>
          <h1 className="font-bold font-serif text-slate-600">Alan Kent</h1>
        </div>
      </SwiperSlide>
      {/* Custom Navigation */}
      <SliderNavigation></SliderNavigation>
    </Swiper>
  );
};

export default Slider;

{
  /* <SwiperSlide>
        
      </SwiperSlide>
      <SwiperSlide>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-72 text-center px-6 py-10 border shadow-lg rounded-lg border-solid border-slate-200">
          <img
            src={testimonial3}
            alt=""
            className="w-16 h-16 border-4 mx-auto rounded-full"
          />
          <p>
            <q>
              <small>
                
              </small>
            </q>
          </p>
          <h1>Jhon Carpenter</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
      </SwiperSlide>
      <SwiperSlide>
       
      </SwiperSlide> */
}
