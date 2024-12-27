import React from "react";
import { useState, useId } from "react";
import { Link } from "react-router-dom";
import users from "../utilities/users";
import { IoIosLock } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import planet from "../assets/purple-planet.png";
import Spline from "@splinetool/react-spline";
//<Spline scene="https://prod.spline.design/1XKTfRVswXCRzhWJ/scene.splinecode" />

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const userId = useId();
  const passId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setLoggedIn(true);
    } else {
      setLoginError(true);
      setUsername("");
      setPassword("");
    }
  };

  const handleLogout = (e) => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setLoginError(false);
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900">
      {!logedIn ? (
        <div className="w-4/5 h-[34em] flex flex-col md:flex-row justify-cnter items-center backdrop-blur-md bg-slate-100/10 rounded-tr-2xl rounded-bl-2xl py-4">
          <div className="w-full flex flex-col justify-center items-center mb-4">
            <img
              className="w-40 md:w-64 m-2"
              src={planet}
              alt="purple planet"
            />
            <h1 className="w-64 text-center text-2xl text-slate-100 font-semibold">
              Get ready to explore
            </h1>

            <p className="w-64 text-center text-sm text-slate-100">
              Please login to your account
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-64 flex justify-between items-center my-2">
              <h1 className="w-64 text-left text-lg font-bold tracking-wider text-slate-100">
                Login
              </h1>

              <Link
                to="/register"
                className="w-64 text-sm text-slate-100 text-right cursor-pointer"
              >
                Create an account
              </Link>
            </div>
            <form>
              <label
                className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
                htmlFor={userId}
              >
                Username
              </label>
              <div className="flex relative">
                <input
                  className="w-64 rounded-md placeholder:text-slate-500 px-2 py-1 mb-2"
                  type="text"
                  id={userId}
                  value={username}
                  placeholder="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="absolute top-2 right-0 mr-2">
                  <IoIosLock color="#708090" size={14} />
                </span>
              </div>
              <label
                className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
                htmlFor={passId}
              >
                Password
              </label>
              <div className="flex relative">
                <input
                  className="w-64 rounded-md placeholder:text-slate-500 px-2 py-1 mb-2"
                  type="password"
                  id={passId}
                  value={password}
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute top-2 right-0 mr-2">
                  <BiSolidUser color="#708090" size={14} />
                </span>
              </div>
              {loginError && (
                <p
                  className="w-64 flex justify-center items-center text-xs text-slate-100
                 bg-red-600 rounded-md p-2 mt-1"
                >
                  The username or password was not found. Please try again.
                </p>
              )}
              <button
                className="w-64 flex justify-center items-center text-sm rounded-md px-2 py-1 bg-slate-950 text-slate-100 hover:bg-blue-950 mt-8 mb-4"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                <span className="mr-2">
                  <FiLogIn />
                </span>
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="justify-center flex flex-col items-center min-w-full min-h-screen py-4">
          <div className="w-full flex-col justify-center items-center">
            <Spline scene="https://prod.spline.design/1XKTfRVswXCRzhWJ/scene.splinecode" />
            <h1 className="w-full text-center text-6xl md:text-8xl text-yellow-500 font-black uppercase tracking-wide p-5 m-2">
              Discover the wonders of the Universe
            </h1>
            <h2 className="w-full text-center text-3xl lg:text-4xl text-slate-100 font-semibold italic tracking-wide p-2">
              The galaxy is waiting for you
            </h2>
            <p className="w-2/3 lg:w-1/3 text-left text-base lg:text-xl  text-slate-100 text-pretty py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              excepturi vitae assumenda commodi perferendis veritatis, aliquid
              saepe blanditiis? Id molestiae libero, harum voluptatum voluptatem
              consequatur repellendus provident ad quasi beatae accusantium hic!
            </p>
            <div className="w-full flex justify-center items-center gap-4">
              <button
                type="button"
                className="w-64 flex justify-center items-center text-sm rounded-md px-2 py-1 bg-yellow-400 text-slate-950 font-medium hover:bg-yellow-200 mt-8 mb-4 transition ease-in-out delay-100"
              >
                Explore
              </button>
            </div>
            <button
              className="w-2/3 flex justify-end items-center text-sm  text-yellow-500 hover:text-slate-400 m-8"
              type="submit"
              onClick={(e) => handleLogout(e)}
            >
              <span className="mr-2">
                <FiLogOut />
              </span>
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
