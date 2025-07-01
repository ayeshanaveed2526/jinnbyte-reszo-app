import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col justify-around h-screen bg-slate-950 object-cover ">
      <div className="flex w-full h-screen">
        <img
          className="flex w-full object-cover opacity-50"
          src="image 6.png"
          alt="image not found"
        />

        <div className="flex gap-8 flex-col justify-center items-center w-full h-full h-screen">
          <img src="Frame 1171274783.png" alt="image not found" />
          <h2 className="text-white font-onset font-semibold text-2xl  ">
            Login
          </h2>
          <p className="text-gray-400 font-onset font-normal text-base">
            Login to oversee all restaurants, manage users and control platforms
            wide setting with full access
          </p>
          <div className="mb-5">
            <form action="login">
              <label
                className="text-white font-normal font-onset"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-cyan-950 text-white text-sm block mb-2 font-onset m-4 p-4 rounded-md "
                type="text"
                name="Email"
                id="email"
                placeholder="Email address"
              />
              <label
                className="text-white font-normal font-onset"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-cyan-950 text-white text-sm block mb-2 font-onset m-4 p-4 rounded-md "
                type="password"
                name="password"
                placeholder="Password"
              />
              <button className="bg-rose-400 text-white m-4 p-4 rounded-md">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
