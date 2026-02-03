
import { useState } from 'react';
import Image from '../assets/Image.jpg';
import Login from './Login';
import { useLocation } from 'react-router-dom';
import Signup from './Signup';
import { NavLink, Outlet } from "react-router-dom";

const AuthenticatePage = () => {

    // let [Active, setActive] = useState('Login');
    // const location = useLocation();

    return (
        <section className="w-full flex justify-center items-center min-h-screen">
            <div className='w-[70vw] flex gap-4 flex-wrap justify-between'>
                <div className='flex gap-6 w-[50%] flex-col items-center'>
                    <img src={Image} alt="" className=' overflow-hidden h-[50vh] w-[80%]' />
                    <div>
                        <h1 className='text-3xl font-bold text-center'>Delicious food, <br /> delivared.</h1>
                        <p className='text-sm text-center'>
                            Order from top local restaurants and get your cravings <br /> delivered hot & fresh to your doorstep.
                        </p>
                    </div>
                    
                </div>
                <div className='w-[40%] flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold'>Welcome Back</h1>
                        <p className='text-sm'>Sign in to find your favoriate restaurants.</p>
                    </div>
                    <div>
                        <div className='flex  justify-center bg-[#f3f4f6] gap-4 font-bold py-1 w-full rounded-xl'>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                            `py-1 w-[47%]  text-center  ${
                                isActive ? "bg-white text-[#ef4444]" : ""
                            }`
                            }
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/signup"
                            className={({ isActive }) =>
                            `py-1 w-[47%]  text-center ${
                                isActive ? "bg-white text-[#ef4444]" : ""
                            }`
                            }
                        >
                            Sign Up
                        </NavLink>
                        </div>
                        
                        <Outlet />
                    </div>
                </div>
            </div>
             
        </section>
    )
}

export default AuthenticatePage;