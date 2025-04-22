import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets_frontend/assets"

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

    return (
        <div className="flex items-center justify-between text-sm py-5 mb-5 border-b-3 border-b-gray-400 m-2 2xl:mx-30 xl:mx-20 shadow-lg">
            <img onClick={()=>navigate("/")} className="w-45 cursor-pointer xl:w-44 2xl:w-65" src={assets.logo} alt="image" />
            <ul className="hidden xl:flex items-start xl:gap-20 xl:text-xl gap-10 font-bold 2xl:text-3xl">
                <NavLink to="/">
                    <li className="py-2">Home</li>
                    <hr className="border-none outline-none h-1 bg-blue-500 w-5/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/doctors">
                    <li className="py-2">All Doctors</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/about">
                    <li className="py-2">About</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/contact">
                    <li className="py-2">Contact</li>
                    <hr className="border-none outline-none h-1 bg-blue-500  w-5/5 m-auto hidden" />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {
                    token
                        ? <div className="flex items-center gap-2  cursor-pointer group relative">
                            <img className=" rounded-full w-12 xl:w-15 2xl:w-20 " src={assets.profile_pic} alt="image" />
                            <img className="w-2.5 lg:w-5 " src={assets.dropdown_icon} alt="drop" />
                            <div className="absolute top-0 right-0 pt-22 md:pt-28 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                                <div className="min-w-58 text-[20px] bg-stone-100 rounded flex flex-col gap-4 p-5">
                                    <p onClick={() => navigate("my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                                    <p onClick={() => navigate("my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                                    <p /*onClick={() => setToken(false) } */  onClick={() => {setToken(false); navigate("/login");}} className="hover:text-black cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate("/login")} className="bg-blue-300 text-black px-8 py-4 rounded-full font-semibold md:block text-2xl" >CreateAccount</button>
                }
                <img onClick={()=> setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
                {/* ---------- Mobile Menu -------- */}
                <div className={`${showMenu ? "fixed w-full":"h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className="flex items-center justify-between px-4 py-5">
                        <img className="w-40" src={assets.logo} alt="" />
                        <img className="w-7" onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <NavLink  onClick={()=> setShowMenu(false)} to="/"><p className="px-4 py-2 rounded-full inline-block">Home</p></NavLink>
                        <NavLink  onClick={()=> setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded-full inline-block">All Doctors</p></NavLink>
                        <NavLink  onClick={()=> setShowMenu(false)} to="/about"><p className="px-4 py-2 rounded-full inline-block">About</p></NavLink>
                        <NavLink  onClick={()=> setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded-full inline-block">Contact</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
