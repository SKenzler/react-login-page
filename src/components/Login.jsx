import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="w-3/4 h-3/4 flex flex-col justify-center items-center backdrop-blur-md bg-white/10 rounded-tr-2xl rounded-bl-2xl">
          <h1 className="w-64 text-left text-lg font-bold tracking-wider text-slate-100">
            Log in
          </h1>
          <label
            className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-64 rounded-md px-2 py-1 mb-2"
            type="text"
            id="username"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            className="w-64 text-slate-100 text-sm text-left mt-2 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-64 rounded-md px-2 py-1 mb-2"
            type="password"
            id="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-64 rounded-md px-2 py-1 bg-slate-950 text-slate-100 hover:bg-blue-950 m-4"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
