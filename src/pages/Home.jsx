// import FeatureCard from "../components/FeatureCard";
// import Navbar from "../components/Navbar";
// import Biryani from "../assets/Biryani.avif";
// import Cake from "../assets/Cake.avif";
// import Pizza from "../assets/Pizza.avif";
// import Burger from "../assets/Burger.avif";
// import Shawarma from "../assets/Shawarma.avif";
// import Rolls from "../assets/Rolls.avif";
// import Dosa from "../assets/Dosa.avif";
// import Pastry from "../assets/Pastry.avif";
// import Momo from "../assets/Momo.avif";
// import Idli from "../assets/Idli.avif";
// import Shake from "../assets/Shake.avif";
// import Pasta from "../assets/Pasta.avif";
// const Home = () => {

//   let food_option = [Biryani, Cake, Pizza, Burger, Shawarma, Rolls, Dosa, Pastry, Momo, Idli, Shake, Pasta]
//   return (
//     // <div className="bg-orange-50 min-h-screen flex flex-col items-center py-16">
//     //   <h2 className="text-4xl font-bold text-gray-800 mb-10">
//     //     Food Delivery Made Easy
//     //   </h2>

//     //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
//     //     <FeatureCard
//     //       title="Fast Delivery"
//     //       desc="Get your food delivered in under 30 minutes"
//     //     />
//     //     <FeatureCard
//     //       title="Hygienic Food"
//     //       desc="Prepared with highest safety standards"
//     //     />
//     //     <FeatureCard
//     //       title="Offers & Discounts"
//     //       desc="Up to 60% OFF on top restaurants"
//     //     />
//     //   </div>
//     // </div>
//     <section className=" ">
//       <div className="fixed w-full">
//         <Navbar />
//       </div>
//       <section className="h-[95vh] flex flex-col justify-center items-center">
//           <h2 className="text-6xl  text-center font-bold text-[#ef4444] mb-10">
//             Order the Best food.<br />  Discover best restaurants. Foodify it!
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
//             <FeatureCard
//               title="Fast Delivery"
//               desc="Get your food delivered in under 30 minutes"
//             />
//             <FeatureCard
//               title="Hygienic Food"
//               desc="Prepared with highest safety standards"
//             />
//             <FeatureCard
//               title="Offers & Discounts"
//               desc="Up to 60% OFF on top restaurants"
//             />
//           </div>
//       </section>
//       <section className=" w-full h-[70vh] flex justify-center items-center">
//         <div className="w-[80vw]  flex flex-col gap-8">
//           <div className="text-3xl font-bold">
//             Order our best food options
//           </div>
//           <div className=" grid grid-cols-6 gap-3 grid-rows-2 flex-wrap  ">
//               {
//                 food_option.map((item, index) => {
//                   return <img key={index} src={item} alt={`${item} Picture`}  className="h-[180px] w-[180px]"/>
//                 })
//               }
//           </div>
    
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Home;

// import Navbar from "../components/Navbar";
// import FeatureCard from "../components/FeatureCard";
// import Biryani from "../assets/Biryani.avif";
// import Cake from "../assets/Cake.avif";
// import Pizza from "../assets/Pizza.avif";
// import Burger from "../assets/Burger.avif";
// import Shawarma from "../assets/Shawarma.avif";
// import Rolls from "../assets/Rolls.avif";
// import Dosa from "../assets/Dosa.avif";
// import Pastry from "../assets/Pastry.avif";
// import Momo from "../assets/Momo.avif";
// import Idli from "../assets/Idli.avif";
// import Shake from "../assets/Shake.avif";
// import Pasta from "../assets/Pasta.avif";
// import { useState } from "react";
// import { getFoodbySearch } from "../apis/FoodAPI";
// import {
//   Bike,
//   ShieldCheck,
//   Tag
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Home = () => { 
//   const navigate = useNavigate();
//   const foodOptions = [
//     { name: "Biryani", img: Biryani },
//     { name: "Cake", img: Cake },
//     { name: "Pizza", img: Pizza },
//     { name: "Burger", img: Burger },
//     { name: "Shawarma", img: Shawarma },
//     { name: "Rolls", img: Rolls },
//     { name: "Dosa", img: Dosa },
//     { name: "Pastry", img: Pastry },
//     { name: "Momo", img: Momo },
//     { name: "Idli", img: Idli },
//     { name: "Shake", img: Shake },
//     { name: "Pasta", img: Pasta },
//   ];

//   let [search, setSearch] = useState("");

//   let handleSubmit = () => {
//     getFoodbySearch(search)
//     .then((res) => {
//       navigate("/foodpage")
//     })
//     .catch(err =>{
//       alert(err.message)
//     })

//   }
    

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       {/* HERO */}
//       <section className="h-[95vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-red-50 to-orange-50">
//         <h1 className="text-5xl md:text-6xl font-bold text-[#ef4444] mb-6">
//           Order the Best Food <br />
//           Discover Best Restaurants
//         </h1>

//         <p className="text-gray-600 text-lg mb-8">
//           Fast delivery • Hygienic food • Best offers
//         </p>

//         {/* SEARCH BAR */}
//         <div className="flex w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
//           <input
//             type="text"
//             placeholder="Search for restaurants or dishes..."
//             className="flex-1 px-5 py-3 outline-none" 
//             value={search}
//             onChange={(e) => {setSearch(e.target.value)}}
//           />
//           <button className="bg-[#ef4444] cursor-pointer hover:bg-red-600 transition text-white px-6" onClick={handleSubmit}>
//             Search
//           </button>
//         </div>

//         {/* FEATURES */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
//           <FeatureCard
//             icon={Bike}
//             title="Fast Delivery"
//             desc="Delivered in under 30 minutes"
//           />
//           <FeatureCard
//             icon={ShieldCheck}
//             title="Hygienic Food"
//             desc="Prepared with safety standards"
//           />
//           <FeatureCard
//             icon={Tag}
//             title="Best Offers"
//             desc="Up to 60% OFF on top restaurants"
//           />
//         </div>
//       </section>

//       {/* FOOD CATEGORIES */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-10">
//             Popular Food Categories
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
//             {foodOptions.map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transition"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="h-28 w-28 object-contain group-hover:scale-110 transition"
//                 />

//                 <p className="mt-3 font-semibold text-gray-800">
//                   {item.name}
//                 </p>

//                 <span className="text-sm text-yellow-500 mt-1">
//                   ⭐ 4.5
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Biryani from "../assets/Biryani.avif";
import Cake from "../assets/Cake.avif";
import Pizza from "../assets/Pizza.avif";
import Burger from "../assets/Burger.avif";
import Shawarma from "../assets/Shawarma.avif";
import Rolls from "../assets/Rolls.avif";
import Dosa from "../assets/Dosa.avif";
import Pastry from "../assets/Pastry.avif";
import Momo from "../assets/Momo.avif";
import Idli from "../assets/Idli.avif";
import Shake from "../assets/Shake.avif";
import Pasta from "../assets/Pasta.avif";
import { useState } from "react";
import { getFoodbySearch } from "../apis/FoodAPI";
import {
  Bike,
  ShieldCheck,
  Tag
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const foodOptions = [
    { name: "Biryani", img: Biryani },
    { name: "Cake", img: Cake },
    { name: "Pizza", img: Pizza },
    { name: "Burger", img: Burger },
    { name: "Shawarma", img: Shawarma },
    { name: "Rolls", img: Rolls },
    { name: "Dosa", img: Dosa },
    { name: "Pastry", img: Pastry },
    { name: "Momo", img: Momo },
    { name: "Idli", img: Idli },
    { name: "Shake", img: Shake },
    { name: "Pasta", img: Pasta },
  ];


  const handleSubmit = () => {
    if (!search.trim()) return;
    navigate(`/filter?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="h-[95vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-red-50 to-orange-50">
        <h1 className="text-5xl md:text-6xl font-bold text-[#ef4444] mb-6">
          Order the Best Food <br />
          Discover Best Restaurants
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Fast delivery • Hygienic food • Best offers
        </p>

        {/* SEARCH BAR */}
        <div className="flex w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
          <input
            type="text"
            placeholder="Search for restaurants or dishes..."
            className="flex-1 px-5 py-3 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-[#ef4444] hover:bg-red-600 transition text-white px-6"
          >
            Search
          </button>
        </div>

        {/* rest of your Home UI stays SAME */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          <FeatureCard
            icon={Bike}
            title="Fast Delivery"
            desc="Delivered in under 30 minutes"
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Hygienic Food"
            desc="Prepared with safety standards"
          />
          <FeatureCard
            icon={Tag}
            title="Best Offers"
            desc="Up to 60% OFF on top restaurants"
          />
        </div>
      </section>

      {/* FOOD CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Popular Food Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {foodOptions.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-28 w-28 object-contain group-hover:scale-110 transition"
                />

                <p className="mt-3 font-semibold text-gray-800">
                  {item.name}
                </p>

                <span className="text-sm text-yellow-500 mt-1">
                  ⭐ 4.5
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
