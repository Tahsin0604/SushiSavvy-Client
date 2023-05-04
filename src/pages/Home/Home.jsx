import React, { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner";
import AboutUs from "./AboutUs";
import Featured from "./Featured";
import Category from "./Category";
import Testimonial from "./Testimonial";
import Founder from "./Founder";
import ChefCard from "./ChefCard";
const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-pi.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutUs></AboutUs>
      <Featured></Featured>
      <Category></Category>
      <section className="px-2 lg:px-32 md:px-16 py-12 bg-purple-50">
        <h1 className="text-5xl text-slate-700 text-center font-bold mb-16">
          Our Chefs
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      </section>
      <Testimonial></Testimonial>
      <Founder></Founder>
    </div>
  );
};

export default Home;
