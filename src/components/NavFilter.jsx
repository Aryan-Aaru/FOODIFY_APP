// import FoodifyLogo from '../assets/FinalFoodify.png';
// import { IoIosSearch, IoMdBasket } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";
// import { FaRegMoon, FaUser } from "react-icons/fa";
// import { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';

// const NavFilter = () => {
    
//     let [theme, setTheme] = useState(false);
//     let [search, setSearch] = useState('')
//     const navigate = useNavigate();
//     return ( 
//     <section className={`flex ${(theme) ? "bg-black": "bg-white"} justify-between px-10 py-4 items-center `}>
//         <section className='h-full cursor-pointer' onClick={() => console.log("move to home page")}>
//             <img className='h-10' src={FoodifyLogo} alt="fodify_Logo" title='foodifyLogo'/>
//         </section>
//         <section className='flex w-1/2 gap-2 items-center text-lg p-2 rounded-2xl bg-[#f8f9fa] shadow'>
//             <div className='text-[#ea2a33] text-2xl cursor-pointer hover:bg-[#fdecec] rounded-full p-1' onClick={() => {console.log(`Search ${search} item`)}}>
//                 <IoIosSearch />
//             </div>
//             <div className='flex items-center w-full'>
//                 <input className='w-full focus:outline-none' type="text" placeholder='Enter food name or restuarent name' value={search} onChange={(e) => {setSearch(e.target.value)}} />
//                 {
//                     search &&
//                     <RxCross1 className='hover:text-[#ea2a33]' onClick={() => {setSearch('');console.log('Clear the item')}}/>
//                 }
                
//             </div>
            
//         </section>
//         <section className="flex list-none gap-7 text-lg w-[20%] items-center justify-end">
//             <li className={`cursor-pointer rounded-full hover:bg-[#fdecec] hover:text-[#ea2a33] ${(theme) ? 'text-white' : 'text-black'} h-full p-2`} onClick={() => {setTheme(!theme);console.log("change the theme")}}><FaRegMoon /></li>
//             <li className={`cursor-pointer h-full text-lg rounded-full hover:bg-[#fdecec] ${(theme) ? 'text-white' : 'text-black'} hover:text-[#ea2a33] p-2 `} onClick={() => {navigate('/cart')}}><IoMdBasket /></li>
//             <li className={`cursor-pointer h-full flex gap-2 px-2 py-1 rounded-full  hover:bg-[#fdecec] hover:text-[#ea2a33] items-center ${(theme) ? 'text-white' : 'text-black'}`} ><FaUser /><p>Profile</p></li>
//         </section>
//     </section>
//     )
// }
// export default NavFilter;

// import FoodifyLogo from "../assets/FinalFoodify.png";
// import { IoIosSearch, IoMdBasket } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";
// import { FaRegMoon, FaUser } from "react-icons/fa";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const NavFilter = () => {
//   const [theme, setTheme] = useState(false);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   return (
//     <header
//       className={`
//         sticky top-0 z-50
//         border-b
//         ${theme ? "bg-black text-white" : "bg-white"}
//       `}
//     >
//       {/* CONTAINER */}
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

//         {/* LOGO */}
//         <img
//           src={FoodifyLogo}
//           alt="logo"
//           className="h-10 cursor-pointer"
//           onClick={() => navigate("/")}
//         />

//         {/* SEARCH BAR */}
//         <div
//           className="
//             flex
//             items-center
//             gap-3
//             flex-1
//             max-w-xl
//             bg-gray-100
//             rounded-full
//             px-4
//             py-2
//             shadow-sm
//           "
//         >
//           <IoIosSearch className="text-xl text-red-500" />

//           <input
//             type="text"
//             placeholder="Search food or restaurant..."
//             className="flex-1 bg-transparent focus:outline-none text-sm"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           {search && (
//             <RxCross1
//               className="cursor-pointer hover:text-red-500"
//               onClick={() => setSearch("")}
//             />
//           )}
//         </div>

//         {/* RIGHT ICONS */}
//         <div className="flex items-center gap-5">

//           <button
//             onClick={() => setTheme(!theme)}
//             className="p-2 rounded-full hover:bg-gray-100"
//           >
//             <FaRegMoon />
//           </button>

//           <button
//             onClick={() => navigate("/cart")}
//             className="p-2 rounded-full hover:bg-gray-100 text-lg"
//           >
//             <IoMdBasket />
//           </button>

//           <button
//             className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100"
//           >
//             <FaUser />
//             <span className="text-sm font-medium hidden sm:block">
//               Profile
//             </span>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavFilter;


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
        
        {/* LOGO */}
        <img
          src={FoodifyLogo}
          alt="logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* SEARCH */}
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

        {/* RIGHT ICONS */}
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
