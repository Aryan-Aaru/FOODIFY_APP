

import FoodifyLogo from "../../assets/FinalFoodify.png";
import { RxDashboard } from "react-icons/rx";
import { MdReceiptLong, MdRestaurantMenu, MdStoreMallDirectory, MdPayments } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminAside = () => {
    const adminOptions = [
    { icon: <RxDashboard />, label: "Dashboard", path: "/admin/dashboard" },
    { icon: <MdReceiptLong />, label: "Orders", path: "/admin/orders" },
    { icon: <MdStoreMallDirectory />, label: "Restaurants", path: "/admin/restaurants" },
    { icon: <MdPayments />, label: "Earnings", path: "/admin/earnings" },
    ];


  return (
    <aside className="w-[260px] min-h-screen bg-white flex flex-col">
      
      {/* Logo */}
      <div className="h-[70px] flex justify-center items-center">
        <img
          src={FoodifyLogo}
          alt="Foodify Logo"
          className="h-10 cursor-pointer"
        />
      </div>

      <hr />

      {/* Navigation */}
      <nav className="flex-1 pt-4 flex flex-col gap-1">
        {adminOptions.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 font-semibold rounded-md transition
              ${
                isActive
                  ? "text-[#ea2a33] bg-[#fdecec]"
                  : "text-gray-600 hover:text-[#ea2a33] hover:bg-[#fdecec]"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <hr />

      {/* Admin Info */}
      <div className="h-[80px] flex items-center gap-3 px-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">Admin User</span>
          <span className="text-xs text-gray-500">admin@burgerking.com</span>
        </div>
      </div>
    </aside>
  );
};

export default AdminAside;
