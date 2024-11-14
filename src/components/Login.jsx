import React from "react";
import { useState, useEffect } from "react";
import users from "../utilities/users";
import { IoIosLock } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import planet from "../assets/purple-planet.png";
import galaxy from "../assets/galaxy-planet.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900">
      <div className="w-3/4 h-[34em] flex flex-col md:flex-row justify-center items-center backdrop-blur-md bg-slate-100/10 rounded-tr-2xl rounded-bl-2xl py-4">
        {!logedIn ? (
          <form>
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
                <a
                  href="/"
                  className="w-64 text-sm text-slate-100 text-right cursor-pointer"
                >
                  Create an account
                </a>
              </div>
              <label
                className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <div className="flex relative">
                <input
                  className="w-64 rounded-md placeholder:text-slate-500 px-2 py-1 mb-2"
                  type="text"
                  id="username"
                  value={username}
                  placeholder="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="absolute top-2 right-0 mr-2">
                  <IoIosLock color="#708090" size={18} />
                </span>
              </div>
              <label
                className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex relative">
                <input
                  className="w-64 rounded-md placeholder:text-slate-500 px-2 py-1 mb-2"
                  type="password"
                  id="password"
                  value={password}
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute top-2 right-0 mr-2">
                  <BiSolidUser color="#708090" size={18} />
                </span>
              </div>
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
            </div>
          </form>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
              <img className="w-40 md:w-64 m-2" src={galaxy} alt="galaxy" />
              <h1 className="w-64 text-center text-2xl text-slate-100 font-semibold">
                Welcome back {username}
              </h1>
              <h2 className="w-64 text-center text-lg text-slate-100">
                The galaxy is waiting for you
              </h2>
              <p className="w-64 text-center text-sm text-slate-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                excepturi vitae assumenda commodi perferendis veritatis, aliquid
                saepe blanditiis? Id molestiae libero, harum voluptatum
                voluptatem consequatur repellendus provident ad quasi beatae
                accusantium hic!
              </p>
            </div>
            <button
              className="w-64 flex justify-center items-center text-sm rounded-md px-2 py-1 bg-slate-950 text-slate-100 hover:bg-blue-950 mt-8 mb-4"
              type="submit"
            >
              <span className="mr-2">
                <FiLogOut />
              </span>
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
