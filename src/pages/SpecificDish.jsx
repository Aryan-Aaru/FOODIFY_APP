// import AddToCart from "../components/AddToCart";
// import NavFilter from "../components/NavFilter"
// import { IoMdHeartEmpty } from "react-icons/io";
// import pizza from '../assets/pizzaSlice.jpg';
// import { useEffect, useState } from "react";
// import { getFoodbyId } from "../apis/FoodAPI";
// // import ItemCardFilter from "../components/ItemCardFilter";
// import { useParams } from "react-router-dom";


// const SpecificDish = () => {
//     const { restaurantId, foodId } = useParams();
//     let [dishCnt, setDistCnt] = useState(1);
//     const [food, setFood] = useState(null);
//     useEffect(() => {
    
//         getFoodbyId(restaurantId, foodId)
//         .then(res => {
//             console.log("API Response:", res.data);
//             if (res.success){
//                  setFood(res.data);
//             } // set the state
//             else alert(res.message);
//         })
//         .catch(err => {
//             // console.log(err);
//             alert(err.message);
//         });
//     }, []);
  
//     if (!food) {
//     return (
//         <section className="bg-[#f8f9fa] min-h-screen flex items-center justify-center">
//             <p>Loading...</p>
//         </section>
//     );
// }


//     return (
//         <section className="bg-[#f8f9fa] min-h-screen">
//             <NavFilter />
//             <section className="flex-wrap border-red-600 justify-center w-full p-8 flex items-start gap-15">
                
//                 <section className=" h-[500px] w-[650px] flex flex-col gap-4 border-blue-500">
//                     <div className="h-[75%] border border-red-600 relative overflow-hidden rounded-3xl">
//                         <div className="absolute top-4 right-4 rounded-full p-2 bg-[#5052518d] text-white">
//                             <IoMdHeartEmpty />
//                         </div>
//                         <img src={pizza} alt="" className="h-full w-full"/>
//                     </div>
//                     <div className="flex h-[15%] gap-3">
//                         <div className=" rounded-xl h-full w-[20%] overflow-hidden">
//                             <img src={pizza} alt="" className="h-full w-full"/>
//                         </div>
//                         <div className=" rounded-xl h-full w-[20%] overflow-hidden">
//                             <img src={pizza} alt="" className="h-full w-full"/>
//                         </div>

//                     </div>
//                 </section>
//                 <section className="rounded-xl min-w-[30%] max-w-[40%] p-8 flex flex-col gap-3 bg-white">
                    
//                     <AddToCart food = {food}  cnt = {dishCnt} inc = {() => {setDistCnt(dishCnt+1);}} dec = {() => {setDistCnt((dishCnt <= 1) ? dishCnt : dishCnt-1)}} />
//                 </section>
//             </section>
//             <section>
//                 {/* <ItemCardFilter /> */}
//             </section>
//         </section>
//     )
// }

// export default SpecificDish;

import AddToCart from "../components/AddToCart";
import NavFilter from "../components/NavFilter";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { getFoodbyId } from "../apis/FoodAPI";
import { useParams } from "react-router-dom";
import fallbackImg from "../assets/pizzaSlice.jpg";

const SpecificDish = () => {
  const { restaurantId, foodId } = useParams();

  const [food, setFood] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getFoodbyId(restaurantId, foodId)
      .then((res) => {
        if (res.success) setFood(res.data);
      })
      .catch((err) => alert(err.message));
  }, [restaurantId, foodId]);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      <NavFilter />

      {/* ================= CONTAINER ================= */}
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-8">

        {/* ================================================= */}
        {/* 🔥 TOP SECTION (Compact — under 100vh) */}
        {/* ================================================= */}
        <div className="grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl shadow-lg p-6">

          {/* ================= IMAGE ================= */}
          <div className="relative">
            <img
              src={food.food_image || fallbackImg}
              alt={food.food_name}
              className="w-full h-[260px] object-cover rounded-xl"
              onError={(e) => (e.target.src = fallbackImg)}
            />

            {/* heart icon */}
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500">
              <IoMdHeartEmpty />
            </button>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-start gap-4">

            <h1 className="text-3xl font-bold text-gray-800">
              {food.food_name}
            </h1>

            <p className="text-gray-500 text-sm">
              {food.food_description}
            </p>

            {/* meta info */}
            <div className="flex gap-4 text-sm text-gray-600">
              <span>⭐ {food.food_rating}</span>
              <span>⏱ {food.timeTake} mins</span>
              <span className="capitalize">{food.food_category}</span>
            </div>

            <h2 className="text-2xl font-bold text-red-500">
              ₹ {food.food_price}
            </h2>

            {/* Add To Cart Component */}
            <AddToCart
              food={food}
              cnt={count}
              inc={() => setCount(count + 1)}
              dec={() => setCount(count > 1 ? count - 1 : 1)}
            />
          </div>
          </div>
    
         <div>
           <h2 className="text-xl font-bold mb-4">
             You may also like
           </h2>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg p-3 cursor-pointer transition"
              >
                <img
                  src={fallbackImg}
                  className="h-28 w-full object-cover rounded-lg mb-2"
                />
                <p className="text-sm font-semibold">Similar Dish</p>
                <p className="text-xs text-gray-500">₹ 120</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecificDish;


// import AddToCart from "../components/AddToCart";
// import NavFilter from "../components/NavFilter";
// import { IoMdHeartEmpty } from "react-icons/io";
// import fallbackImg from "../assets/pizzaSlice.jpg";
// import { useEffect, useState } from "react";
// import { getFoodbyId } from "../apis/FoodAPI";
// import { useParams } from "react-router-dom";

// const SpecificDish = () => {
//   const { restaurantId, foodId } = useParams();

//   const [count, setCount] = useState(1);
//   const [food, setFood] = useState(null);

//   useEffect(() => {
//     getFoodbyId(restaurantId, foodId)
//       .then((res) => {
//         if (res.success) setFood(res.data);
//         else alert(res.message);
//       })
//       .catch((err) => alert(err.message));
//   }, [restaurantId, foodId]);

//   if (!food) {
//     return (
//       <section className="min-h-screen flex items-center justify-center">
//         Loading...
//       </section>
//     );
//   }

//   return (
//     <section className="bg-gray-50 min-h-screen">
//       <NavFilter />

//       {/* MAIN CONTAINER */}
//       <div className="max-w-6xl mx-auto p-6">

//         {/* CARD (fits inside 100vh nicely) */}
        

//         {/* ================= BELOW SPACE FOR OTHER ITEMS ================= */}
//         <div className="mt-10">
//           <h2 className="text-xl font-bold">You may also like</h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecificDish;
