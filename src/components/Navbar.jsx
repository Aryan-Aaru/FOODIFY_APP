// import { Link } from "react-router-dom";
// import Logo from '../assets/FinalFoodify.png';


// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
//       <img
//         // src="\src\assets\logo.jpeg"
//         src={Logo}
//         alt="Foodify Logo"
//         className="h-10 w-auto"
//       />

//       <div className="flex gap-6 items-center">
//         <Link to="/login" className=" hover:bg-[#fdecec] text-[#ef4444] rounded px-4 py-2 font-medium">
//           Login
//         </Link>
//         <Link
//           to="/signup"
//           className="bg-[#ef4444] hover:text-black text-white px-4 py-2 rounded"
//         >
//           Sign Up
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import FinalFoodify from "../assets/FinalFoodify.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={FinalFoodify} alt="Foodify Logo" className="h-10" />

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

export default Navbar;
