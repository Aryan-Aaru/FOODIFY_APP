import FoodifyLogo from '../../assets/FinalFoodify.png';
import { RxDashboard } from "react-icons/rx";
import { MdReceiptLong } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const AdminAside = () => {
    const adminOptions = [
        { icon: <RxDashboard />, label: "Dashboard", path: "/admin/dashboard" },
        { icon: <MdReceiptLong />, label: "Orders", path: "/admin/orders" },
        { icon: <MdRestaurantMenu />, label: "Menu_Management", path: "/admin/menu" },
        { icon: <MdStoreMallDirectory />, label: "Restaurants", path: "/admin/restaurants" },
        { icon: <MdPayments />, label: "Earnings", path: "/admin/earnings" },
    ];
    return (
        <aside className='w-[20%] min-h-[100vh] bg-white'>
            <div className='h-[7vh] flex justify-center items-center'>
                <img src={FoodifyLogo} alt="" className='h-10 cursor-pointer' />
            </div>
            <hr className="text-[#808694] px-2"/>
            <div className='h-[80%] pt-4 flex  bg-[] flex-col gap-2'>
                {
                    adminOptions.map((item, index) => {return  <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 font-bold rounded cursor-pointer
               ${isActive ? "text-[#ea2a33] bg-[#fdecec]" : "hover:text-[#ea2a33]"}`
            }
          >
            <div className="w-[25%] text-lg flex justify-end">{item.icon}</div>
            <p className="w-[40%]">{item.label}</p>
          </NavLink>;
                    })
                }
            </div>
            <hr className="text-[#808694]"/>
            <div className='h-[10%] flex justify-center items-center'>
                <div>
                    <img src="#" alt="profile logo" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-lg font-bold'>Admin User</span>
                    <span className='text-sm'>
                        admin@burgerking.com
                    </span>
                </div>
            </div>
        </aside>
    )
}

export default AdminAside;