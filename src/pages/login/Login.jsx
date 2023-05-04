import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "./../../assets/google.png";
import githubLogo from "./../../assets/github.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  // error state variable
  const [error, setError] = useState("");
  // destructuring context hook
  const { signIn, signinWithGoogle, signinWithGithub } =
    useContext(AuthContext);
  //location hook
  const location = useLocation();
  //navigation hook
  const navigate = useNavigate();
  //getting path name from location state
  const from = location.state?.from?.pathname || "/";

  //login form handler
  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;

    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //Google signin handler
  const handleGoogle = () => {
    signinWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  ////Github signin handler
  const handleGithub = () => {
    signinWithGithub()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className=" max-w-md md:max-w-lg  mx-auto py-16 px-2">
      <div className="flex-col">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-600">Login First!!!</h1>
        </div>
        <div className="">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">
                  Email
                  <span className="text-primary text-lg font-semibold">*</span>
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">
                  Password
                  <span className="text-primary text-lg font-semibold">*</span>
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="form-input"
                required
              />
            </div>
            <div className="form-control">
              <label className="mt-2">
                <p className="text-lg text-slate-500">
                  <small>
                    Don't have an account.
                    <Link
                      to="/register"
                      state={{ from: from }}
                      replace
                      className="text-primary font-semibold ml-1 hover:underline"
                    >
                      Register now.
                    </Link>
                  </small>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="button-primary">Login</button>
            </div>
            <div className="form-control mt-2">
              <label>
                <p className="text-lg text-red-700">
                  <small>{error}</small>
                </p>
              </label>
            </div>
          </form>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-10/12 h-1 my-8 bg-gray-200 border-0 rounded " />
            <div className="absolute px-6 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <p className="text-primary font-semibold text-lg">Or</p>
            </div>
          </div>

          <button
            onClick={handleGoogle}
            className="flex justify-center items-center w-full py-2 px-5 border border-solid border-primary rounded-lg gap-2 hover:border-secondary text-slate-600"
          >
            <img src={googleLogo} alt="Google" className="w-6 h-6" />
            <p className="text-lg font-semibold">Continue with Google</p>
          </button>
          <button
            onClick={handleGithub}
            className="flex justify-center items-center w-full mt-4 py-2 px-5 border border-solid border-primary rounded-lg gap-2 hover:border-secondary text-slate-600"
          >
            <img src={githubLogo} alt="Google" className="w-6 h-6" />
            <p className="text-lg font-semibold">Continue with Github</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
