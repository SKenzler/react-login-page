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
    <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900 overflow-hidden">
      {!logedIn ? (
        <div className="w-4/5 h-[54em] flex flex-col md:flex-row justify-center items-center backdrop-blur-md bg-slate-100/10 rounded-tr-2xl rounded-bl-2xl p-4">
          <div className="w-full flex flex-col justify-center items-center m-4">
            <h1 className="w-full text-center text-4xl sm:text-6xl text-slate-100 font-bold tracking-wider p-4">
              It's time to take your web development to the{" "}
              <span className="text-indigo-400 uppercase font-black">
                next level
              </span>
            </h1>

            <p className="w-64 text-center text-sm text-slate-100 p-2">
              Please login to your account
            </p>
            <div className="w-full h-[18em] lg:w-full lg:h-[30em] flex justify-center items-center m-3">
              <Spline scene="https://prod.spline.design/WR530bub4gGY1J-O/scene.splinecode" />
            </div>
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
        <div className="w-full h-full flex justify-center items-center m-4">
          <div className="flex flex-col lg:flex-row bg-black justify-center items-center p-2">
            <div className="w-full h-[30em] lg:w-[50em] lg:h-[30em] flex flex-col justify-center items-center m-2 p-2">
              <button
                className="w-full flex justify-end items-center text-sm  text-yellow-400 hover:text-yellow-500 px-2 py-4"
                type="submit"
                onClick={(e) => handleLogout(e)}
              >
                <span className="mr-2">
                  <FiLogOut />
                </span>
                Log out
              </button>
              <Spline scene="https://prod.spline.design/1XKTfRVswXCRzhWJ/scene.splinecode" />
            </div>
            <div className="w-full flex flex-col justify-center items-center m-4 p-1">
              <h1 className="w-full text-center text-5xl lg:text-7xl text-yellow-500 font-black uppercase tracking-wider">
                Making Static Webpages come to life
              </h1>
              <h2 className="w-full text-center text-2xl lg:text-3xl text-slate-100 font-semibold italic tracking-wide p-3">
                Using animation to enhance user experience{" "}
              </h2>
              <p className="w-3/4 lg:w-5/6 text-left text-base lg:text-lg  text-slate-100 text-pretty px-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                excepturi vitae assumenda commodi perferendis veritatis, aliquid
                saepe blanditiis? Id molestiae libero, harum voluptatum
                voluptatem consequatur repellendus provident ad quasi beatae
                accusantium hic!
              </p>
              <div className="w-full flex justify-center items-center gap-4">
                <button
                  type="button"
                  className="w-64 flex justify-center items-center text-sm rounded-md px-2 py-1 bg-yellow-400 text-slate-950 font-medium hover:bg-yellow-500 mt-8 mb-4 transition ease-in-out delay-100"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
