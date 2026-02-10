

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaPen, FaTrash, FaChevronDown } from "react-icons/fa";
import { updateRstStatus } from "../../apis/RestaurentAPI";

const RestarentCard = ({ itm, onDelete }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(itm.isAvailable || "pending");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const userId = localStorage.getItem("userId"); // Fetch userId

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);
    setShowDropdown(false);
    try {
      await updateRstStatus(itm.restaurant_id, userId, newStatus);
      // Optional: show toast or success message
    } catch (err) {
      alert(err.message || "Failed to update status");
      setStatus(itm.isAvailable); // revert on error
    }
  };

  const goToMenu = () => {
    navigate(`/admin/restaurants/${itm.restaurant_id}/menu`, {
      state: { restaurant: itm },
    });
  };

  return (
    <section
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col gap-3 relative cursor-pointer"
      onClick={goToMenu}
    >
      {/* Restaurant Image */}
      <img
        src={itm.picture}
        alt={itm.restaurent_name}
        className="h-[150px] w-full rounded-xl object-cover cursor-pointer"
      />

      {/* Name, Address, Edit/Delete */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">{itm.restaurent_name}</h2>
          <p className="text-sm text-gray-500">{itm.restaurent_address}</p>
        </div>

        <div className="flex gap-2 items-center">
          {/* Edit */}
          <FaPen
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/admin/restaurants/${itm.restaurant_id}/edit`, {
                state: { restaurant: itm },
              });
            }}
          />
          {/* Delete */}
          <FaTrash
            className="text-gray-500 hover:text-red-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(itm.restaurant_id);
            }}
          />
        </div>
      </div>

      {/* Status Badge with Down Arrow */}
      <div className="relative mt-2" ref={dropdownRef}>
        <button
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold
            ${status === "active"
              ? "bg-green-100 text-green-700"
              : status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-200 text-gray-600"
            }`}
          onClick={(e) => {
            e.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        >
          {status} <FaChevronDown className="text-xs" />
        </button>

        {/* Dropdown appears below the badge */}
        {showDropdown && (
          <div className="absolute top-full mt-1 left-0 bg-white border rounded shadow z-10 w-max">
            {["active", "pending", "closed"].map((s) => (
              <div
                key={s}
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusChange(s);
                }}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RestarentCard;
