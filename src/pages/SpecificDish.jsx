
import AddToCart from "../components/AddToCart";
import NavFilter from "../components/NavFilter";
import NavbarOff from "../components/NavbarOff";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFoodbyId } from "../apis/FoodAPI";
import fallbackImg from "../assets/pizzaSlice.jpg";

const SpecificDish = () => {
  const { restaurantId, foodId } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [count, setCount] = useState(1);
  const isLoggedIn = !!localStorage.getItem("token");

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
      {isLoggedIn ? <NavFilter /> : <NavbarOff />}
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-8">

        <div className="grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl shadow-lg p-6">

          <div className="relative">
            <img
              src={food.food_image || fallbackImg}
              alt={food.food_name}
              className="w-full h-[260px] object-cover rounded-xl"
              onError={(e) => (e.target.src = fallbackImg)}
            />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500">
              <IoMdHeartEmpty />
            </button>
          </div>

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

            {isLoggedIn ? (
              <AddToCart
                food={food}
                cnt={count}
                restaurantId= {restaurantId}
                inc={() => setCount(count + 1)}
                dec={() => setCount(count > 1 ? count - 1 : 1)}
              />
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="bg-[#ef4444] text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-white border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition"
                >
                  Sign Up
                </button>
              </div>
            )}
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
