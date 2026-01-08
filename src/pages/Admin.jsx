import AdminAside from "../components/Admin/AdminAside";
import AdminNav from "../components/Admin/AdminNav"
import MenuPage from "../components/Admin/MenuPage";
const Admin = () => {
    return (
        <section className="flex bg-[#f8f9fa]">
            <AdminAside />
            <div className="w-full h-full">
                <AdminNav />
                <MenuPage />
            </div>
            
        </section>
    )
}

export default Admin;