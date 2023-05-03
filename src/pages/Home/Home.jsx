import React from "react";
import HeroBanner from "./HeroBanner";
import AboutUs from "./AboutUs";
import Featured from "./Featured";
import Category from "./Category";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutUs></AboutUs>
      <Featured></Featured>
      <Category></Category>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
