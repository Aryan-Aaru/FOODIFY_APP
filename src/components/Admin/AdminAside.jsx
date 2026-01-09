import FoodifyLogo from '../../assets/FinalFoodify.png';
import { RxDashboard } from "react-icons/rx";
import { MdReceiptLong } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
import { MdPayments } from "react-icons/md";

const AdminAside = ({select, page}) => {
    let adminOptions = [
        {icon:<RxDashboard />, label: 'Dashboard'},
        {icon:<MdReceiptLong />, label: 'Orders'}, 
        {icon:<MdRestaurantMenu />, label: 'Menu_Management'}, 
        {icon:<MdStoreMallDirectory/>, label: 'Restaurants'}, 
        {icon:<MdPayments />, label: 'Earnings'}
    ];
    return (
        <aside className='w-[20%] min-h-[100vh] bg-white'>
            <div className='h-[7vh] flex justify-center items-center'>
                <img src={FoodifyLogo} alt="" className='h-10 cursor-pointer' />
            </div>
            <hr className="text-[#808694] px-2"/>
            <div className='h-[80%] pt-4 flex  bg-[] flex-col gap-2'>
                {
                    adminOptions.map((items, index) => {return <li className={`flex cursor-pointer rounded items-center text-lg p-2 font-bold ${(page === items.label) ? 'text-[#ea2a33] bg-[#fdecec]' : 'hover: hover:text-[#ea2a33]' }  gap-3`} onClick={() => {select(items.label)}} key={index}> <div className='w-[25%] text-lg flex justify-end'>{items.icon}</div> <p className=' w-[40%]'>{items.label}</p></li>;
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