import { useState } from "react";
import AdminAside from "../components/Admin/AdminAside";
import AdminNav from "../components/Admin/AdminNav"
import MenuPage from "./MenuPage";
import AdminDasboard from "./AdminDasboard";
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
                    (page === 'Orders') ? <h1>Order Page</h1> : 
                    (page === 'Menu_Management') ? <MenuPage /> : 
                    (page === 'Restaurants')? <h1>Restaurants Page</h1> : 
                    (page === 'Earnings')? <h1>Earning Page</h1> : <h1>Page Not Found</h1>
                }
            </div>
            
        </section>
    )
}

export default Admin;