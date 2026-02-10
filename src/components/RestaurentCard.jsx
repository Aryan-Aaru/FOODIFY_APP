

import { IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Imgs from "../assets/LoginFoodImg.jpg";

const RestaurantsCard = ({ itm }) => {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate(`/restaurent/${itm.id}`)}
      className="
        group
        bg-white
        rounded-2xl
        shadow-sm
        hover:shadow-xl
        transition
        cursor-pointer
        flex
        gap-5
        p-4
        items-center
        
      "
    >
      {/* IMAGE */}
      <div className="w-32 h-28 shrink-0 rounded-xl overflow-hidden">
        <img
          src={itm.picture || Imgs}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Imgs;
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1 h-full">

        {/* TOP */}
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {itm.RestaurentName}
            </h2>

            <p className="text-sm text-gray-500">
              {itm.RestaurentInfo.join(", ")}
            </p>
          </div>

          {/* HEART */}
          <IoMdHeartEmpty
            className="text-xl text-gray-400 hover:text-red-500 transition"
          />
        </div>

        {/* BOTTOM */}
        <div className="flex justify-between items-center text-sm text-gray-600">

          <div className="flex gap-3">
            <span>{itm.timetaken}</span>
            <span>{itm.feetaken}</span>
          </div>

          {/* RATING BADGE */}
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
            ⭐ {itm.rating}
          </span>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsCard;
