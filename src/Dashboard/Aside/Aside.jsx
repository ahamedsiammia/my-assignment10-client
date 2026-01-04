import React, { use, useState } from 'react';
import { AiFillDashboard, AiFillHome, AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import { FaUserNurse } from 'react-icons/fa';
import { BiDonateBlood } from 'react-icons/bi';
import { GiAnatomy } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const Aside = () => {
      const {LogOut}=use(AuthContext);
    const [open, setOpen] = useState(false);
    return (

     <div className="flex min-h-screen">

            <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-4 text-2xl fixed top-4 left-4 z-50 bg-gradient-to-r from-[#8A00FF] to-[#FF6A00] text-white rounded-full shadow-lg hover:bg-red-700 transition"
            >
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* ASIDE AREA */}
            <aside
                className={`fixed lg:static top-0 z-30 left-0 h-full w-64 bg-gradient-to-r from-[#8A00FF] to-[#FF6A00] text-white p-6 flex flex-col justify-between transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div>
                    {/* LOGO / TITLE */}
                    <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md">
                         Dashboard
                    </h2>

                    {/* NAVIGATION */}
                    <nav className="flex-1 flex flex-col gap-3">

                        <NavLink
                            to="/"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-700 ${isActive ? "bg-indigo-600" : ""
                                }`
                            }
                        >
                            <AiFillHome size={20} />
                            <span>Home</span>
                        </NavLink>

                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-red-600 font-semibold shadow-md"
                                    : "hover:bg-red-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <AiFillDashboard className="h-5 w-5" /> Dashboard
                        </NavLink>

                        <NavLink
                            to="/dashboard/my-listings"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-red-600 font-semibold shadow-md"
                                    : "hover:bg-red-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <MdOutlinePublishedWithChanges className="h-5 w-5" /> My Listings
                        </NavLink>

                        <NavLink
                            to="/dashboard/my-orders"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-red-600 font-semibold shadow-md"
                                    : "hover:bg-red-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <MdOutlinePublishedWithChanges className="h-5 w-5" /> My Orders
                        </NavLink>

                        <NavLink
                            to="/dashboard/myprofile"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-red-600 font-semibold shadow-md"
                                    : "hover:bg-red-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <MdOutlinePublishedWithChanges className="h-5 w-5" /> My Profile
                        </NavLink>


                        {/* {role === "admin" && (
                            <NavLink
                                to="/dashboard/all-users"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                        ? "bg-white text-red-600 font-semibold shadow-md"
                                        : "hover:bg-red-500 hover:bg-opacity-80"
                                    }`
                                }
                            >
                                <FiUsers className="h-5 w-5" /> All Users
                            </NavLink>
                        )} */}

                        {/* {role === 'donor' && (
                            <NavLink
                                to="/dashboard/my-donation-requests"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                        ? "bg-white text-red-600 font-semibold shadow-md"
                                        : "hover:bg-red-500 hover:bg-opacity-80"
                                    }`
                                }
                            >
                                <BiDonateBlood className="h-5 w-5" /> My Request
                            </NavLink>
                        )} */}

                        {/* {role === "admin" && (
                            <NavLink
                                to="/dashboard/all-requests"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                        ? "bg-white text-red-600 font-semibold shadow-md"
                                        : "hover:bg-red-500 hover:bg-opacity-80"
                                    }`
                                }
                            >
                                <BiDonateBlood className="h-5 w-5" /> All Requests
                            </NavLink>
                        )} */}

                        {/* {role === "volunteer" && (
                            <NavLink
                                to="/dashboard/all-requests"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                        ? "bg-white text-red-600 font-semibold shadow-md"
                                        : "hover:bg-red-500 hover:bg-opacity-80"
                                    }`
                                }
                            >
                                <BiDonateBlood className="h-5 w-5" /> All Requests
                            </NavLink>
                        )} */}
                    </nav>
                </div>

                {/* LOGOUT BUTTON */}
                <div className="p-4 border-t border-red-400">
                    <button
                        
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-red-600 bg-white hover:bg-red-50 transition shadow-sm"
                    >
                        <FiLogOut className="h-5 w-5" /> Logout
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default Aside;
