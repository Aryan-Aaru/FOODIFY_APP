import { FaArrowLeft } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
const CartNav = () => {

    const navigate = useNavigate()
  return (
    <div className=" flex items-center justify-between py-4 px-12 bg-white shadow">
      
      <div className="flex items-center gap-3">
        <FaArrowLeft className="text-lg hover:text-red-500 cursor-pointer" onClick={() => {navigate(-1)}} />
        <h2 className="text-xl font-semibold">My Cart</h2>
      </div>

      <button className="text-red-500 cursor-pointer font-medium">
        Clear All
      </button>

    </div>
  );
};

export default CartNav;