import React from "react";
import HeroBanner from "./HeroBanner";
import AboutUs from "./AboutUs";
import Featured from "./Featured";
import Category from "./Category";
import Testimonial from "./Testimonial";
import Founder from "./Founder";
const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutUs></AboutUs>
      <Featured></Featured>
      <Category></Category>
      <Testimonial></Testimonial>
      <Founder></Founder>
    </div>
  );
};

export default Home;
