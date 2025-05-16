import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-orange-100">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                        className="h-12 w-12 rounded-full shadow-lg border-2 border-orange-500"
                        alt="Logo"
                    />
                </Link>
                <ul className="flex gap-6 items-center font-semibold text-lg">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `transition-all duration-200 px-4 py-2 rounded-xl hover:bg-orange-100 hover:text-orange-700 ${isActive ? 'text-orange-700 bg-orange-50 shadow' : 'text-gray-800'}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `transition-all duration-200 px-4 py-2 rounded-xl hover:bg-orange-100 hover:text-orange-700 ${isActive ? 'text-orange-700 bg-orange-50 shadow' : 'text-gray-800'}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `transition-all duration-200 px-4 py-2 rounded-xl hover:bg-orange-100 hover:text-orange-700 ${isActive ? 'text-orange-700 bg-orange-50 shadow' : 'text-gray-800'}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `transition-all duration-200 px-4 py-2 rounded-xl hover:bg-orange-100 hover:text-orange-700 ${isActive ? 'text-orange-700 bg-orange-50 shadow' : 'text-gray-800'}`
                            }
                        >
                            Github
                        </NavLink>
                    </li>
                </ul>
                <div className="flex gap-2">
                    <Link
                        to="/login"
                        className="text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 transition shadow-sm"
                    >
                        Log in
                    </Link>
                    <Link
                        to="/register"
                        className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 shadow-md transition"
                    >
                        Get started
                    </Link>
                </div>
            </nav>
        </header>
    );
}

