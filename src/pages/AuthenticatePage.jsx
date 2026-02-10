

import Image from "../assets/Image.jpg";
import { NavLink, Outlet } from "react-router-dom";

const AuthenticatePage = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">

      <div className="hidden md:flex relative">
        <img
          src={Image}
          alt="Food"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/40 text-white text-center px-8">
          <div>
            <h1 className="text-5xl font-bold mb-3">Foodify</h1>
            <p className="text-lg opacity-90">
              Delicious food delivered fast 🚀
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-orange-50">

        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">

          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Sign in to continue
          </p>

          <div className="flex bg-gray-100 rounded-lg p-1 mb-4 text-sm">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `w-1/2 text-center py-1.5 rounded-md ${
                  isActive ? "bg-white shadow text-red-500" : "text-gray-500"
                }`
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `w-1/2 text-center py-1.5 rounded-md ${
                  isActive ? "bg-white shadow text-red-500" : "text-gray-500"
                }`
              }
            >
              Sign Up
            </NavLink>
          </div>

          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthenticatePage;
