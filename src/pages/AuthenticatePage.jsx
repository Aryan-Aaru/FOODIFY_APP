
// import { useState } from 'react';
// import Image from '../assets/Image.jpg';
// import Login from './Login';
// import { useLocation } from 'react-router-dom';
// import Signup from './Signup';
// import { NavLink, Outlet } from "react-router-dom";

// const AuthenticatePage = () => {

//     // let [Active, setActive] = useState('Login');
//     // const location = useLocation();

//     return (
//         <section className="w-full flex justify-center items-center min-h-screen">
//             <div className='w-[70vw] flex gap-4 flex-wrap justify-between'>
//                 <div className='flex gap-6 w-[50%] flex-col items-center'>
//                     <img src={Image} alt="" className=' overflow-hidden h-[50vh] w-[80%]' />
//                     <div>
//                         <h1 className='text-3xl font-bold text-center'>Delicious food, <br /> delivared.</h1>
//                         <p className='text-sm text-center'>
//                             Order from top local restaurants and get your cravings <br /> delivered hot & fresh to your doorstep.
//                         </p>
//                     </div>
                    
//                 </div>
//                 <div className='w-[40%] flex flex-col gap-6'>
//                     <div className='flex flex-col gap-2'>
//                         <h1 className='text-3xl font-bold'>Welcome Back</h1>
//                         <p className='text-sm'>Sign in to find your favoriate restaurants.</p>
//                     </div>
//                     <div>
//                         <div className='flex  justify-center bg-[#f3f4f6] gap-4 font-bold py-1 w-full rounded-xl'>
//                         <NavLink
//                             to="/login"
//                             className={({ isActive }) =>
//                             `py-1 w-[47%]  text-center  ${
//                                 isActive ? "bg-white text-[#ef4444]" : ""
//                             }`
//                             }
//                         >
//                             Login
//                         </NavLink>

//                         <NavLink
//                             to="/signup"
//                             className={({ isActive }) =>
//                             `py-1 w-[47%]  text-center ${
//                                 isActive ? "bg-white text-[#ef4444]" : ""
//                             }`
//                             }
//                         >
//                             Sign Up
//                         </NavLink>
//                         </div>
                        
//                         <Outlet />
//                     </div>
//                 </div>
//             </div>
             
//         </section>
//     )
// }

// export default AuthenticatePage;import Image from "../assets/Image.jpg";

// import { NavLink, Outlet } from "react-router-dom";
// import Image from '../assets/Image.jpg';

// const AuthenticatePage = () => {
//   return (
//     <section className="h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">

//       {/* ================= LEFT IMAGE ================= */}
//       <div className="hidden md:block relative h-full">
//         <img
//           src={Image}
//           alt="Food"
//           className="absolute inset-0 w-full h-full object-cover "
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center px-8">
//           <div>
//             <h1 className="text-5xl font-bold mb-4">Foodify</h1>
//             <p className="text-lg opacity-90">
//               Delicious food delivered fast 🚀
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ================= RIGHT AUTH SIDE ================= */}
//       <div className="h-full flex items-center justify-center bg-orange-50">

//         <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

//           {/* Header */}
//           <h2 className="text-2xl font-bold text-gray-800 mb-1">
//             Welcome Back
//           </h2>
//           <p className="text-sm text-gray-500 mb-6">
//             Sign in to continue
//           </p>

//           {/* Tabs */}
//           <div className="flex bg-gray-100 rounded-lg p-1 mb-6 text-sm">
//             <NavLink
//               to="/login"
//               className={({ isActive }) =>
//                 `w-1/2 text-center py-2 rounded-md font-medium transition ${
//                   isActive
//                     ? "bg-white shadow text-red-500"
//                     : "text-gray-500"
//                 }`
//               }
//             >
//               Login
//             </NavLink>

//             <NavLink
//               to="/signup"
//               className={({ isActive }) =>
//                 `w-1/2 text-center py-2 rounded-md font-medium transition ${
//                   isActive
//                     ? "bg-white shadow text-red-500"
//                     : "text-gray-500"
//                 }`
//               }
//             >
//               Sign Up
//             </NavLink>
//           </div>

//           {/* Login / Signup Form */}
//           <Outlet />

//         </div>
//       </div>

//     </section>
//   );
// };

// export default AuthenticatePage;

import Image from "../assets/Image.jpg";
import { NavLink, Outlet } from "react-router-dom";

const AuthenticatePage = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
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

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-orange-50">

        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">

          {/* HEADER */}
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Sign in to continue
          </p>

          {/* TABS */}
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
