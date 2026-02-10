import { 
  MapPin, CreditCard, History, Bell, 
  LifeBuoy, Moon, ChevronRight, LogOut, 
  Star, ShieldCheck, PlusCircle, ArrowLeft,
  Search, User, ShoppingBag
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const UserProfileBar = ({usr}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="lg:col-span-3 ">
          
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 flex flex-col items-center">
                <button className="text-red-400 w-full text-right text-sm cursor-pointer font-bold hover:underline">Edit</button>
                <div className="relative mb-6">
                <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                    alt="Alex"
                />
                <div className="absolute bottom-1 right-1 bg-red-500 p-2 rounded-xl border-4 border-white shadow-lg">
                    <ShieldCheck size={16} className="text-white" />
                </div>
                </div>
                
                <h2 className="text-2xl font-black">{usr?.name}</h2>
                <p className="text-gray-400 text-sm mb-4">+1 {usr?.phone_no}</p>
                
                {/* <div className="bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-[10px] font-black flex items-center gap-1.5 mb-8 uppercase tracking-widest">
                <Star size={12} className="fill-current" /> Gold Member
                </div>

                <div className="grid grid-cols-3 w-full border-y border-gray-50 py-6 mb-8 text-center">
                <div>
                    <p className="font-bold text-lg">24</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Orders</p>
                </div>
                <div className="border-x border-gray-100">
                    <p className="font-bold text-lg flex justify-center items-center gap-0.5">4.9<span className="text-amber-400">★</span></p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Rating</p>
                </div>
                <div>
                    <p className="font-bold text-lg">$120</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Saved</p>
                </div>
                </div> */}

                <button className="w-full py-4 cursor-pointer rounded-2xl border border-red-50 text-red-500 font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-all"
                 onClick={() => {localStorage.clear(); navigate('/login')}}>
                <LogOut size={18} /> Log Out
                </button>
            </div>
            </div>
        </>
    )
}

export default UserProfileBar;