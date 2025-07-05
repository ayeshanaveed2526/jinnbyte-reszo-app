import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const loginEmail = "ayesha@gmail.com";
  const loginPassword = "12345678";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === loginEmail && password === loginPassword) {
      setMessage("Login successful!");
      setTimeout(() => navigate('/Dashboard'), 1000); // Redirect after 1s
    } else {
      setMessage("Invalid email or password");
    }
  };
  

  return (
    <div className="bg-slate-950 flex flex-row justify-center items-center h-screen">
      <div className="w-1/2 h-screen flex justify-center items-center">
        <img
          src="image 6.png"
          alt="image not found"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="w-1/2 h-screen flex flex-col gap-8 justify-center items-center">
        <div className="w-1/2 flex flex-col gap-16">
          <div>
            <img src="Frame 1171274783.png" alt="image not found" />
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-onset font-semibold text-2xl  ">
                Login
              </h2>
              <p className="text-gray-400 font-onset font-normal text-base">
                Login to oversee all restaurants, manage users and control
                platforms wide setting with full access
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <label
                      className="text-white font-normal font-onset"
                      htmlFor="email"
                    >
                      Email
                      <span className="text-[#FF5655] size-1 font-bold">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      className="bg-[#1B2D47] text-white text-sm block mb-2 font-onset px-4 py-3 rounded-md w-full  "
                      type="text"
                      name="Email"
                      id="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <label
                      className="text-white font-normal font-onset"
                      htmlFor="password"
                    >
                      Password
                      <span className="text-[#FF5655] size-1 font-bold">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      className="bg-[#1B2D47] text-white text-sm block mb-2 font-onset px-4 py-3 pr-10 rounded-md w-full"
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-[#B04759] hover:bg-rose-500 text-white p-2.5 rounded-md w-full">
                Login
              </button>
              {message && (
                <p className={`mt-3 text-sm ${message === 'Login successful!' ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
