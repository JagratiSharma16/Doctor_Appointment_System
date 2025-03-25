import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import {assets} from "../assets/assets_frontend/assets"

const Navbar = () => {
    const navigate= useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

    return (
        <div className="flex items-center justify-between text-sm py-5 mb-5 border-b-3 border-b-gray-400 ml-30 mr-30 shadow-lg">
            <img className="w-45 cursor-pointer xl:w-44 2xl:w-65" src={assets.logo} alt="image" />
            <ul className="hidden xl:flex items-start xl:gap-20 xl:text-xl gap-10 font-bold 2xl:text-3xl">
                <NavLink to="/">
                    <li className="py-2">Home</li>
                    <hr className="border-none outline-none h-1 bg-blue-500 w-5/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/doctors">
                    <li className="py-2">All Doctors</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden"/>
                </NavLink>
                <NavLink to="/about">
                    <li className="py-2">About</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden"/>
                </NavLink>
                <NavLink to="/contact">
                    <li className="py-2">Contact</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden"/>
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {
                    token 
                    ? <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className=" rounded-full  md:w-10 xl:w-15 2xl:w-20 " src={assets.profile_pic} alt="image" />
                        <img className="w-4 lg:w-5" src={assets.dropdown_icon} alt="drop" />
                        <div className="absolute top-0 right-0 pt-22 md:pt-28 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-58 text-[20px] bg-stone-100 rounded flex flex-col gap-4 p-5">
                                <p onClick={()=>navigate("my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={()=>navigate("my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div>
                    : <button onClick={()=>navigate("/register")} className="bg-blue-300 text-black px-8 py-4 rounded-full font-semibold md:block text-2xl" >CreateAccount</button>
                }
            </div>
        </div>
    )
}

export default Navbar;
