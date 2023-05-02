import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
const Footer = () => {
  return (
    <div>
      <div className=" flex justify-between container-custom flex-col lg:flex-row gap-6 py-20">
        <div>
          <h1 className="text-2xl font-mono font-semibold mb-6">
            <span className="text-3xl text-primary font-extrabold">S</span>ushi
            <span className="text-3xl text-primary font-extrabold">S</span>
            avvy
          </h1>
          <p className="text-slate-500 text-lg font-medium w-3/5">
            <small>
              Our job is to share the best Japanese dish recipe from the best
              chef around the world. Choose your recipe from our website and
              fill your tummy..
            </small>
          </p>
        </div>
        <div className="flex justify-between gap-6 w-full lg:w-1/2 flex-col md:flex-row">
          <div>
            <h2 className="text-slate-800 text-xl font-bold mb-6">
              Learn More
            </h2>
            <ul>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  About Us
                </p>
              </li>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  Team
                </p>
              </li>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  Careers
                </p>
              </li>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  Advertise
                </p>
              </li>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  Content Licensing
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-slate-800 text-xl font-bold mb-6">Support</h2>
            <ul>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  Support Center
                </p>
              </li>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  Feedback
                </p>
              </li>
              <li
                className="flex items-center gap-2
          "
              >
                <FiArrowUpRight className="text-primary"></FiArrowUpRight>
                <p className="text-slate-500 hover:text-primary cursor-pointer">
                  Accessibility
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-slate-800 text-xl font-bold mb-6">
              Get in connect
            </h2>
            <p className="text-slate-500">Follow Us</p>
            <div className="flex justify-start gap-4 md:justify-between mt-4 mb-6">
              <FaFacebookF className="cursor-pointer hover:text-primary hover:scale-110 transition ease-in duration-200"></FaFacebookF>
              <FaInstagram className="cursor-pointer hover:text-primary hover:scale-110 transition ease-in duration-200"></FaInstagram>
              <FaTwitter className="cursor-pointer hover:text-primary hover:scale-110 transition ease-in duration-200"></FaTwitter>
              <FaYoutube className="cursor-pointer hover:text-primary hover:scale-110 transition ease-in duration-200"></FaYoutube>
            </div>
            <button className="button-primary">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Copy right section */}
      <div className="bg-primary justify-center container-custom lg:justify-between py-8 text-white flex flex-col lg:flex-row gap-4">
        <p className="text-center">
          <small>
            Copyright © 2023 SushiSavvy, All rights reserved. Powered by
            SushiSavvy.
          </small>
        </p>
        <div className="flex gap-5 justify-center lg:justify-between">
          <a href="" className="hover:text-secondary">
            <small>Term of use</small>
          </a>
          <a href="" className="hover:text-secondary">
            <small>Privacy policy</small>
          </a>
          <a href="" className="hover:text-secondary">
            <small>Cookie policy</small>
          </a>
          <a href="" className="hover:text-secondary">
            <small>Sitemap</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
