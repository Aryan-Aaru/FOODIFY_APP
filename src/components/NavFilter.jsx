

import FoodifyLogo from "../assets/FinalFoodify.png";
import { IoIosSearch, IoMdBasket } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaRegMoon, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavFilter = () => {
  const [theme, setTheme] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchKey = (e) => {
    if ((e.key === "Enter" ||  e.type === "click") && search.trim()) {
      navigate(`/filter?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 shadow ${
        theme ? "bg-black text-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        
        <img
          src={FoodifyLogo}
          alt="logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="flex items-center gap-3 flex-1 max-w-xl bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <IoIosSearch className="text-xl text-red-500 cursor-pointer" onClick={handleSearchKey}/>

          <input
            type="text"
            placeholder="Search food or restaurant..."
            className="flex-1 bg-transparent focus:outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchKey}
          />

          {search && (
            <RxCross1
              className="cursor-pointer hover:text-red-500"
              onClick={() => setSearch("")}
            />
          )}
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => setTheme(!theme)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FaRegMoon />
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="p-2 rounded-full hover:bg-gray-100 text-lg"
          >
            <IoMdBasket />
          </button>

          <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100" 
          onClick={() => {navigate('/profile')}}>
            <FaUser />
            <span className="text-sm font-medium hidden sm:block">
              Profile
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavFilter;
