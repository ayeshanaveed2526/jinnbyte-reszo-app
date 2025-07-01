import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col justify-around h-screen bg-slate-950 object-cover ">
      <div className=" flex  w-1/2 h-screen">
        <img
          className="w-full h-full object-cover opacity-50"
          src="image 6.png"
          alt="image not found"
        />  

        <div className="flex gap-8 w-1/2 flex-col justify-center items-center w-full h-full h-screen ">
          <img src="Frame 1171274783.png" alt="image not found" />
          <h2 className="text-white font-onset font-semibold text-2xl  ">
            Login
          </h2>
          <p className="text-gray-400 font-onset font-normal text-base text-center">
            Login to oversee all restaurants, manage users and control platforms
            wide setting with full access
          </p>
          <div className="mb-5">
            <form action="login" className="flex flex-col justify-center ">
              <label
                className="text-white font-normal font-onset"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-[#1B2D47] text-white text-sm block mb-2 font-onset m-4 p-2.5 rounded-md w-full "
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
                className="bg-[#1B2D47] text-white text-sm block mb-2 font-onset m-4 p-2.5 rounded-md w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button className="bg-[#B04759] text-white m-3 p-2.5 rounded-md w-full">
                Login
              </button>
            </form>
          </div>
       </div>
      </div>
    </div>
  );
}
