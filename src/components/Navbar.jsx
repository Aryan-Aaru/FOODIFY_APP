import { Link } from "react-router-dom";
import Logo from '../assets/FinalFoodify.png';


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
      <img
        // src="\src\assets\logo.jpeg"
        src={Logo}
        alt="Foodify Logo"
        className="h-10 w-auto"
      />

      <div className="flex gap-6 items-center">
        <Link to="/login" className=" hover:bg-[#fdecec] text-[#ef4444] rounded px-4 py-2 font-medium">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-[#ef4444] hover:text-black text-white px-4 py-2 rounded"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
