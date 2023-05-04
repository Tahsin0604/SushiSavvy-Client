import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateCurrentUser, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [error, setError] = useState("");
  const { signUpUserWithEmailPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photo.value;
    const password = form.password.value;
    const confirmPass = form.confirm.value;

    if (password !== confirmPass) {
      setError("Password does not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    if (!email || !password || !confirm) {
      setError("required fill have to be filled up");
      return;
    }
    signUpUserWithEmailPassword(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfile(loggedUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (err.message === "auth/email-already-in-use") {
          setError("already registered. please login.");
        }
      });
  };
  return (
    <div className=" max-w-md md:max-w-lg  mx-auto py-16 px-2">
      <div className="flex-col">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-600">Register Now!!!</h1>
        </div>
        <div>
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="texts"
                placeholder="Your Name"
                id="name"
                name="name"
                className="form-input"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <p className="label-text">
                  Email{" "}
                  <span className="text-primary text-lg font-semibold">*</span>
                </p>
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
              <label htmlFor="photo" className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="texts"
                placeholder="Photo URL"
                id="photo"
                name="photo"
                className="form-input"
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
              <label htmlFor="confirm" className="label">
                <span className="label-text">
                  Confirm Password
                  <span className="text-primary text-lg font-semibold">*</span>
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirm"
                name="confirm"
                className="form-input"
                required
              />
            </div>
            <div className="form-control mt-2">
              <label>
                <p className="text-lg text-slate-500">
                  <small>
                    Already have an account.
                    <Link
                      to="/login"
                      className="text-primary font-semibold ml-1 hover:underline"
                    >
                      Login
                    </Link>
                  </small>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="button-primary">Register</button>
            </div>
            <div className="form-control mt-2">
              <label>
                <p className="text-lg text-red-700">
                  <small>{error}</small>
                </p>
              </label>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
