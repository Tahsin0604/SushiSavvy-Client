import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "./../../assets/error.jpg";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="relative h-screen w-screen">
      <img src={errorImg} alt="" className="h-full w-full" />
      <div className="absolute inset-0 flex bg-white bg-opacity-50 flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold mb-8 text-slate-600">Oops!</h1>
        <h1 className="text-2xl font-extrabold my-4 text-slate-900">
          {error.statusText || error.message}
        </h1>
        <Link to="/" className="text-primary text-3xl underline font-extrabold">
          Go Back To Home
        </Link>
      </div>
    </div>
  );

export default Error;
