import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import {assets} from "../assets/assets_frontend/assets"

const Navbar = () => {
    const navigate= useNavigate();


    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)


    return (
        <div className="flex items-center justify-between text-5m py-5 mb-5 border-b-3 border-b-gray-400 ml-50 mr-50 shadow-lg">
            <img className="w-56 cursor-pointer" src={assets.logo} alt="image" />
            <ul className="hidden md:flex items-start gap-10 font-bold text-2xl">
                <NavLink to="/">
                    <li className="py-1">Home</li>
                    <hr className="border-none outline-none h-1 bg-blue-500 w-5/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/doctors">
                    <li className="py-1">All Doctors</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden"/>
                </NavLink>
                <NavLink to="/about">
                    <li className="py-1">About</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden"/>
                </NavLink>
                <NavLink to="/contact">
                    <li className="py-1">Contact</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden"/>
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {
                    token 
                    ? <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-15 rounded-full" src={assets.profile_pic} alt="image" />
                        <img className="w-4" src={assets.dropdown_icon} alt="drop" />
                        <div className="absolute top-0 right-0 pt-22 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
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
