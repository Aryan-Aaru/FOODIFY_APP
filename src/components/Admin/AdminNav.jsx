import { FaRegMoon } from 'react-icons/fa';
// import AdminAside from './AdminAside';
import { useLocation } from 'react-router-dom';
const AdminNav = ({name}) => {
    const { pathname } = useLocation();

  const titleMap = {
    "/admin": "Dashboard",
    "/admin/dashboard": "Dashboard",
    "/admin/orders": "Orders",
    "/admin/menu": "Menu Management",
    "/admin/restaurants": "Restaurants",
    "/admin/earnings": "Earnings",
  };
    return (
        <nav className='bg-white w-full flex justify-between py-4 px-15'>
            <h1 className='font-bold text-2xl'>{titleMap[pathname] || "Admin"}</h1>
            <div className='flex items-center'>
                <FaRegMoon />
            </div>
            
        </nav>
    )
}

export default AdminNav;