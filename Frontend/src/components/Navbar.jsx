import React from "react";
import { NavLink } from "react-router-dom"
import {assets} from "../assets/assets_frontend/assets"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <img className="w-44 cursor-pointer" src={assets.logo} alt="image" />
            <ul className="hidden md:flex items-start gap-5 font-medium">
                <NavLink to="/">
                    <li>Home</li>
                    <hr />
                </NavLink>
                <NavLink to="/doctors">
                    <li>AllDoctors</li>
                    <hr />
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                    <hr />
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                    <hr />
                </NavLink>
            </ul>
            <div>
                <button>CreateAccount</button>
            </div>
        </div>

    )
}

export default Navbar;
