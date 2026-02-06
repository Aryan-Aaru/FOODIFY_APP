// import NavFilter from "../components/NavFilter";
// import burger from '../assets/burgur.jpg';
// import sushi from '../assets/sushi.jpg'
// import { useNavigate } from "react-router-dom";
// import FilterComponent from "../components/FilterComponent";
// import RestaurantsCard from "../components/RestaurentCard";
// import { useState } from "react";
// import { useEffect } from "react";
// import {getAllRestaurents} from "../apis/RestaurentAPI";
// const HomePage = () => {
//     const navigate = useNavigate();
//     const [restaurants, setRestaurants] = useState([]);
//     const [page, setPage] = useState(0);
//     const [size] = useState(5);
//     const [totalPages, setTotalPages] = useState(0);
//     const [loading, setLoading] = useState(false);
//     // let items  = [
//     //     {
//     //         id:1,
//     //         picture : {sushi},
//     //         RestaurentName : "Green Bowl & Co.",
//     //         RestaurentInfo : ["Healthy", "vegan"],
//     //         timetaken : "25-50 min", 
//     //         feetaken : "free",
//     //         favorate : false,
//     //         rating : 4.8
//     //     },
//     //     {
//     //         id:3,
//     //         picture : {sushi},
//     //         RestaurentName : "Aryan",
//     //         RestaurentInfo : ["Healthy", "vegan"],
//     //         timetaken : "25-50 min", 
//     //         feetaken : "free",
//     //         favorate : true,
//     //         rating : 4.8
//     //     },
//     //     {
//     //         id:2,
//     //         picture : {sushi},
//     //         RestaurentName : "Bro",
//     //         RestaurentInfo : ["Healthy", "vegan"],
//     //         timetaken : "25-50 min", 
//     //         feetaken : "free",
//     //         favorate : false,
//     //         rating : 4.8
//     //     }
//     // ]

//     const fetchRestaurants = async () => {
//         setLoading(true);
//         getAllRestaurents({
//             page : page, 
//             size : size
//         })
//             .then((res) => {
//                 console.log(res);
//                 setRestaurants(res.data.content);
//                 setTotalPages(res.data.totalPages);
//             } )
//             .catch((err) => {
//                 console.log(err);
//                 alert(`${err.message}`);
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//         // } finally {
//         // setLoading(false);
//         // }
//     };

//     useEffect(() => {
//         fetchRestaurants();
//     }, [page]);

//     const handleClick = (restaurant) => {
//         navigate(`/restaurent/${restaurant.id}`, { state: { restaurant } });
//     };
//     return (
//         <div className="bg-[#f9fafb] min-h-svh">
//             <NavFilter />
//             <main className=" p-6 flex flex-col gap-6">
                
//                 <section className="  flex gap-10">
//                     <section className="w-[68%] h-[210px] cursor-pointer relative rounded-2xl overflow-hidden ">
//                         <img src={sushi} alt="food image" className="h-full w-full"/>
//                         <div className=" bg-[#39353567] absolute h-full gap-4  items-start flex flex-col top-4 left-8">
//                             <div className=" flex flex-col items-start">
//                                 <div className="px-2 font-bold rounded-full text-sm text-white bg-[#f44444]">Limited Offer</div>
//                                 <h1 className="text-3xl font-bold text-white">
//                                     50% OFF
//                                 <br />
//                                     Sushi Platter
//                                 </h1>
//                             </div>
//                             <p className="text-[12px] text-white">On all Orders above $30</p>
//                             <button className=" cursor-pointer hover:text-[#f44444] py-2 px-4 bg-white text-black text-sm font-[600] rounded-full">Order Now</button>
//                         </div>                    
//                     </section>
//                     <section className=" w-[30%] cursor-pointer h-[210px] text-white overflow-hidden rounded-2xl relative">
//                         <img src={burger} alt="food image" className="h-full w-full"/>
//                         <div className=" gap-1  bg-[#39353567] absolute bottom-4 left-6 flex flex-col items-start">
//                             <div className="text-sm px-2 py-1 rounded-xl bg-[#ffffff43]">New Arrival</div>
//                             <div>
//                                 <h3 className="text-2xl font-bold">Burger Kingpin</h3>
//                                 <p className="text-[12px]">4.8</p>
//                             </div>
//                         </div>
//                     </section>
//                 </section>
//                 <section className=" flex gap-6">

//                     {/* <FilterComponent /> */}
//                     <section className="w-full">
//                         <div className="flex justify-between w-full">
//                             <h1 className="text-xl font-bold">All Restaurants</h1>
//                             <p className="text-[12px] font-bold text-[#6b7382]">Sorted by: <span className="text-black">Recommended</span> </p>
//                         </div>
//                         <div className="mt-5 flex cursor-pointer flex-col gap-4">
                            
//                             {restaurants.map((item) => (
//                             <RestaurantsCard
//                                 key={item.restaurant_id}
//                                 itm={{
//                                 id: item.restaurant_id,
//                                 picture: item.restaurent_picture,
//                                 RestaurentName: item.restaurent_name || "Unnamed Restaurant",
//                                 RestaurentInfo: [item.restaurent_brand || "Food"],
//                                 timetaken: "25-50 min",
//                                 feetaken: item.restaurent_delivary_fee || "Free",
//                                 favorate: item.isPopular,
//                                 rating: 4.8
//                                 }}
//                             />
//                             ))}


//                             {/* {restaurants.map(r => (
//                                 <div key={r.id} onClick={() => handleClick(r)}>
//                                 {r.name}
//                                 </div>
//                             ))} */}
//                             {/* <RestaurantsCard /> */}
//                         </div>

//                         <div className="flex justify-center gap-2 mt-6">
//                             <button
//                             disabled={page === 0}
//                             onClick={() => setPage(page - 1)}
//                             className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
//                             >
//                             Prev
//                             </button>

//                             {[...Array(totalPages)].map((_, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => setPage(i)}
//                                 className={`px-3 py-1 rounded ${
//                                 page === i ? "bg-black text-white" : "bg-gray-200"
//                                 }`}
//                             >
//                                 {i + 1}
//                             </button>
//                             ))}

//                             <button
//                             disabled={page === totalPages - 1}
//                             onClick={() => setPage(page + 1)}
//                             className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
//                             >
//                             Next
//                             </button>
//                         </div>
//                     </section>
//                 </section>
//             </main>
//         </div>
//     )
// }

// export default HomePage;



import NavFilter from "../components/NavFilter";
import burger from "../assets/burgur.jpg";
import sushi from "../assets/sushi.jpg";
import { useNavigate } from "react-router-dom";
import RestaurantsCard from "../components/RestaurentCard";
import { useState, useEffect } from "react";
import { getAllRestaurents } from "../apis/RestaurentAPI";
import FilterComponent from "../components/FilterComponent";

const HomePage = () => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("recommended");
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const fetchRestaurants = async () => {
    setLoading(true);

    try {
      const res = await getAllRestaurents({ page, size });

      setRestaurants(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [page]);

  const handleClick = (restaurant) => {
    navigate(`/restaurent/${restaurant.id}`, { state: { restaurant } });
  };

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    switch (sortType) {
      case "rating":
        return (b.rating || 0) - (a.rating || 0);

      case "delivery":
        return (a.restaurent_delivary_fee || 0) - (b.restaurent_delivary_fee || 0);

      case "popular":
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);

      default:
        return 0;
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavFilter />

      {/* ================= MAIN CONTAINER ================= */}
      <main className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-8">

        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* BIG OFFER */}
          <div className="lg:col-span-2 relative h-56 rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img
              src={sushi}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-center text-white gap-3">
              <span className="bg-red-500 px-3 py-1 text-xs font-semibold rounded-full w-fit">
                Limited Offer
              </span>

              <h1 className="text-4xl font-bold leading-tight">
                50% OFF <br /> Sushi Platter
              </h1>

              <p className="text-sm opacity-90">On all orders above $30</p>

              <button className="mt-2 bg-white text-black w-fit px-5 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition">
                Order Now
              </button>
            </div>
          </div>

          {/* SIDE CARD */}
          <div className="relative h-56 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={burger}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />

            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end text-white">
              <span className="bg-white/30 text-xs px-3 py-1 rounded-full w-fit">
                New Arrival
              </span>

              <h3 className="text-2xl font-bold mt-2">Burger Kingpin</h3>
              <p className="text-sm">⭐ 4.8</p>
            </div>
          </div>
        </section>
        {/* <FilterComponent /> */}

        {/* ================= RESTAURANTS ================= */}
        <section className="flex flex-col gap-6">

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">All Restaurants</h1>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Sorted by</span>

              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="bg-gray-100 rounded-full px-4 py-1 font-semibold cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="rating">Top Rated</option>
                <option value="delivery">Delivery Time</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-5">
            {loading && <p>Loading...</p>}

            {!loading &&
              restaurants.map((item) => (
                <RestaurantsCard
                  key={item.restaurant_id}
                  onClick={() =>
                    handleClick({ id: item.restaurant_id })
                  }
                  itm={{
                    id: item.restaurant_id,
                    picture: item.restaurent_picture,
                    RestaurentName:
                      item.restaurent_name || "Unnamed Restaurant",
                    RestaurentInfo: [item.restaurent_brand || "Food"],
                    timetaken: "25-50 min",
                    feetaken: item.restaurent_delivary_fee || "Free",
                    favorate: item.isPopular,
                    rating: 4.8,
                  }}
                />
              ))}
          </div>

          {/* ================= PAGINATION ================= */}
          <div className="flex justify-center items-center gap-2 mt-4">

            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 rounded-lg bg-white shadow disabled:opacity-40"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`px-4 py-2 rounded-lg shadow transition
                  ${
                    page === i
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages - 1}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 rounded-lg bg-white shadow disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
