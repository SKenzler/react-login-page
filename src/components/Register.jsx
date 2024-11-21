import React from "react";
import { useState } from "react";
import { useId } from "react";
import { FiLogIn } from "react-icons/fi";
import { IoIosLock } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import planet from "../assets/purple-planet.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const usernameId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setRegisterError(true);
    }
  };

  return (
    <form>
      <div className="w-screen h-lvh flex justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="w-3/4 h-[36em] flex flex-col md:flex-row justify-center items-center backdrop-blur-md bg-slate-100/10 rounded-tr-2xl rounded-bl-2xl py-4">
          <div className="w-full flex flex-col justify-center items-center mb-4">
            <img
              className="w-40 md:w-64 m-2"
              src={planet}
              alt="purple planet"
            />
            <h1 className="w-64 text-center text-2xl text-slate-100 font-semibold">
              Create an account
            </h1>

            <p className="w-64 text-center text-sm text-slate-100">
              Please register to create an account
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-64 flex justify-between items-center my-2">
              <h1 className="w-64 text-left text-lg font-bold tracking-wider text-slate-100">
                Register
              </h1>
            </div>
            <label
              className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
              htmlFor={usernameId}
            >
              Username
            </label>
            <div className="flex relative">
              <input
                className="w-64 rounded-md placeholder:text-slate-500 px-2 py-1 mb-2"
                type="text"
                id={usernameId}
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
              htmlFor={passwordId}
            >
              Password
            </label>
            <div className="flex relative">
              <input
                className="w-64 rounded-md placeholder:text-slate-500 px-2 py-1 mb-2"
                type="password"
                id={passwordId}
                value={password}
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute top-2 right-0 mr-2">
                <BiSolidUser color="#708090" size={18} />
              </span>
            </div>
            <label
              className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
              htmlFor={confirmPasswordId}
            >
              Confirm Password
            </label>
            <div className="flex relative">
              <input
                className="w-64 rounded-md placeholder:text-slate-500 px-2 py-1 mb-2"
                type="password"
                id={confirmPasswordId}
                value={confirmPassword}
                placeholder="password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="absolute top-2 right-0 mr-2">
                <BiSolidUser color="#708090" size={18} />
              </span>
            </div>
            {registerError && (
              <p
                className="w-64 flex justify-center items-center text-xs text-slate-100
       bg-red-600 rounded-md p-2 mt-1"
              >
                The username you selected already exists. Please try again.
              </p>
            )}
            <button
              className="w-64 flex justify-center items-center text-sm rounded-md px-2 py-1 bg-slate-950 text-slate-100 hover:bg-blue-950 mt-8 mb-4"
              type="submit"
              onClick={(e) => handleRegister(e)}
            >
              <span className="mr-2">
                <FiLogIn />
              </span>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
