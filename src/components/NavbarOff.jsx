
import { Link } from "react-router-dom";
import FinalFoodify from "../assets/FinalFoodify.png";
import { IoIosSearch, IoMdBasket } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
const NavbarOff = () => {
  // const [search, setSearch] = useState("");

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() === "") return;
    navigate(`/filter?search=${encodeURIComponent(search.trim())}`);
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={FinalFoodify} alt="Foodify Logo" className="h-10" />

        <div
          className="
            flex
            items-center
            gap-3
            flex-1
            max-w-xl
            bg-gray-100
            rounded-full
            px-4
            py-2
            shadow-sm
          "

        >
          <IoIosSearch className="text-xl  text-red-500  hover:rounded-full cursor-pointer" onClick={handleSearch}/>
        <input
            type="text"
            placeholder="Search food or restaurant..."
            className="flex-1 bg-transparent focus:outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <RxCross1
              className="cursor-pointer hover:text-red-500"
              onClick={() => setSearch('')}
            />
          )}
        </div>
        

        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="text-gray-600 hover:text-[#ef4444] font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#ef4444] text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOff;
