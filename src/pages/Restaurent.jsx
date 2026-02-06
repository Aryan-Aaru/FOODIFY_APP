// import RestaurentNav from "../components/RestaurentNav";
// import Image from "../assets/hq720.jpg";
// import { FaRegHeart } from "react-icons/fa";
// import { IoMdShare } from "react-icons/io";
// import { useEffect, useState } from "react";
// import RestaurentItems from "../components/RestaurentItems";
// import NavFilter from "../components/NavFilter";
// import { useParams } from "react-router-dom";
// import { getByRestaurentById, getFoodsByRestaurant  } from "../apis/RestaurentAPI";
// const Restaurent = () => {

//     let obj = ['All items' ,'Popular Items', 'Veg Items', 'Non-veg Items', 'Gluten-Free Items']

//     // let [selected, setSelected] = useState('All items');

//     // let [item, setItem] = useState(null);

//     // let [loading, setLoading] = useState(false);
//     const {id} = useParams();
//     const [selected, setSelected] = useState('All items');

//     const [item, setItem] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const [foods, setFoods] = useState([]);
//     const [foodLoading, setFoodLoading] = useState(false);
//     console.log(id+" id ");

//     const [page, setPage] = useState(0);
//     const [totalPages, setTotalPages] = useState(0);

//     useEffect(() => {
//         setLoading(true);

//         getByRestaurentById(id)
//             .then((res) => {
//             setItem(res.data);
//             })
//             .catch((err) => {
//             alert(err.message);
//             })
//             .finally(() => {
//             setLoading(false);
//             });
//         }, [id]);
    
//     const restaurantId = item?.restaurant_id;
//     const menuId = item?.menu?.menu_id;

//     const getFoodParams = () => {
//         switch (selected) {
//         case 'Popular Items':
//             return { popular: true };

//         case 'Veg Items':
//             return { food_category: 'veg' };

//         case 'Non-veg Items':
//             return { food_category: 'non_veg' };

//         case 'Gluten-Free Items':
//             return { food_category: 'gluten_free' };

//         default:
//             return { popular: false };
//         }
//     };
    
//     useEffect(() => {
//         if (!restaurantId || !menuId) return;

//         setFoodLoading(true);
//         setFoods([]);

//         getFoodsByRestaurant(restaurantId, menuId, {
//         page: page,
//         size: 6,
//         ...getFoodParams()
//         })
//         .then((res) => {
//             // setFoods(res.data.data.content); // Page<Food>
//             setFoods(res.data.content);
//             setTotalPages(res.data.totalPages);
//         })
//         .catch((err) => console.error(err))
//         .finally(() => setFoodLoading(false));

//     }, [restaurantId, menuId, selected, page]);

//     if (loading) {
//             return (
//                 <section className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
//                 <p className="text-lg font-bold animate-pulse text-gray-600">
//                     Loading restaurant...
//                 </p>
//                 </section>
//             );
//             }
    

//     if (!item) {
//         return (
//             <section className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
//             <p className="text-lg font-bold text-red-500">
//                 Restaurant not found
//             </p>
//             </section>
//         );
//         }

//     return (
    
//         <section className="bg-[#f3f4f6] min-h-screen">
            
//             {/* <RestaurentNav/> */}
//             <NavFilter />
//             <section className=" p-6 flex w-full flex-col gap-4">
//                 <div className="h-[30vh] border-red-400 relative  rounded-xl overflow-hidden">
//                     <img src={item.restaurent_picture || Image} alt="" className="h-full w-full" onError={(e) => {
//                         e.target.onerror = null; // prevent infinite loop if fallback fails
//                         e.target.src = Image;      // fallback to default image
//                       }}/>
//                     <div className="absolute bg-[#3a38384c] top-0 left-0 border w-full h-full flex justify-between">
//                         <div className="h-full p-6  flex items-end">
//                             <div className=" flex flex-col gap-1 border-white">
//                                 <h1 className="text-3xl font-bold text-white">{item?.restaurent_name}</h1>
//                                 <p className="text-white text-sm">{item?.restaurent_brand}</p>
//                                 <div className="flex flex-wrap gap-4">
//                                     <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">Excellent (500+)</span>
//                                     <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">20-30 mins</span>
//                                     <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">delivary</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className=" border-white flex flex-col justify-between  p-4 ">
//                             <div className="flex gap-4 items-center">
//                                 <div className="border rounded-full p-2 cursor-pointer hover:text-[#ea2a33] hover:bg-[#fdecec] bg-white"><FaRegHeart /></div>
//                                 <div className="border p-2 rounded-full cursor-pointer hover:text-[#ea2a33] hover:bg-[#fdecec] bg-white"><IoMdShare /></div>
//                             </div>
//                             <div className="p-2 rounded-[10px] text-sm font-bold bg-[#ea2a33] text-white">
//                                 More Info
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex gap-4 pt-2">
//                     <div className="w-[20vw] ">
//                         <h1 className="font-bold text-xl mb-2">Menu</h1>
//                         <div className="flex flex-col gap-2">
//                             {
//                                 obj.map((item, index) => {
//                                     return <li key={index} className={` cursor-pointer ${(selected === item) ? 'text-white bg-[#ea2a33]' : 'text-[#8a909c] shadow hover:text-[#ea2a33] hover:bg-[#fdecec]'} rounded-xl px-4 py-2 font-bold list-none`} onClick={() => {
//                                         setSelected(item)
//                                     }}>{item}</li>
//                                 })
//                             }
//                         </div>
                        
//                     </div>
//                     <div className="w-full ">

//                         <RestaurentItems title={selected} foods={foods} restaurantId={restaurantId} loading={foodLoading} page={page}
//   totalPages={totalPages}
//   onPageChange={setPage} />
//                     </div>
//                 </div>
//             </section>
//         </section>
//     )
// }
// export default Restaurent;


// import NavFilter from "../components/NavFilter";
// import Image from "../assets/hq720.jpg";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import RestaurentItems from "../components/RestaurentItems";
// import {
//   getByRestaurentById,
//   getFoodsByRestaurant,
// } from "../apis/RestaurentAPI";

// const Restaurent = () => {
//   const { id } = useParams();

//   const categories = [
//     "All items",
//     "Popular",
//     "Veg",
//     "Non-veg",
//     "Gluten-Free",
//   ];

//   const [selected, setSelected] = useState("All items");
//   const [item, setItem] = useState(null);
//   const [foods, setFoods] = useState([]);

//   const [page, setPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);

//   const [loading, setLoading] = useState(true);

//   /* ================= RESTAURANT ================= */
//   useEffect(() => {
//     getByRestaurentById(id).then((res) => {
//       setItem(res.data);
//       setLoading(false);
//     });
//   }, [id]);

//   /* ================= FILTER PARAM ================= */
//   const getParams = () => {
//     switch (selected) {
//       case "Popular":
//         return { popular: true };

//       case "Veg":
//         return { food_category: "veg" };

//       case "Non-veg":
//         return { food_category: "non_veg" };

//       case "Gluten-Free":
//         return { food_category: "gluten_free" };

//       default:
//         return {popular : false};
//     }
//   };

//   /* ================= FOODS ================= */
//   useEffect(() => {
//     if (!item?.restaurant_id || !item?.menu?.menu_id) return;

//     getFoodsByRestaurant(item.restaurant_id, item.menu.menu_id, {
//       page,
//       size: 6,
//       ...getParams(),
//     }).then((res) => {
//       setFoods(res.data.content);
//       setTotalPages(res.data.totalPages);
//     });
//   }, [item, selected, page]);

//   if (loading) return <div className="p-10">Loading...</div>;

//   return (
//     <section className="bg-gray-50 min-h-screen">
//       <NavFilter />

//       <main className="max-w-6xl mx-auto p-6 space-y-8">

//         {/* ================= BANNER ================= */}
//         {/* FIXED HEIGHT (NO VH) */}
//         <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-md">
//           <img
//             src={item.restaurent_picture || Image}
//             alt=""
//             className="w-full h-full object-cover"
//             onError={(e) => {
//                         e.target.onerror = null; // prevent infinite loop if fallback fails
//                         e.target.src = Image;      // fallback to default image
//                       }}
//           />

//           <div className="absolute inset-0 bg-black/40 flex items-end p-6 text-white">
//             <div>
//               <h1 className="text-3xl font-bold">
//                 {item.restaurent_name}
//               </h1>
//               <p className="text-sm opacity-90">
//                 {item.restaurent_brand} • {item.restaurent_address}
//               </p>
//               <p className="text-sm mt-1">
//                 🚚 ₹{item.restaurent_delivary_fee} delivery • 20-30 mins
//               </p>
//             </div>
//           </div>
//         </div>


//         {/* ================= CATEGORY TABS ================= */}
//         {/* Sticky horizontal (modern UX) */}
//         <div className="sticky top-16 bg-gray-50 z-20 py-2">
//           <div className="flex gap-3 overflow-x-auto scrollbar-hide">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => {
//                   setSelected(cat);
//                   setPage(0);
//                 }}
//                 className={`px-5 py-2 rounded-full whitespace-nowrap font-medium transition
//                   ${
//                     selected === cat
//                       ? "bg-red-500 text-white"
//                       : "bg-white shadow text-gray-600 hover:bg-red-50"
//                   }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>


//         {/* ================= FOOD LIST ================= */}
//         <RestaurentItems
//           title={`${selected} Items`}
//           foods={foods}
//           page={page}
//           totalPages={totalPages}
//           onPageChange={setPage}
//           restaurantId={item.restaurant_id}
//         />
//       </main>
//     </section>
//   );
// };

// export default Restaurent;

import NavFilter from "../components/NavFilter";
import RestaurentItems from "../components/RestaurentItems";
import Image from "../assets/hq720.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByRestaurentById, getFoodsByRestaurant } from "../apis/RestaurentAPI";

const Restaurent = () => {
  const { id } = useParams();

  const filters = [
    "All items",
    "Popular Items",
    "Veg Items",
    "Non-veg Items",
    "Gluten-Free Items",
  ];

  const [selected, setSelected] = useState("All items");
  const [item, setItem] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [foodLoading, setFoodLoading] = useState(false);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  /* ================= RESTAURANT ================= */
  useEffect(() => {
    setLoading(true);

    getByRestaurentById(id)
      .then((res) => setItem(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  /* ================= FILTER PARAMS ================= */
  const getParams = () => {
    switch (selected) {
      case "Popular Items":
        return { popular: true };
      case "Veg Items":
        return { food_category: "veg" };
      case "Non-veg Items":
        return { food_category: "non_veg" };
      case "Gluten-Free Items":
        return { food_category: "gluten_free" };
      default:
        return {popular: false};
    }
  };

  /* ================= FOODS ================= */
  useEffect(() => {
    if (!item) return;

    setFoodLoading(true);

    getFoodsByRestaurant(item.restaurant_id, item.menu.menu_id, {
      page,
      size: 6,
      ...getParams(),
    })
      .then((res) => {
        setFoods(res.data.content);
        setTotalPages(res.data.totalPages);
      })
      .finally(() => setFoodLoading(false));
  }, [item, selected, page]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <section className="bg-gray-50 min-h-screen">
      <NavFilter />

      <div className="max-w-7xl mx-auto p-6">

        {/* ================= SMALL BANNER ================= */}
        <div className="bg-white rounded-2xl shadow p-4 flex gap-6 items-center">
          <img
            src={item?.restaurent_picture || Image}
            className="w-40 h-28 rounded-xl object-cover"
            onError={(e) => {
                        e.target.onerror = null; // prevent infinite loop if fallback fails
                        e.target.src = Image;      // fallback to default image
                      }}
          />

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{item?.restaurent_name}</h1>
            <p className="text-gray-500">{item?.restaurent_brand}</p>

            <div className="flex gap-3 text-sm mt-1">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                ⭐ Excellent
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                20-30 mins
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Delivery ₹{item?.restaurent_delivary_fee}
              </span>
            </div>
          </div>
        </div>

        {/* ================= MAIN SECTION ================= */}
        <div className="flex gap-6 mt-6">

          {/* ===== SIDEBAR ===== */}
          <div className="w-60 bg-white rounded-2xl shadow p-4 h-fit sticky top-24">
            <h2 className="font-bold mb-3">Menu</h2>

            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setSelected(f);
                  setPage(0);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition ${
                  selected === f
                    ? "bg-red-500 text-white"
                    : "hover:bg-red-50 text-gray-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ===== ITEMS ===== */}
          <div className="flex-1">
            <RestaurentItems
              title={selected}
              foods={foods}
              loading={foodLoading}
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
              restaurantId={item?.restaurant_id}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurent;
