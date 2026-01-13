import { useState } from "react";
import AdminAside from "../components/Admin/AdminAside";
import AdminNav from "../components/Admin/AdminNav"
import MenuPage from "./MenuPage";
import AdminDasboard from "./AdminDasboard";
import AdminRestaurent from "./AdminRestaurent";
import OrderManagement from "./OrderManagement";
import EarningPage from "./EarningPage";
const Admin = () => {
    let [page, setPage] = useState('Dashboard');

    let handleChange = (value) => {
        setPage(value);
    }

    return (
        <section className="flex bg-[#f8f9fa]">
            <AdminAside select={handleChange} page={page} />
            <div className="w-full h-full">
                <AdminNav name={page}/>
                {
                    (page === 'Dashboard') ? <AdminDasboard /> : 
                    (page === 'Orders') ? <OrderManagement /> : 
                    (page === 'Menu_Management') ? <MenuPage /> : 
                    (page === 'Restaurants')? <AdminRestaurent /> : 
                    (page === 'Earnings')? <EarningPage /> : <h1>Page Not Found</h1>
                }
            </div>
            
        </section>
    )
}

export default Admin;