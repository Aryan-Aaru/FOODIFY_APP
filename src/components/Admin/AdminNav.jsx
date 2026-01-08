import { FaRegMoon } from 'react-icons/fa';
// import AdminAside from './AdminAside';

const AdminNav = ({name}) => {
    return (
        <nav className='bg-white w-full flex justify-between py-4 px-15'>
            <h1 className='font-bold text-2xl'>{(name) ? `${name}`: "Page Name"}</h1>
            <div className='flex items-center'>
                <FaRegMoon />
            </div>
            
        </nav>
    )
}

export default AdminNav;