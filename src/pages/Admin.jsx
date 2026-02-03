import { useState } from "react";
import AdminAside from "../components/Admin/AdminAside";
import AdminNav from "../components/Admin/AdminNav"
import MenuPage from "./MenuPage";
import AdminDasboard from "./AdminDasboard";
import AdminRestaurent from "./AdminRestaurent";
import OrderManagement from "./OrderManagement";
import EarningPage from "./EarningPage";
import { Outlet } from "react-router-dom";
const Admin = () => {


    return (
        <section className="flex bg-[#f8f9fa]">
            <AdminAside  />
            <div className="w-full h-full">
                <AdminNav />
                {/* {
                    (page === 'Dashboard') ? <AdminDasboard /> : 
                    (page === 'Orders') ? <OrderManagement /> : 
                    (page === 'Menu_Management') ? <MenuPage /> : 
                    (page === 'Restaurants')? <AdminRestaurent /> : 
                    (page === 'Earnings')? <EarningPage /> : <h1>Page Not Found</h1>
                } */}
                <Outlet />
            </div>
            
        </section>
    )
}

export default Admin;