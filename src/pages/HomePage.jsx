


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

  const fetchRestaurants = async () => {
    setLoading(true);

    try {
      const res = await getAllRestaurents({ page, size, sortType }, "active");

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
  }, [page, sortType]);

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

      <main className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-8">

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

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

        <section className="flex flex-col gap-6">
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
                {/* <option value="rating">Top Rated</option>
                <option value="delivery">Delivery Time</option> */}
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5">
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
