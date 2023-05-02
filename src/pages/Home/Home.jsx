import React, { useEffect } from "react";

import "aos/dist/aos.css";
import HeroBanner from "./HeroBanner";
import AboutUs from "./AboutUs";
const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
