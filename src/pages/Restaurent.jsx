

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

 
  useEffect(() => {
    setLoading(true);

    getByRestaurentById(id)
      .then((res) => setItem(res.data))
      .finally(() => setLoading(false));
  }, [id]);


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

        <div className="bg-white rounded-2xl shadow p-4 flex gap-6 items-center">
          <img
            src={item?.restaurent_picture || Image}
            className="w-40 h-28 rounded-xl object-cover"
            onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = Image;      
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

        <div className="flex gap-6 mt-6">

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
