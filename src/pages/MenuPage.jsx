
import { useState, useEffect } from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { BsBan } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import MenuItemCnt from "../components/Admin/MenuItemCnt";
import MenuItemCard from "../components/Admin/MenuItemCard";
import { getFoodsByRestaurant } from "../apis/RestaurentAPI";

const MenuPage = () => {

  const { restaurantId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const restaurant = location.state?.restaurant;
  const menuId = restaurant?.menu?.menu_id;

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [defaultItem, setDefaultItem] = useState("All Items");
  const [styleSearch, setStyleSearch] = useState(false);

  const items = ["All Items", "Starters", "Mains", "Desserts"];

  const safeFoods = Array.isArray(foods) ? foods : [];

  const overallView = [
    {
      icon: <FaBoxArchive />,
      title: "TOTAL",
      value: safeFoods.length,
      message: "Items in Menu"
    },
    {
      icon: <FaCheckCircle />,
      title: "ACTIVE",
      value: safeFoods.filter(f => f?.available).length,
      message: "Items in Menu"
    },
    {
      icon: <BsBan />,
      title: "SOLD OUT",
      value: safeFoods.filter(f => f?.available === false).length,
      message: "Items in Menu"
    }
  ];

  useEffect(() => {
    if (!restaurantId || !menuId) return;

    const typeValue = defaultItem === "All Items" ? "All" : defaultItem;

    const fetchFoods = async () => {
      setLoading(true);
      try {
        const res = await getFoodsByRestaurant(
          restaurantId,
          menuId,
          {
            type: typeValue,
            page: 0
          }
        );

        setFoods(res?.data?.content || []);
      } catch (err) {
        console.error("Failed to fetch foods", err);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [restaurantId, menuId, defaultItem, search]);

  return (
    <section className="p-8">

      <div className="flex gap-8 items-center">
        <FaArrowLeft
          className="text-lg hover:text-red-500 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div>
          <h1 className="text-2xl font-bold">
            Menu – {restaurant?.restaurent_name || "Restaurant"}
          </h1>
          <p className="text-sm text-gray-500">
            Restaurant ID: {restaurantId}
          </p>
        </div>
      </div>

      <section className="relative p-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 pb-8">
          {overallView.map((item, index) => (
            <MenuItemCnt key={index} itm={item} />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex p-1 gap-4">
            {items.map(item => (
              <li
                key={item}
                onClick={() => setDefaultItem(item)}
                className={`list-none py-2 px-4 cursor-pointer rounded-full font-bold text-lg
                ${defaultItem === item
                  ? "bg-[#ea2a33] text-white"
                  : "hover:bg-[#fdecec] bg-white shadow text-[#ea2a33]"
                }`}
              >
                {item}
              </li>
            ))}
          </div>

          <div
            className={`bg-white shadow flex items-center py-2 px-3 rounded text-lg
            ${styleSearch ? "border-2 border-[#ee4444]" : ""}`}
          >
            <IoIosSearch className="text-2xl w-[50px]" />
            <input
              type="text"
              className="outline-none w-[400px]"
              placeholder="Search menu items..."
              value={search}
              onFocus={() => setStyleSearch(true)}
              onBlur={() => setStyleSearch(false)}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <RxCross1
                className="hover:text-[#ea2a33] cursor-pointer"
                onClick={() => setSearch("")}
              />
            )}
          </div>
        </div>
        <div className="pt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full">

          {loading && <p>Loading...</p>}

          {!loading && safeFoods.length === 0 && (
            <p className="text-gray-400 text-center col-span-full">
              No menu items found
            </p>
          )}

          {!loading && safeFoods.map((item, index) => (
            <MenuItemCard key={index} itm={item} />
          ))}
        </div>

        <div className="fixed right-10 bottom-8 h-15 w-15 flex text-lg justify-center items-center rounded-full bg-[#ee4444] text-white cursor-pointer hover:text-black hover:bg-[#ea2a33]">
          <FaPlus />
        </div>
      </section>
    </section>
  );
};

export default MenuPage;
