import React from "react";
import { NavLink } from "react-router-dom"
import logo from "../assets/logo1.webp"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <img className="w-44 cursor-pointer" src={logo} alt="image" />
            <ul>
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
